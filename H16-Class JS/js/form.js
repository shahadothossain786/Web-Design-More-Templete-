function check(){
    var name=document.getElementById('uname');
    var email=document.getElementById('email');
    var cemail=document.getElementById('con_mail');
    var fnum=document.getElementById('number');
    var cfnum=document.getElementById('con_number');
    var pass=document.getElementById('pass');
    var cpass=document.getElementById('con_pass');
    if(name.value==""){
        document.getElementById('ufields').innerHTML='Type Your Name Here';
        name.focus();
        return false;
    }
    else{
        document.getElementById('ufields').innerHTML='';
    }
    if(email.value==""){
        document.getElementById('email_fields').innerHTML='Enter Your Email Here';
        email.focus();
        return false;
    }
    else{
        document.getElementById('email_fields').innerHTML='';
    }
    if(cemail.value==""){
        document.getElementById('con_fields').innerHTML='Confirm Your Email';
        cemail.focus();
        return false;
    }
    else{
        document.getElementById('con_fields').innerHTML='';
    }
    if(email.value != cemail.value){
        document.getElementById('con_fields').innerHTML='Not Match Your Email';
        cemail.focus();
        return false;
        
    }
    if(fnum.value==""){
        document.getElementById('num_fields').innerHTML='Enter Your Number';
        fnum.focus();
        return false;
    }
    else{
        document.getElementById('num_fields').innerHTML='';
    }
    if(cfnum.value==""){
        document.getElementById('con_num_fields').innerHTML='Confirm Your Number';
        cfnum.focus();
        return false;
    }
    else{
        document.getElementById('con_num_fields').innerHTML='';
    }
    if(fnum.value != cfnum.value){
        document.getElementById('con_num_fields').innerHTML='Not Match Your Number';
        fnum.focus();
        return false;
    }
    if(pass.value==""){
        document.getElementById('pass_fields').innerHTML='Enter Your Password Here';
        pass.focus();
        return false;
    }
    else{
        document.getElementById('pass_fields').innerHTML='';
    }
    if(cpass.value==""){
        document.getElementById('pass_con_fields').innerHTML='Confirm Your Password';
        cpass.focus();
        return false;
    }
    else{
        document.getElementById('pass_con_fields').innerHTML='';
    }
    if(pass.value != cpass.value){
        document.getElementById('pass_con_fields').innerHTML='Not Match Your Password';
        pass.focus();
        return false;
    }
    
}





























