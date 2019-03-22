import * as express from "express"
import "source-map-support/register"
import App from "./App"
import Logger from "./Logger"

// 서버 포트를 지정합니다.
const port: number = Number(process.env.PORT) || 3000

// Express 인스턴스 생성
const app: express.Application = App.getInstance().express

Logger.debug(`Smart Farm BackEnd 서버 프로그램이 실행 되었습니다.`)

// Express 인스턴스 서버 포트개방
app.listen(port, () => Logger.debug(`서버 인스턴스가 ${port} 포트로 데이터 수신을 시작했습니다.`))
    .on("error", (err) => Logger.error(String(err)))
