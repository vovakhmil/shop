var module = angular.module("mainApp",[]);
module.controller("mainCtrl",function($scope,$http){
$scope.currentView="product.html";
$scope.headingView="Товари магазину"


// $scope.products=[{
// 	name:"LG",
// 	model:"Nexus5",
// 	category:"Mobile",
// 	count:5,
// 	price:5000,
// 	path:"photo1.jpg"
// },
// {
// 	name:"Meizu",
// 	model:"Pro5",
// 	category:"Mobile",
// 	count:12,
// 	price:10000,
// 	path:"photo2.jpg"
// },
// {
// 	name:"Iphone",
// 	model:"6s",
// 	category:"Mobile",
// 	count:3,
// 	price:16000,
// 	path:"photo3.jpg"
// },
// {
// 	name:"Xiomy",
// 	model:"4",
// 	category:"Mobile",
// 	count:8,
// 	price:15000,
// 	path:"photo4.jpg"
// },
// {
// 	name:"Sony",
// 	model:"Experia",
// 	category:"Mobile",
// 	count:4,
// 	price:2000,
// 	path:"photo5.jpg"
// }];

$scope.cart=[];

$scope.showCard=function(){
	$scope.currentView="card.html";
	$scope.headingView="Корзина"
};
$scope.showProduct=function(){
	$scope.currentView="product.html";
	$scope.headingView="Товари магазину"
};
$scope.addProductCard=function(item){
var pos = $scope.cart.indexOf(item);
if(pos==-1){
	item.newcount=1;
	item.newprice=item.price;
	$scope.cart.push(item);
	return
}
alert("This product is already in basket")
};
$scope.deleteProduct=function(item){
	var pos = $scope.cart.indexOf(item);
	$scope.cart.splice(pos,1);
}
$scope.plusCount=function(item){
	if(item.newcount+1>item.count){
		alert("Sorry, but you cant buy more")
		return
	}
	item.newcount++
	item.newprice+=item.price
}
$scope.minusCount=function(item){
if(item.newcount-1==0)
{
	$scope.deleteProduct(item)
return
	}
	item.newcount--;
	item.newprice-=item.price;
};
$scope.totalSum=function(){
	var total = 0;
	for (var i=0; i<$scope.cart.length;i++){
		total+=$scope.cart[i].newprice
	}
	return total
}
$scope.showAddProduct=function(){
$scope.currentView="addProduct.html";
$scope.headingView="Додавання товару";
};
$scope.addProduct=function(item){
$http.post('/addProduct',item).then(function(data){
	$scope.currentView="product.html";
	$scope.headingView="Товари магазину";
	if(data.data=="") return
	$scope.products.push(data.data);
})
}
$scope.getProducts=function(){
$http.get('/getProducts').then(function(data){
	console.log(data.data);
	$scope.products=data.data;
})
}
$scope.getProducts()
});