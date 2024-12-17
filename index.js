import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded ({extended: true}));

app.get("/" , (req,res) => {
   res.render("home.ejs");
});
app.get("/about" , (req,res) => {
    
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  } // everting after port, is a callback function.
    );