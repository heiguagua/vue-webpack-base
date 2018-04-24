# Eagle
<!-- 
![](sources/assets/favicon.ico) -->

## Installation and deployment
1. git clone https://github.com/heiguagua/vue-webpack-base.git
2. cd vue-webpack-base
3. npm i
4. gulp
5. Open browser http://localhost:5005/dev/index.html

## Thirdparty Library
* [Vue 2.5.x](https://vuejs.org/)
* [Webpack 2.8.x](https://webpack.js.org/)
* [NodeJS 6.11.x](https://nodejs.org/)
* [Element-UI 2.0.x](element.eleme.io/)

## Transfer Protocol

> head
* status: (Integer)，Server-side status
  1. 200：Http response success.
  2. 201：Warning infomation.
  3. 202：Login timeout.
  4. 400: Bad request.
  5. 404: No page found.
  6. 405: Request method is not support.
  7. 415: Unsupported media type.
  8. 500：Server-side exceptions.
* token: (String)，Encryption key。
* message: (String)，Server-side infomation for current http request.
* total: (Integer)，Sum of business logic result (if the results as the object then total equals 1, as an array equals length of the array).

> body
* (Object/Array)，Realistic & available datas.

```javascript
  {
    head: {
      status: 200,
      token: "ghco9xdnaco31gmafukxchph",
      message: "Login Success!",
      total: 1
    },
    body: {
      username: "admin",
      password: "admin"
    }
  }
```

## Project Release

1. Update /sources/partials/common/http.js

> Update base url for global ajax connection

2. gulp clean

> remove all of thing within the build & release folder

3. gulp build

> compile source code

4. gulp release --tar/zip

> compress build folder to the release
