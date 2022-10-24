$('#ooo').on('click', function(){
    $('.of_ul').removeClass('hidden');
    $('.of_ip').addClass('hidden');
    $('.medusl, texusl').prop('checked', false);
    $(".med-form-hidden, tex-form-hidden").addClass('hidden');
});
$('#ip').on('click', function(){
    $('.of_ul').addClass('hidden');
    $('.of_ip').removeClass('hidden');
    $('.medusl, texusl').prop('checked', false);
    $(".med-form-hidden, tex-form-hidden").addClass('hidden');
});
$('.select-reset-of').on('click', function(){
    $('.of_ul').addClass('hidden');
    $('.of_ip').addClass('hidden');
    $('.medusl, texusl').prop('checked', false);
    $(".med-form-hidden, tex-form-hidden").addClass('hidden');
});
$('.select-form-date').dateRangePicker({
    singleDate : true,
 });
 $('.medusl').on('input', function(){
    if($(this).is(":checked")) {
   $(".med-form-hidden").removeClass('hidden');
    }else{
        $(".med-form-hidden").addClass('hidden');
    }});
    $('.texusl').on('input', function(){
        if($(this).is(":checked")) {
       $(".tex-form-hidden").removeClass('hidden');
        }else{
       $(".tex-form-hidden").addClass('hidden');
     }});
