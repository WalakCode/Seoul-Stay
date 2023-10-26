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
    const userInf = {
        employee:employee.value,
        user:user.value,
        pass:pass.value
    }
    window.electron.logininf(userInf)
})


showPass.addEventListener('change',()=>{
    if (showPass.checked) {
       pass.type = "text"
      } else {
        pass.type = "password"
      }
})




