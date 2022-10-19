/*путевые листы */
/*разворачиваем подробнее */
$(".edit-entry").on('click',function(){
    $(this).toggleClass('edit-entry--open');
    $(this).parents('.content-table__wrapper').find('.content-table__more').toggleClass('content-table__more--open')
});
/*Отмечаем чекбоксы */
$(".checkbox-label").on('click',function(){
    if ($('.checkbox:checked').length) {
        $('#all-checkbox-label').addClass('checkbox-label--unselect');  
        $("#all-checkbox").attr("checked", "checked");
    }else {
        $('#all-checkbox-label').removeClass('checkbox-label--unselect');
        $("#all-checkbox").attr("checked", false);
    }
});
/*Снимаем чекбоксы */
$('#all-checkbox-label').on('click', function(){
    if ($("#all-checkbox").is(":checked")) {
        $(".checkbox").prop("checked", true);
        $(this).addClass('checkbox-label--unselect')
    } else {
        $(".checkbox").prop("checked",false);
        $(this).removeClass('checkbox-label--unselect')
        $("#all-checkbox").prop("checked",false);
    }
}) 
