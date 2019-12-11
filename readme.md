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

Migrate database
```
$ php artisan migrate
```

Run the command to install all the dependece packages necessary for our project
```
npm install
```

Run the command to start Laravel server
```
php artisan serve
```

Run the command to build .js file(s) for your project when changing reactjs source code file(s) (which can be found at resources/js/src)
```
npm run dev 
```

### Running the tests

http://127.0.0.1:8000

## Authors

* **Van Doan** - (https://github.com/nvaivan)
