{
  "name": "nieun",
  "version": "1.0.0",
  "description": "AI 양재 7조",
  "main": "app.js",
  "scripts": {
    "client": "npm run start --prefix client",
    "server": "node app.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
    "start": "node app.js",
    "heroku-prebuild": "npm install -f",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JJIMINSHIN/Nieun.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/JJIMINSHIN/Nieun/issues"
  },
  "homepage": "https://github.com/JJIMINSHIN/Nieun#readme",
  "engines": {
    "node": "16.13.1",
    "npm": "8.1.2"
  }
}