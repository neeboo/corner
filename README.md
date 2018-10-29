# The Corner Server and client

## server side

* node v8.6.0
* express
* apollo graphql express

## client side

* dvajs v2.1.0
* react v16.0.2
* graphql-client

## usage

* git this repository
* install bash

  ```bash
  yarn install:all
  ```

* run Server

  ```bash
   yarn start
  ```

### important

if you want to run https, do as following:

1. use openSSL to generate "ceritficate.pem", "certrequest.csr" and "privatekey.pem"
   [check this article](https://www.jianshu.com/p/bb2bd32e8794)

2. please add a "resource/encrypt" folder in the server directory,put those files generated in this folder

   ```bash
      cd server
      mkdir resource
      cd resource
      mkdir encrypt
      ...
   ```

3. open your editor, check the "devOps/serverConfig.js", make sure those files are included correctly

   ```js
   ...
   const options = {
     key: fs.readFileSync(
       path.join(__dirname, '../resource/encrypt/privatekey.pem')
     ),
     cert: fs.readFileSync(
       path.join(__dirname, '../resource/encrypt/certificate.pem')
     )
   }
   ...
   ```

## hot loading development

run command as following

```bash
yarn watch:hot
```

the server will run at "hot-load" mode, you can edit the server files exported by 'app.js'

however, you can't see static page in the browser. but you can test the restful and graphql apis instantly.

if you wish to see the webpage using "hot-load" mode, open up a new command window, and go to client folder. run command as following

```bash
yarn start
```

it will build the client and open a new browser window, and you should see the webpage. which we call it 'client-dev' mode.

## Known issue

* using 'hot-load' mode will not load the static resource,include webpage.
* using 'hot-load' mode and run 'client-dev' mode, will not see restful api change instantly, but graphql api is running ok.

## Best practice

### Static Server and Client HMR (Hot Module Reloading) for client dev.

go to client folder, and "yarn start"
change some client files, you see the webpage result
the webpage will run at:
http://localhost:8080

go to server folder, and "yarn run:server"
it will serve apis normally at:
http://localhost:3000/restful
http://localhost:3000/graphql/endpoint

### api tools and server HMR for server dev

mentioned above

## TODO

* update parcel script after it updates
# corner-template
# corner-template
# corner
