const express = require("express");
const app = express();

const multer = require("multer");

const path = require("path")



app.set('view engine', 'ejs'); 



const storage = multer.diskStorage({
    destination: (req, file, cb) =>  cb(null, "uploads/"),
    filename: (req,file, cb) =>  cb(null, file.originalname + Date.now() + path.extname(file.originalname)),
});


const upload = multer({storage});


app.get('/', (request, response) => response.render("index"))

app.post('/upload',upload.single("arquivo"), (req,res) =>  res.send("Arquivo recebido"));

app.listen(4000, () => console.log("Executando na porta 3000"));