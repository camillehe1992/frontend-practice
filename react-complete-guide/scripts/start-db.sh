#!/bin/sh

mongodb-runner start
parse-server \
  --appId APPLICATION_ID \
  --masterKey MASTER_KEY \
  --databaseURI mongodb://localhost/test \
  --port 27017
