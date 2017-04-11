var mongoose = require("mongoose");
mongoose.connect("mongodb://Vovakhmil:14891489v@ds139480.mlab.com:39480/newdb");
console.log("mongoose connect");
module.exports = mongoose;