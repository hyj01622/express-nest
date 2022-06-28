# Express

## middleware

next function middleware

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
