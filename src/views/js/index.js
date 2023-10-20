const loginform = document.getElementById('login-form')
const showPass = document.getElementById('show_password')
const pass = document.getElementById('password')
const user = document.getElementById('user')
const employee = document.getElementById('employee')
const badge_pass = document.getElementById('badge_employee_pass')
const badge_user = document.getElementById('badge_employee_user')
const badge_user_user = document.getElementById('badge_user')
 



loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(employee.value,pass.value,user.value)
    const userInf = {
        employee:employee.value,
        user:user.value,
        pass:pass.value
    }
    window.electron.sendVariableToMain(userInf)
})


showPass.addEventListener('change',()=>{
    if (showPass.checked) {
       pass.type = "text"
      } else {
        pass.type = "password"
      }
})


employee.addEventListener("input",()=>{
    if(employee.value.trim() !== ""){
        badge_user_user.textContent = "Only Users"
        badge_pass.textContent = 'Only Employees'
        badge_user.textContent = 'Only Employees'
        badge_user_user.classList.add('badge','bg-info')
        badge_pass.classList.add('badge','bg-secondary')
        badge_user.classList.add('badge','bg-secondary')
        badge_user_user.style.opacity = 1
        badge_pass.style.opacity = 1;
        badge_user.style.opacity = 1;
        badge_user_user.style.visibility = 'visible';
        badge_pass.style.visibility = 'visible';
        badge_user.style.visibility = 'visible';
    }else
    {
        badge_pass.style.opacity = 0;
        badge_user.style.opacity = 0;
        badge_user_user.style.opacity = 0;
        setTimeout(()=>{
            badge_pass.style.visibility = 'hidden';
            badge_user.style.visibility = 'hidden';
            badge_user_user.style.visibility = 'hidden';
            badge_pass.classList = [];
            badge_user.classList = [];
            badge_user_user.classList = [];
            badge_user.textContent = "ㅤ";
            badge_pass.textContent = "ㅤ";
            badge_user_user.textContent = "ㅤ";
        },500)
        
    }
})

user.addEventListener("input",()=>{
    if(user.value.trim() !== ""){
            badge_user_user.textContent = "Only Users"
            badge_user_user.classList.add('badge','bg-info')
            badge_user_user.style.opacity = 1
            badge_user_user.style.visibility = 'visible';

            badge_user.textContent = 'Only Employees'
            badge_user.classList.add('badge','bg-secondary')
            badge_user.style.opacity = 1;
            badge_user_user.style.visibility = 'visible';
            
            badge_pass.textContent = 'Only Users'
            badge_pass.classList.add('badge','bg-info')
            badge_pass.style.opacity = 1;
            badge_pass.style.visibility = 'visible';
      
    }else{
        badge_pass.style.opacity = 0;
        badge_user_user.style.opacity = 0;
        badge_user.opacity = 0;
        setTimeout(()=>{
            badge_pass.style.visibility = 'hidden';
            badge_user_user.style.visibility = 'hidden';
            badge_user.style.visibility = 'hidden';
            badge_user.classList = [];
            badge_pass.classList = [];
            badge_user_user.classList = [];
            badge_user.textContent = "ㅤ";
            badge_user_user.textContent = "ㅤ";
            badge_pass.textContent = "ㅤ";
        },500)
    }
})



