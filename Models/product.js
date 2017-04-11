var mongoose = require("../mongoose.js");


var SchemeProduct = new mongoose.Schema({
	name :{type:String,require:true},
	model :{type:String,require:true,unique:true},
	category:{type:String,require:true},
	count:{type:Number,require:true},
	price:{type:Number,require:true},
	path:{type:String,require:true}
});

var Product = mongoose.model("Product",SchemeProduct);
module.exports=Product;