import App from './config/config.js'  ;

const port = process.env.APP_PORT;

App.http.listen(port, () => console.log('API is running port', port));


