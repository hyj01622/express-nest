# Express

## middleware

> next function middleware

```
// app.use를 사용하는 방법
app.use((req, res, next) => {
  console.log('this is middleware')
  next()
})

// router를 사용하는 방법
app.get('/', (req, res, next) => {
  console.log('this is middleware')
  next()
})
```

> json parser

- express 4.16 이전 버전인 경우
  body-parser 모듈을 이용

```
const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', function(req, res){
  console.log(req.body);      // 사용자의 JSON 요청
    res.send(req.body);    // JSON 응답
});

app.listen(3000);
```

- express 4.16 이후 버전인 경우
  express에서 제공하는 express.json()을 이용

```
const express = require("express");
const app = express();

app.use(express.json());

app.post('/', function(req, res){
  console.log(req.body);      // 사용자의 JSON 요청
    res.send(req.body);    // JSON 응답
});

app.listen(3000);
```
