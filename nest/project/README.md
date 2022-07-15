### jwt secret에 process.env.JWT_SECRET이 안될때

jwt secret에 string 값이 들어가지 않으면 값이 있어야한다고 뜨는것 같다.
.env에서 secret 값에 ""를 붙이거나 `${process.env.JWT_SECRET}` 라고 써주면 해결 가능

### 환경변수 적용

환경변수를 사용하려면 module 파일에 ConfigModule.forRoot()를 import 해줘야함
아니면 app.module.ts 에서 ConfigModule.forRoot({isGlobal : true})를 해주면 전역적으로 환경변수 사용 가능
