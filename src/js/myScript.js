let type = prompt 
("Тип сайта: \n 0 - Визитка \n 1 - Лендинг \n 2 - Корпоративный сайт \n 3 - Интернет витрина \n 4 - Информационные сайты ", "0");
let design = prompt 
("Дизайн: \n 0 - Шаблонный \n 1 - Уникальный \n 2 - Wow-дизайн ", "0");
let adaptive = prompt 
("Вёрстка: \n 0 - Фиксированная \n 1 - Резиновая \n 2 - Адаптивная ", "0");

let price = [
[2000, 5000, 20000, 10000, 15000],
[5000, 10000, 15000],
[1, 2, 3],
];

let time = [
[3, 5, 14, 7, 9],
[2, 4, 7],
[1, 1.5, 2],
];

function calcPrice (type, design, adaptive) {
	finalPrice = (price[0][type] + price[1][design]) * price[2][adaptive];
	return "Стоимость: " + finalPrice + " руб.";
}

function calcTime (type, design, adaptive) {
	finalTime = (time[0][type] * time[2][adaptive] + time[1][design]);
	return "Сроки: " + finalTime + " дней.";;
}

function massange (type, design, adaptive) {
	return (calcPrice(type, design, adaptive) + "\n" + calcTime(type, design, adaptive));
}

alert (massange(type, design, adaptive));

