nextd = 0;
discr = new Array;
discr[0] = "Наруто-таки стал Хокагэ";
discr[1] = "Хаул отдал сердце чтобы стать могущественым магом.";
discr[2] = "«Сказания Земноморья» — первая работа Горо Миядзаки, сына Хаяо Миядзаки, в качестве режиссёра.";
discr[3] = "Конан — мальчик из будущего — аниме-сериал режиссёра Хаяо Миядзаки. Снят студией «Nippon Animation» в 1978.";
discr[4] = "Нацу не переносит транспорта";
discr[5] = "Тойота Креста - злосчастная машина завуча Утиямады сенсея, которую 6 раз разбивали из-за Онидзуки";
discr[6] = "Это выражение является фишкой Дио из аниме 'JoJo'";
discr[7] = "Devil May Cry - 2001г.</br> Hellsing - 1998г.</br>Trigun - 1993г.";
discr[9] = "Креста";

dimages = new Array;
dimages[0] = new Image();
dimages[1] = new Image();
dimages[2] = new Image();
dimages[3] = new Image();
dimages[4] = new Image();
dimages[5] = new Image();
dimages[6] = new Image();
dimages[7] = new Image();
dimages[9] = new Image();


dimages[0] = "images/discr/1.gif";
dimages[1] = "images/discr/2.gif";
dimages[2] = "images/discr/3.gif";
dimages[3] = "images/discr/4.gif";
dimages[4] = "images/discr/5.gif";
dimages[5] = "images/discr/6.gif";
dimages[6] = "images/discr/7.gif";
dimages[7] = "images/discr/8.gif";
dimages[9] = "images/discr/9.gif";

	document.getElementById("dtext").innerHTML = discr[nextd];
    document.getElementById("img2").src = dimages[nextd];
    document.getElementById("youtube").style.display='none';
	document.getElementById("youtube1").style.display='none';
	document.getElementById("youtube2").style.display='none';
	
  $(document).on('click', '#button1', function() {
    jQuery("iframe").each(function() {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  });

	
function nextdescr() {

if (nextd==7){
	
	document.getElementById("discrarea").style.display='none';
	document.getElementById("youtube1").style.display='block';
	document.getElementById("youtube").style.display='block';
}
else if (nextd==8){
	
	document.getElementById("youtube1").style.display='none';
	document.getElementById("youtube2").style.display='block';
}
else if (nextd==discr.length-1){
	document.getElementById("button1").style.display='none';
	document.getElementById("youtube2").style.display='none';
	document.getElementById("youtube").style.display='none';
	document.getElementById("Contacts").style.display='block';
	document.getElementById("footer").style.display='block';
	
	
	
}
	nextd++;
    document.getElementById("dtext").innerHTML = discr[nextd];
    document.getElementById("img2").src = dimages[nextd];
    
		}