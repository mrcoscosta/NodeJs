const express = require("express");
const index = express();

index.get("/", (Request, Response) => {
    Response.send("Hello World!")
}); // Response.json({message: Hello word)}

index.listen(3000, () => console.log("rodando no servidor 3000"));