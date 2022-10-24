$('.select-form-date').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date1').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date2').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date3').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date4').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date5').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date6').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date7').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date8').dateRangePicker({
    singleDate : true,
 });
 $('.select-form-date9').dateRangePicker({
    singleDate : true,
 });
$('.date-destroy').on('click',function (evt) {
      evt.stopPropagation();
      $('.select-form-date').data('dateRangePicker').clear();
      $('.select-form-date').data('dateRangePicker').close();
    });
