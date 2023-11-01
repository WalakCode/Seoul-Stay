const return_login_btn = document.getElementById('return-login-btn');
const register_and_login = document.getElementById('register_login')
const username = document.getElementById('username')
const male_radio = document.getElementById('male_radio')
const female_radio = document.getElementById('female_radio')
const full_name = document.getElementById('full_name')
const family_members = document.getElementById('family_members')
const birthday = document.getElementById('birthday')
const password = document.getElementById('password')
const retype_pasword = document.getElementById('retype_password')
const terms_conditions_checkbox = document.getElementById('terms_conditions_checkbox')
const terms_conditions = document.getElementById('terms_conditions')
const inputs = document.querySelectorAll('input');

function check(){
    if(username.value && (male_radio.checked || female_radio.checked) && full_name.value && family_members.value && birthday.value && password.value && retype_pasword.value && terms_conditions_checkbox.checked){
        register_and_login.removeAttribute('disabled')
    }else{
        register_and_login.disabled = true
    }
}


let interval
function repeat(){
interval = setInterval(check,1)
}
repeat()


let counter = 0

return_login_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    location.href = '../views/index.html'
})

register_and_login.addEventListener('click',(e)=>{
    e.preventDefault();
    if(terms_conditions_checkbox.checked){terms();}
})

terms_conditions.addEventListener('click',(e)=>{
    terms_conditions_checkbox.removeAttribute('disabled')
    counter = 1
})

function sotreInfo(){
    if(password.value == retype_pasword.value){
        const userInfo = {
            username:username.value,
            name:full_name.value,
            members:family_members.value,
            birthday:birthday.value,
            password:password.value,
        }

        if(female_radio.checked)
        userInfo.gender = 1
        if(male_radio.checked)
        userInfo.gender = 0
        
        return userInfo
    }
}

function terms(){
    if(counter == 1){
        upload();
    }
}

function upload(){
    const userinfo = sotreInfo();
     if(userinfo){
        if(userinfo.username && (male_radio.checked || female_radio.checked) && userinfo.name && userinfo.members && userinfo.birthday && userinfo.password){
            window.electron.regisinf(userinfo)
        }
    }
}



