# File Uploader

This is a simple testing project which support reading & uploading file (support html/text format only) by Laravel framework at Back End side and Reacjs at Front End side. The communication between Back End & Front End has been implemented by RestAPI which is a common way in modern Web development.
User who is only viewing the file list as a guess no need to do the login.

## Getting Started

### Prerequisites

Clone source code of this project
https://github.com/nvaivan/laravel_test.git

Create an empty database

Modify .env file to make proper configuration of your database

### Installing

Make sure composer has been installed on your environment already (otherwise, follow up here https://getcomposer.org/download/)

1. Run command to download all necessary dependencies:

 composer update/composer install

2. Migrate database
```
$ php artisan migrate
```

3. Run the command to install all the dependece packages necessary for our project
```
npm install
```

4. Run the command to start Laravel server
```
php artisan serve
```

Run the command to build .js file(s) for your project when changing reactjs source code file(s) (which can be found at resources/js/src)
```
npm run dev 
```

Need to grant the web server write permissions to the storage and public directories

### Running the tests

http://127.0.0.1:8000

### Example my test:
https://gyazo.com/f2e7086f3d687c8c51a5064f2910ed0a

Search function still doesn't work. I just add GUI, it may be implement later.
And I can't get your font, because that is font pro. I used a free font.

## Authors

* **Van Doan** - (https://github.com/nvaivan)


## UPDATE SEARCH FUNCTION
I added search function, you can search text in document content.

