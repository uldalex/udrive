$('.select-form-date').dateRangePicker({ });
$('.date-destroy').on('click',function (evt) {
    evt.stopPropagation();
    $('.select-form-date').data('dateRangePicker').clear();
    $('.select-form-date').data('dateRangePicker').close();
  });
