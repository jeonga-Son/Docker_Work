const express = require("express");

const PORT = 8082;

const app = express(); // 하나의 애플리케이션이라고 생각하면 된다.

app.get("/", (req, res) => {
    res.send("어휴 하기싫어");
}); // 루트로 들어오면 이와같은 요청을 처리해라

app.listen(PORT); // 이 포트로 실행해라

console.log("Server in running...");