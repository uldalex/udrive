$("input[name='worker']").on('input', function(){
  if($("#worker1").is(":checked")) {
   
  } else if($("#worker2").is(":checked")){
   $('.texcontrol__wrapper').removeClass('hidden')
  } else {
  
  }
});
$(".texcontrol__wrapper .link--blue").on('click', function(){
    $(".texcontrol").removeClass('hidden')
});

$('.select-date').dateRangePicker({  singleDate : true,});
$('.select-date1').dateRangePicker({  singleDate : true,});
$('.select-date2').dateRangePicker({  singleDate : true,});
$('.select-date3').dateRangePicker({  singleDate : true,});
$('.select-date4').dateRangePicker({  singleDate : true,});
$('.select-date5').dateRangePicker({  singleDate : true,});