$('.select-form-date').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container', });
$('.select-form-date1').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container1', });
$('.select-form-date2').dateRangePicker({inline: true, singleDate : true, container: '#select-form-date-container2', });
$('.select-form-date3').dateRangePicker({inline: true,  container: '#select-form-date-container3', });

$('#texservise-link').on('click', function () {
    $('#texservise').removeClass('hidden');
    $('#medservise').addClass('hidden');
    $('#arendaservise').addClass('hidden');
});
$('#medservise-link').on('click', function () {
    $('#medservise').removeClass('hidden');
    $('#texservise').addClass('hidden');
    $('#arendaservise').addClass('hidden');
});
$('#arenda-link').on('click', function () {
    $('#arendaservise').removeClass('hidden');
    $('#texservise').addClass('hidden');
    $('#medservise').addClass('hidden');
});
$('.ul-link').on('click', function () {
    $('.ul-block').removeClass('hidden');
    $('.fl-block').addClass('hidden');
});
$('#fl-link').on('click', function () {
    $('.ul-block').addClass('hidden');
    $('.fl-block').removeClass('hidden');
})
