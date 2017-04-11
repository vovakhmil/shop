var express = require('express');
var app = express();
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
	

var Product = require("./Models/product.js");

app.post('/addProduct',function(req,res){
	var product = new Product({
		name:req.body.name,
		model:req.body.model,
		category:req.body.category,
		count:req.body.count,
		price:req.body.price,
		path:req.body.path
	});
	product.save(function(err,data){
		// console.log(data);
		res.send(data);
	})
});
app.get("/getProducts",function(req,res){
	Product.find(function(err,data){
		res.send(data)
	})
})
app.listen(8080);
console.log('Server is running');