//слайды вопросов
qimage = new Array();
qimage[0] = new Image();
qimage[1] = new Image();
qimage[2] = new Image();
qimage[3] = new Image();
qimage[4] = new Image();
qimage[5] = new Image();
qimage[6] = new Image();
qimage[7] = new Image();
qimage[8] = new Image();
qimage[9] = new Image();

qimage[0].src = "images/questions/1.gif";
qimage[1].src = "images/questions/2.gif";
qimage[2].src = "images/questions/3.jpg";
qimage[3].src = "images/questions/4.jpg";
qimage[4].src = "images/questions/5.jpg";
qimage[5].src = "images/questions/6.png";
qimage[6].src = "images/questions/7.jpg";
qimage[7].src = "images/questions/8.jpg";
qimage[8].src = "images/questions/9.jpg";
qimage[9].src = "images/questions/10.jpg";

//слайды поздравлений
congr = new Array();
congr[0] = new Image();
congr[1] = new Image();
congr[2] = new Image();
congr[3] = new Image();
congr[4] = new Image();
congr[5] = new Image();
congr[6] = new Image();
congr[7] = new Image();
congr[8] = new Image();
congr[9] = new Image();
congr[10] = new Image();

congr[0] = "images/congratulations/1.gif ";
congr[1] = "images/congratulations/2.gif ";
congr[2] = "images/congratulations/3.gif ";
congr[3] = "images/congratulations/4.gif ";
congr[4] = "images/congratulations/5.gif ";
congr[5] = "images/congratulations/6.gif ";
congr[6] = "images/congratulations/7.gif ";
congr[7] = "images/congratulations/8.gif ";
congr[8] = "images/congratulations/9.gif ";
congr[9] = "images/congratulations/10.gif";
congr[10] = "images/congratulations/11.gif";



//Массив вопросов
        var question = new Array();
        question[0] = "Каким было первое аниме с 24 кадрами в секунду?";
        question[1] = "Какую игру любил Лилуш?";
        question[2] = "Единтвенное что могли пить гули кроме крови?";
        question[3] = "Что прятал отец Эрена в подвале?";
        question[4] = "Ч?";
        question[5] = "На чём играет Синдзи?";
        question[6] = "Вы думали это новый вопрос, но это - Я -___?";
        question[7] = "Кто был первым?";
        question[8] = "Цикады стрекочут, но _____";
        question[9] = "Какая была машина у Хироси Утиямады?";
		
		
//Массивы вариантов ответов
        //Вариант А

        var ans1 = new Array();
        ans1[0] = "Президентом Азербайджана";
        ans1[1] = "Сердце";
        ans1[2] = "Принцесса Мононоке";
        ans1[3] = "Панда большая и маленькая";
        ans1[4] = "Холода";
        ans1[5] = "На чужих нервах";
        ans1[6] = "Почтальон Печкин!";
        ans1[7] = "Данте";
        ans1[8] = "она не слышит";
        ans1[9] = "Toyota - Cresta";

        //Вариант B

        var ans2 = new Array();
        ans2[0] = "Хокаге";
        ans2[1] = "Душу";
        ans2[2] = "Порко Россо";
        ans2[3] = "Конан — мальчик из будущего";
        ans2[4] = "Высоты";
        ans2[5] = "На виолончели";
        ans2[6] = "Наруто!";
        ans2[7] = "Алукард";
        ans2[8] = "она не боится";
        ans2[9] = "Honda accord";


        //Вариант C

        var ans3 = new Array();
        ans3[0] = "Пиратом";
        ans3[1] = "В долг";
        ans3[2] = "Люпен III";
        ans3[3] = "Навсикая из Долины ветров";
        ans3[4] = "Транспорта";
        ans3[5] = "На гармошке";
        ans3[6] = "Граф Дракула!";
        ans3[7] = "Вэш Ураган";
        ans3[8] = "ей всё равно";
        ans3[9] = "Suzuki Kizashi";



        //Вариант D

        var ans4 = new Array();
        ans4[0] = "Самым красивым ниндзя на районе";
        ans4[1] = "Пожизненный запас дров";
        ans4[2] = "Сказания Земноморья";
        ans4[3] = "Небесный замок Лапута";
        ans4[4] = "Шума";
        ans4[5] = "На гитаре";
        ans4[6] = "Дио!";
        ans4[7] = "Были скидки в бутике";
        ans4[8] = "он - парень!";
        ans4[9] = "Hyundai Sonata";

        //Массив правильных ответов A-1 B-2 C-3 D-4
        var rans = new Array();
        rans[0] = 2;
        rans[1] = 1;
        rans[2] = 4;
        rans[3] = 2;
        rans[4] = 3;
        rans[5] = 2;
        rans[6] = 4;
        rans[7] = 3;
        rans[8] = 4;
        rans[9] = 1;
		
		
inum=0;	//счётчик слайдов и текста
plus=0;	//счётчик правильных ответов
n=0;	//номер кнопок


document.getElementById('area').style.display = 'none';
document.getElementById('end').style.display = 'none';
		
function check(n) {
	//Функция скроллинга
		document.getElementById('textarea').innerHTML = question[inum];
		document.getElementById('ans1').innerHTML = ans1[inum];
		document.getElementById('ans2').innerHTML = ans2[inum];
		document.getElementById('ans3').innerHTML = ans3[inum];
		document.getElementById('ans4').innerHTML = ans4[inum];
		document.getElementById('imagearea').src = qimage[inum].src;
		inum++
	//Старт
if (n==5){document.getElementById('st').style.display = 'none';
		document.getElementById('area').style.display = 'block';
		}
 if (n==rans[inum]) plus++;	//Счётчик правильных ответов и выдача результата
 if (inum == question.length-1) {
		$(document).ready(function() {
             document.getElementById('cong').src = congr[plus];
			 document.getElementById('end').style.display = 'block';
             document.getElementById('footer').style.display = 'block';
             document.getElementById('area').style.display = 'none';
             

            if (plus > 7) {
                document.getElementById('q').innerHTML =  plus + " правильных ответов. <br>" + " Поздравляю, Гуру!";
            }

            if (plus > 4 && plus < 8) {
                document.getElementById('q').innerHTML =  plus + " правильных ответов. <br>" + " А ты неплох...";
            }

            if (plus < 5 ) {
                document.getElementById('q').innerHTML =  plus + " правильных ответа. <br>" + " Новичок что-ли?";
            }
            if (plus == 1 && plus==2) {
                document.getElementById('q').innerHTML =  plus + " правильный ответ. <br>" + " Эх, ты...";

            }
            if (plus == 0) {
                document.getElementById('q').innerHTML =  plus + " правильных ответов <br>" + " Ну, ты нуб...";
            }  
            });
	 
 }
 }	
