"use strict"

let whoOnSite = prompt("Ты кто ?",[]);

if(whoOnSite == "Гриша" || whoOnSite == "Максим" || whoOnSite == "Саша"){
	alert("Привет мой создатель,как у вас дела ?");
}else(
	alert("Уберайся от меня!!!")
)

function sayHi() {
	let question = prompt('Создатель когда ты собираешься меня обновить?');
}

setTimeout(sayHi, 1000);

if(question == "да"){
	alert("А когда )))))?");
}
if(question == "нет"){
	alert("Ну почему ((?");
}
if(question == ""){
	alert("Ты чего молчишь ???");
}