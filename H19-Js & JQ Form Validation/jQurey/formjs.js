$(document).ready(function() {
    $('#js_user_rtn').click(function() {
        $(this).addClass('.ui_li_email, .ui_li_pass, .ui_btn').removeClass('.ui_li_name, .ui_li_con_email, .ui_li_ret_pass').fadeOut().css('display','block');
        $('#js_btn').html('Log In');
    });
});



















//$('.select__label').click(function() {
//  $('.select__label').removeClass('select__label');
//  $(this).addClass('select__label');
//});
//$('#js-user-new').click(function() {
//  $('#main_container, .#container, #header, .menu_list, .ui_btn, .ui_li_name, .ui_li_email .ui_li_con_email, .ui_li_pass, .ui_li_ret_pass').removeClass('#js_user_rtn, #js_user_rst').addClass('#js_user_new');
//  $('#js-btn').html("Sign Up");
//});
//$('#js-usr-rtn').click(function() {
//  $('#main_container, .#container, #header, .menu_list, .ui_btn, .ui_li_email .ui_li_con_email, .ui_li_pass, .ui_li_ret_pass').removeClass('#js_user_new, #js_user_rst').addClass('#js_user_rtn');
//  $('#js-btn').html("Sign In");
//});
//$('#js-user-rst').click(function() {
//  $('#main_container, .#container, #header, .menu_list, .ui_btn, .ui_li_name, .ui_li_email').removeClass('#js_user_rtn, #js_user_new').addClass('#js_user_rst');
//  $('#js-btn').html("Reset Password");
//});