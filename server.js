import express from "express";

const app = express();

app.get("/usuarios", (request, response) => {
  response.send("Ok, deu boa!");
  console.log("server rodando...");
});

app.listen(process.env.PORT);
