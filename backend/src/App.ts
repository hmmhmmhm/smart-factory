import * as express from "express"

class App {

    public static getInstance(): App {
        return new App()
    }
    public express: express.Application

    constructor() {
        this.express = express()

        /**
         * @description
         * 여기에서 기본 Express 요소를 초기화합니다.
         */
        this.express.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send("Hello world")
        })
    }
}

export default App
