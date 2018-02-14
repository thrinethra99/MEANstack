var express=require("express");
var app = express();
var cors=require("cors");
var bodyParser = require('body-parser');
app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');

var Product=mongoose.model('Product', {name: String});

app.get("/", function(req,res) {
    Product.find(function(err,products){
        res.send(products);
    })
})

app.post("/add",function (req,res)
{
    var name=req.body.name;
    var product= new Product ({name: name});
    product.save(function(err) {
     res.send(product);
    })
})
app.listen(3000);
