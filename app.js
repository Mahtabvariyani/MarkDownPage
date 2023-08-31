let express = require("express");
let articleRouter = require("./routes/article");
let app = express();

app.set("view engine", "ejs");

app.use("/article", articleRouter);

app.get("/", (req, res) => {

let article =[{
    title:'Dont',
    createdAi: Date.now(),
    descipline:'Test description'
}]

  res.render("index", { text:'Hello' });
});

app.listen(5000);
