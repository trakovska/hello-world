function proba(){

$('.veliki').css("background-image", "url(assets/img/nt1.jpg)");

}

$('#lijevo').click(

  function(){

var stanje = $('#stanje').val();
var novostanje = parseFloat(stanje) + 1;

  $('.veliki').css("background-image", "url(assets/img/" + novostanje + ".jpg)");


if(novostanje=="4"){var novostanje=0;}
$('#stanje').val(novostanje);


  return false;
}

);

$('#desno').click(

  function(){

var stanje = $('#stanje').val();
var novostanje = parseFloat(stanje) - 1;

  $('.veliki').css("background-image", "url(assets/img/" + novostanje + ".jpg)");


if(novostanje=="0"){var novostanje=4;}
$('#stanje').val(novostanje);


  return false;
}

);


$(document).ready(
function(){
setInterval(function(){

var stanje = $('#stanje').val();
$('.veliki').css("background-image", "url(assets/img/" + stanje + ".jpg)");

stanje++;
if(stanje=="5"){var stanje=1;}
$('#stanje').val(stanje);


}, 3000);
}
);
