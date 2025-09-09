const express = require("express");
const router = require("./routes");
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use("/", router);

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})