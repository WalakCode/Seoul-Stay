const {app , BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const userController = require('../controllers/userController')
const employeeController = require('../controllers/employeeController')

let window 
function createWindow(){
    window = new BrowserWindow({
        width:700,
        height:800,
        webPreferences:{
          preload: path.join(__dirname,'preload.js')
        }
    })
    window.loadFile('src/views/index.html')
}

app.whenReady().then(()=>{
  createWindow();
})

ipcMain.on('variable-content',(event,userInf)=>{
  if(userInf.employee){
    employeeController.verifyEmployeeInf(userInf,({})=>{

    })
  }else{
    userController.verifyUserInf(userInf,({err,error,auth})=>{
      if(err){
        window.loadFile('src/views/error.html')
      }
      if(error){
        window.loadFile('src/views/si.html')
      }
      if(auth){
        window.loadFile('src/views/exito.html')
      }
    })
  }
})



