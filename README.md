# A basic NODEJS API for an online store.
This project can be used as a boiler plate for building a MongoDB-Express-Node backend application.

Base URL: https://web-store-api.vercel.app/

Hit all the Routes with this Url as its base to access the API

## Features:
  - CRUD operations for products
  - User registration
  - User authentication with email and password

## Getting Started
### Prerequisites

 - NodeJS, NPM (https://www.npmjs.com/get-npm)
 - A MongoDB server, local or remote. Example: mLab (https://mlab.com/)

 ### Installing

  - Clone the repo and check out the code
  - Run 
    ```
    $ npm install 

  - Set following environment variables in a .env file in the root directory
    ``` 
    #MongoDB connection string
    MONGODB_URI = <some string>

  - Run ``$ npm run devstart`` to start the backend express server on port 8000


## Available Routes
### User Authentication

- Register new user with email

```
Method: POST
Route:
/api/v1/users/register

- Login user with email

```
Method: post
Route:
/api/v1/user/login
```

### Product Information

- Get all products

```
Method: GET
Route:
/api/v1/progucts
```

- Get a specific product with productID

```
Method: GET
Route:
/api/v1/products/by-id/:productID
```

- Get all products in a specific category

```
Method: GET
Route:
/api/v1/products/by-category/:productCategory

## Running the tests

Currently No tests are available.
```