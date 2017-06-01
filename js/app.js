/*
 * Archivo principal de funcionalidad de JS
 */

 var imgclick=document.getElementsByClassName('imagen')[0];
 console.log (imgclick);
 imgclick.addEventListener("click", function(){
 	alert("Hizo click");
 	console.log("Paso por aqui");
 });
