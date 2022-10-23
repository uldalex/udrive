/*календарь в фильтрах*/
$('#select-date').dateRangePicker({
	inline: true,
	container: '#calendar-container',
  });
/*календарь в формах */
$('.select-form-date').dateRangePicker({ });
$('#select-diplom').dateRangePicker({singleDate : true,  });
/*календарь в формах со временем */
$('#select-form-time').dateRangePicker({
  inline: true,
  container:'#select-form-time-container',
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('#select-form-time1').dateRangePicker({
  inline: true,
  container:'#select-form-time-container1',
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('#select-form-time2').dateRangePicker({
  inline: true,
  container:'#select-form-time-container2',
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('#select-form-time3').dateRangePicker({
  inline: true,
  container:'#select-form-time-container3',
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('.date-destroy').on('click',function (evt) {
  evt.stopPropagation();
  $('#select-date').data('dateRangePicker').clear();
  $('#select-date').data('dateRangePicker').close();
  $('.select-form-date').data('dateRangePicker').clear();
  $('.select-form-date').data('dateRangePicker').close();
});