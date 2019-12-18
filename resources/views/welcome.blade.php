
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Home</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <script type="text/javascript">
            window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>
    </head>
    <body>
             
        <div class="container">
            @if (Route::has('login'))
                    <div class="top-left links">
                        @auth
                            
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                                    {{ Auth::user()->name }} - 
                                    {{ __('Logout') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        @else
                            <a href="{{ route('login') }}">Login | </a>

                            @if (Route::has('register'))
                                <a href="{{ route('register') }}"> &nbsp; Register</a>
                            @endif
                        @endauth
                    </div>
                @endif  
            <div id="app"></div>
        </div>
        <script src="{{asset('js/app.js')}}"></script>
        </body>
</html>
