/*календарь в фильтрах*/
$('#select-date').dateRangePicker({
	inline: true,
	container: '#calendar-container',
  });
  /*календарь в формах */
$('.select-form-date').dateRangePicker({inline: true,  container: '#select-form-date-container', });

function generateCode(){
  //config
  var upper = 1;//Заглавные буквы
  var lower = 1;//Маленькие буквы
  var digit = 1;//Цифры
  var numbers = 8;//Число символов

  // массивы символов
  upp = new Array('','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  low = new Array('','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  dig = new Array('','0','1','2','3','4','5','6','7','8','9');

  var code = '';
  var res, s;
  var k = 0;
  var numbers;
  var pass = new Array();
  var w = rnd(30,80,100);
  for (var r = 0; r < w; r++) {
      if (upper) { res = rnd(1,26,100); pass[k] = upp[res]; k++; }
      if (lower) { res = rnd(1,26,100); pass[k] = low[res]; k++; }
      if (digit) { res = rnd(1,10,100); pass[k] = dig[res]; k++; }
  }
  for (var i = 0; i < numbers; i++) {
      s = rnd(1,k-1,100);
      code+= pass[s];
  }

  document.addform.code.value = code;

}

function rnd(x,y,z) {
  var num;
  do {
      num = parseInt(Math.random()*z);
      if (num >= x && num <= y) break;
  } while (true);
  return(num);
}