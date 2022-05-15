export default {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,
  remoteServer: process.env.REMOTE_SERVER_HOST || 'http://cp-tools.cn',
  localDataSource: process.env.LOCAL_DATA_SOURCE || false
}