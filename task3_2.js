"use strict";

new Promise(function (resolve, reject) {
   //setTimeout(function(){
   let number = +prompt("Введите число", "");
   if(typeof number == "number" && !isNaN(number)){
	   resolve(number);
   }
   else{
	   reject ("Не число!");
   }
   // Запрашиваем у пользователя число number при помощи prompt()
   // Если пользователь ввел не число - вызвать reject()
   // Если пользователь ввел число - вызвать resolve(number)
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
      while(true){//
		  let number = +prompt("Введите число", "");
		  if(typeof number == "number" && !isNaN(number)){
		   resolve(number);
		   break;//
		  }
		  /*else{
			   reject ("Не число!");
		   }*/
	  }
	  // Запрашиваем у пользователя число number, пока он его не введет
      // После ввода числа - вызвать resolve(number)
   });
}).then(function (result) {
   console.log(result);
   // Вывод number на экран
});
