<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

use App\Document;
use App\User;

class DocumentController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        $documents = Document::all();
        
        $lists = [];

        if(count($documents)>0){
            foreach($documents as $file){
                $list_doc["id"] = $file->id;
                $user = User::find($file->userId);
                $list_doc["uploaded_by"] = isset($user->name) ? $user->name: "Admin";
                $lists[] =  $list_doc;
            }
        }
        
        return response()
            ->json($lists);
    }

    
    //save upload file
    public function store(Request $req)
    {
        $userId  = 0;

        if ($this->middleware('auth'))
        {
            //return response()->json(['message', "Please login/ register to upload file"]);
            $user = \Auth::user();
            if( $user)
                $userId = $user->id;
        }
        

        // getting all of the post data
        $file = array('file' => $req->fileUpload);
        // setting up rules
        $rules = array('file' => 'required'); // max size max:10000
        // doing the validation, passing post data, rules and the messages
        $validator = Validator::make($file, $rules);
        
        if ($validator->fails()) {
            
            return response()->json(['message', $validator->errors()->all()[0]]);
        }
        
        $document = new Document; 

        $fileUpload = $file['file'];

        if ($fileUpload->getMimeType() == "text/plain" || $fileUpload->getMimeType() == "text/html" ) {

            $path = $fileUpload->move('upload', $fileUpload->getClientOriginalName());
            $content = File::get($path);
            $document->userId = $userId;
            $document->content = $content;

            if(strlen($content) > 100000 ){
                return response()->json(['message', "Data too long "]);
            }

            if ($document->save()) {
                return response()->json($document);
            }
            else   
                return response()->json(['message', "System error"]);
        }
        else return response()->json(['message', "Your file is wrong type"]);
        
        

      
    }

    public function show($id)
    {
        //
        $document = Document::find($id);
        
        return response()
            ->json($document);
    }


    

}
