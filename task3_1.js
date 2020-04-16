"use strict";

function createPromiseRandom(min, max, delay) {
   return new Promise(function (resolve, reject) {
      // Ваш код
	 setTimeout(function(){ 
	  if(min < max){
		 resolve(Math.floor(Math.random()*100)); 
	  }else{
		 reject("Ошибка!");
	  }
	 },delay); 
   });
}
/*let p1 = createPromiseRandom(1, 100, 2000);// раб
p1.then(function(result){
	console.log(result);
},
function(error){
	console.log(error);
});*/
let p2 = createPromiseRandom(1000, 100, 3000);// работ
p2.then(function(result){
	console.log(result);
},
function(error){
	console.log(error);
});

/*Через две секунды, на экране должно появится случайной число от 1 до 100.
Через три секунды, на экране должна появится информация об ошибке.
*/

