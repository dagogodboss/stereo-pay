# Stereo Pay REST API

> Node.js Nest.js API with  Mysql DB and TypeORM, Redis

## Description
This Application is to to build a simple REST api using [NestJs](<https://docs.nestjs.com>). For data storage we use MySQL. The application Exposes CRUD endpoints that enable clients to be able to manage media objects (e.g A song or an image).

### Project Introduction
- Support ES6/ES7 features
- Using Eslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Husky
- Commitizen
- MIT license and Code of conduct
- Docker
- Prettier

## Features
##### Authentication:
- jwt authentication
##### Session Storage:
- Redis is required
- MySQL is required
##### Integration testing
- mocha
- chai
- supertest

## Requirements

- node >= 12
- npm >= 6
- mongodb >= 4.0
- typescript >= 3.0

## Installation

First, clone the repository [Stereo-Api]() then install the package using yarn package manager

```bash
git clone [https://github.com/dagogodboss/stereo-test.git ](https://github.com/dagogodboss/stereo-pay.git)
cd dir stereo-pay
yarn 
```

App Skeleton

```
├── src
│├── modules
││├── app
│││   └── ...
││├── auth
│││   └── ...
││└── roles
││    └── ...
││├── media
│││   └── ...
││└── users
││    └── ...
│|
││└── ...
│├── filters
││└── ...
│├── guards
││└── ...
│├── main.ts
│└── pipes
│    └── ...
├── docker-compose.yml
├── index.js
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json

```

## Running the API
### Development

To start the application in development mode, run:

```bash
npm run start:dev
```

Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

example start with scale on 2 core:
```
pm2 start ./dist/main.js -i 2 --no-daemon
```

Express server listening on <http://localhost:8080/>, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Docker

* [Install Docker](https://docs.docker.com/get-docker/)
* [Install docker-compose](https://docs.docker.com/compose/install/)
 
#### To start the application container
``` 
  docker-compose up 
```
  
## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.


## Swagger
Swagger documentation will be available on route:
```bash
http://localhost:8080/api
```
![Alt Text1](https://media.giphy.com/media/XEUyeEL03IcaZYw6SB/giphy.gif)

### Jwt auth
![Alt Text2](https://media.giphy.com/media/QUKuolFMyd0WsNFIUH/giphy.gif)

## Diagnose and pinpoint performance issues

### Bubble
![Bubble](https://i.ibb.co/tY6MQKR/Screenshot-from-2020-10-01-17-08-03.png)

### Doctor
![Doctor](https://i.ibb.co/FmD5dSk/Screenshot-from-2020-10-01-17-11-41.png)
