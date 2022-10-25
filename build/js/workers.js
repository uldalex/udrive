/*при клике на среднюю радиокнопку раскрываем список с диалогом диплома*/
$("input[name='worker']").on('input', function(){
  if($("#worker1").is(":checked")) {
   
  } else if($("#worker2").is(":checked")){
   $('.texcontrol__wrapper').removeClass('hidden')
  } else {
  
  }
});
/*при клике на среднюю радиокнопку раскрываем список с диалогом диплома водителя*/
$("#driver1").on('input', function(){
  if($(this).is(":checked")) {
    $('.drivercontrol__wrapper').removeClass('hidden')  
  }
})
/*при клике ссылку раскрываем блок добавления диплома*/
$(".texcontrol__wrapper .link--blue").on('click', function(){
    $(".texcontrol").removeClass('hidden')
});
/*при клике ссылку раскрываем блок добавления диплома водителя*/
$(".drivercontrol__wrapper .link--blue").on('click', function(){
  $(".drivercontrol").removeClass('hidden')
});

$('.select-date').dateRangePicker({  singleDate : true,});
$('.select-date1').dateRangePicker({  singleDate : true,});
$('.select-date2').dateRangePicker({  singleDate : true,});
$('.select-date3').dateRangePicker({  singleDate : true,});
$('.select-date4').dateRangePicker({  singleDate : true,});
$('.select-date5').dateRangePicker({  singleDate : true,});