// Плавный скрол
$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});

// Переключение актиных пунктов навигации
$(document).ready(function(){

	$(window).scroll(() => {

		let scrollDistance = $(window).scrollTop();

		$("section").each((i, el) => {

			if($(el).offset().top - $("nav").outerHeight() - 120 <= scrollDistance) {
				$("nav a").each((i, el) => {
					if ($(el).hasClass("active")){
						$(el).removeClass("active");
					}
				});
				$('nav li:eq('+ i +')').find('a').addClass("active");
			}
		});

	});

});

// Переключение актиных пунктов навигации для свёрнутого меню
$(document).ready(function(){

	$(window).scroll(() => {

		let scrollDistance = $(window).scrollTop();

		$("section").each((i, el) => {

			if($(el).offset().top - $("nav").outerHeight() - 80 <= scrollDistance) {
				$(".menu2 a").each((i, el) => {
					if ($(el).hasClass("active")){
						$(el).removeClass("active");
					}
				});
				$('.menu2 li:eq('+ i +')').find('a').addClass("active");
			}
		});

	});

});

// Отложенная анимация
let options = {threshold: [0.7]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.el_anime');
elements.each((i, el) => {
	observer.observe(el);
});
function onEntry (entry) {
	entry.forEach (chenge => {
		if (chenge.isIntersecting) {
			chenge.target.classList.add('show_anime');
		}
	});
}

// Анимация статистики
const statAnimations = (entries, observer2) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      counter ();
      observer2.disconnect();
    } 
  });
}

const options2 = {threshold: [0.5]};
const observer2 = new IntersectionObserver(statAnimations, options2);

const stat = document.querySelectorAll('.count_main');
stat.forEach((count_main) => {
  observer2.observe(count_main);
});

function counter () {
	$(".count").each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'linear',
			step: function (val) {
				$(this).text(Math.ceil(val));
			}
		});
	});
}

// Расчёт стоимости
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

$(".price select").click(function(){
	let type = $("#a").val();
	let design = $("#b").val();
	let adaptive = $("#c").val();
	if ((type !== null) && (design !== null) && (adaptive !== null)) {
		function calcPrice (type, design, adaptive) {
			finalPrice = (price[0][type] + price[1][design]) * price[2][adaptive];
			return finalPrice + " руб.";
		}

		function calcTime (type, design, adaptive) {
			finalTime = (time[0][type] * time[2][adaptive] + time[1][design]);
			return finalTime + " дней.";;
		}

		$("#calcPrice").text(calcPrice (type, design, adaptive));
		$("#calcTime").text(calcTime (type, design, adaptive));
	}
});

// Слайдер отзывов
$(document).ready(function(){
	$('.slider').slick({
		dots: true
	});
});

//Прогрузка картинок
let observer1 = new IntersectionObserver((entries, observer1) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.1 });

    document.querySelectorAll('.load_img').forEach(img => observer1.observe(img));

// Модальное окно для слайдов
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

// Модальное окно для кнопки "Оставить заявку"
$(document).ready(function() {
  $('.popup-link').magnificPopup();
  $('#popup').submit(function(){
	alert("Заявка отправлена!");
});
});

