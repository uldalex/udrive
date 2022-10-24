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
//стилизация input file
let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });