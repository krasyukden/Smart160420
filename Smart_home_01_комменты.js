"use strict";

class Home{
	constructor(address){
		this._address = address;
		this._devices = [];
	}
	get adress(){
		return this._address;
	}
	set adress(value){
		if(typeof value == "string" && value.length <= 20){
				this._address = value;
		}	
	}	
	addDevice(dev){// работает
		//if(typeof value == "object"){// добавить проверку на объект ??
			this._devices.push(dev); // (new AirConditioning("airKitchen"));
		//}
	}
	getDeviceByName(name) { // *
        for(let i = 0; i < this._devices.length; i++){// раб
		  if(name == this._devices[i].name){
			  return this._devices[i];// без режима моделей AirConditioning!!!
		  }
	    }  
		
		/*this._devices.forEach((value, i, arr) => {if(name == this._devices[i].name){
				return this._devices[i]}});//undefined ???*/
				//console.log(this._devices[i])}}); так РАБОТАЕТ!!!
				//return 1}});//undefined*/
	  
        /*this._devices.find((value, i, arr) => {if(name == this._devices[i].name){
				return this._devices[i]}});//undefined ???*/
	}
	get devices(){
		return this._devices;
	}
	deleteDeviceByName(name) { // *
		this._devices.splice(this._devices.indexOf(name), 1);// работ
		//this._devices.filter((value, i) => name != this._devices[i].name)// не работ !!!
		//this._devices.filter((value) => name == this._devices.indexOf(name).name)// не работ !!!
		
		/*this._devices.filter((value, i) => {if(name != this._devices[i].name){
				return this._devices}})//Unexpected token '!='*/
		
	}
	onAllDevices(){// стиралка не вкл без контроля воды !!!
		this._devices.forEach((dev) => dev.on());//  раб
		 /*for(let i = 0; i < this._devices.length; i++){// раб - 2-й вар
			this._devices[i].on();
			
	    }*/  
	}
	offAllDevices(){// 
		this._devices.forEach((dev) => dev.off());//  раб
		 /*for(let i = 0; i < this._devices.length; i++){// раб - 2-й вар
			this._devices[i].on();
			
	    }*/  
	}
}	
	
	
	
class Device { 
	constructor(name, modes){
		this._name = name;
		this._status = false;
		this._modes = modes;
		this._currentMode = 0;
	}
	get name(){ 
		return this._name;
	}
	get status(){ 
		return this._status
	}
	on(){ 
		this._status = true;
	} 
	off(){ 
		this._status = false;
	}
	getMode() {
		return this._modes[this._currentMode]; 
	}
	getModes(){
		return this._modes;
	}	
	setMode(value) { 
      this._currentMode = this._modes.indexOf(value);
	}
	addMode(value) {
		if(typeof value == "string" && value.length <= 12){
			this._modes.push(value);
		}
	}
	nextMode() {
		if(this._currentMode < this._modes.length - 1){
			this._currentMode++;
		}
	}
	previousMode() {
		if(this._currentMode > 0){
			this._currentMode--;
		}
	}
}	

class AirConditioning extends Device {
	constructor(name, modes){
		super(name, modes);
		this._temperature = 20;
	}
	increaseTemperature(){
		if(this._temperature < 35){
			this._temperature++;
		}
	}
	decreaseTemperature(){
		if(this._temperature > 15){
			this._temperature--;
		}
	}
	set temperature(value) {
		if(typeof value == "number" && value <= 35 && value >= 15){
         this._temperature = value;
		}
   }
   get temperature(){
		return this._temperature;
	}
}

class WashingMachine extends Device {
	constructor(name, modes){
		super(name, modes);
		this._waterLevel = 0; // 0 - 10
	}
    get waterLevel() {
	    return this._waterLevel;
	}
    set waterLevel(value) {
		if(typeof value == "number" && !isNaN(value) && value >= 0 && value <= 10){
			this._waterLevel = value;
		}	
	}
    on() {  // полиморфизм, для включения нужно проверить что уровня воды достаточно для режима
		switch(this._modes[this._currentMode]) {// если добавить режим - как контролировать объем воды - объект
			case "wash":
				if(this._waterLevel >= 5 && this._waterLevel <= 8){
					this._status = true;;
				};
				break;
			case "intensive_wash":
				if(this._waterLevel >= 6 && this._waterLevel <= 10){
					this._status = true;
				};
				break;
			case "rinse":
				if(this._waterLevel >= 8 && this._waterLevel <= 10){
					this._status = true;
				};
				break;
		}
	}
}	
//let myHome = new Home("Bedroom", [new AirConditioning("airBedroom"), new WashingMachine("washingMachine")]);
let myHome = new Home("Bedroom");
let myDevice = new Device;
let airBedroom = new AirConditioning("airBedroom", ["tropics", "pole", "dry", "fan"]);
let washingMachine = new WashingMachine("washingMachine", ["wash", "intensive_wash", "rinse"]);
//console.log(myHome._devices);//раб с _
myHome._address = "Kitchen";
console.log(myHome._address);
myHome.addDevice(new AirConditioning("airBedroom"), ["tropics", "pole", "dry", "fan"]);
myHome.addDevice(new WashingMachine("washingMachine", ["wash", "intensive_wash", "rinse"]));
console.log(myHome.getDeviceByName("airBedroom"));
myHome.getDeviceByName("washingMachine").waterLevel = 8;// без уров воды не вкл. == washingMachine.waterLevel = 8;
console.log(myHome.devices);
//myHome.deleteDeviceByName("washingMachine");
console.log(myHome.devices);
washingMachine.waterLevel = 8;
console.log(washingMachine.waterLevel);
myHome.onAllDevices();// раб
//myHome.getDeviceByName("airBedroom").on();//status - true
console.log(myHome.devices);
//myHome.offAllDevices();// раб
console.log(myHome.devices);