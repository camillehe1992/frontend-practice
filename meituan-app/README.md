# meituan-app

> My cat&#39;s pajamas Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Setup connection with local mongodb
1. open hyper
2. run <kbd>mongodb/bin/mongod.exe --dbpath mongodb-data/db</kbd>
3. open Robo 3T

## Setup connection with redis
1. open powershell
2. cd redis
3. redis-server.exe
4. keep this cmd window open and open another powershell window
5. cd redis
6. run <kbd>redis-cli.exe -h 127.0.0.1 -p 6379</kbd>


https://github.com/tporadowski/redis/releases/tag/v5.0.9
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
