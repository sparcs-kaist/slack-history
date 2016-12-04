# 개발 일지

## react hot module 붙이기.
 http://localhost:3000/__webpack_hmr net::ERR_INCOMPLETE_CHUNKED_ENCODING 는 nodemon이슈였다. [webpack-hot-middleware 이슈](https://github.com/glenjamin/webpack-hot-middleware/issues/21)

 이전 hybrid rendering starter 에서는 proxy를 활용하여 nodemon과 hot loader를 연결했지만, ([이 사이트](https://velopert.com/1492)도 마찬가지. proxy사용법은 약간 다르다.) 최근 업데이트된 [react-hot-boiilerplate](https://github.com/gaearon/react-hot-boilerplate)를 보면 webpack-dev-middleware와 webpack-hot-middleware를 사용하여 연결하였다. 이쪽이 더 깔끔해 보였다.

 

