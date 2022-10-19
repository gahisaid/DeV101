var myapp=angular.module("myapp",[]);

myapp.controller("homeCtrl",function($scope){
$scope.panier=[];

$scope.categories=["Sumsung","Iphone","Nokia","Sony","BlackBerry","LG","Motorola"];
$scope.produits=[
{ref:"1010",nom:"Sumsung S3",img:"s3.jpg",prix:"1600",cat:"Sumsung"},
{ref:"1011",nom:"SmartPhone S4",img:"s4.jpg",prix:"2300",cat:"Sumsung"},
{ref:"1112",nom:"Iphone",img:"i1.jpg",prix:"2000",cat:"Iphone"},
{ref:"1213",nom:"Galaxy J2",img:"j2.jpg",prix:"950",cat:"Sumsung"},
{ref:"1314",nom:"Ipad i5",img:"s31.jpg",prix:"1500",cat:"Iphone"},
{ref:"1415",nom:"Sumsung S2",img:"j2.jpg",prix:"1000",cat:"Sumsung"}


];
$scope.add=function(p){
var q=1;
var pos=recherche(p.ref);
if (pos==-1) {
var l=new Lignepanier(p.ref,p.nom,p.img,p.prix,q);

$scope.panier.push(l);

}
else
{
	$scope.panier[pos].qtc=$scope.panier[pos].qtc+1;
}
}

function recherche(ref){

	for(var i=0;i<$scope.panier.length;i++)
		{
			if ($scope.panier[i].ref==ref) {
				return i;
			}
			
		}
		return -1;
}
function Lignepanier(ref,nom,img,prix,qtc){
	this.ref=ref;
	this.nom=nom;
	this.img=img;
	this.prix=prix;
	this.qtc=qtc;
}

});
