/*календарь в фильтрах*/
$('#select-date').dateRangePicker({
	inline: true,
	container: '#calendar-container',
  });
/*календарь в формах */
$('.select-form-date').dateRangePicker({inline: true,  container: '#select-form-date-container', });
$('.select-form-date1').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container1', });
$('.select-form-date2').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container2', });
$('.select-form-date3').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container3', });
$('.select-form-date4').dateRangePicker({inline: true, container: '#select-form-date-container4', });
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
$('#select-form-time4').dateRangePicker({
	inline: true,
	container:'#select-form-time-container4',
	  separator : ' ~ ',
	  format: 'DD.MM.YYYY HH:mm',
	singleDate : true,
	  time: {
		  enabled: true
	  }
  });
  $('#select-form-time5').dateRangePicker({
	inline: true,
	container:'#select-form-time-container5',
	  separator : ' ~ ',
	  format: 'DD.MM.YYYY HH:mm',
	singleDate : true,
	  time: {
		  enabled: true
	  }
  });
