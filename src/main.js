const {app , BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const userController = require('../controllers/userController')
const employeeController = require('../controllers/employeeController')
const { userInfo } = require('os')

require('electron-reload')(__dirname)

let window 
function createWindow(){
    window = new BrowserWindow({
        width:700,
        height:800,
        center:true,
        webPreferences:{
          preload: path.join(__dirname,'preload.js')
        }
    })
    window.loadFile('src/views/index.html')
}

app.whenReady().then(()=>{
  createWindow();
})

ipcMain.on('inflogin',(event,userInf)=>{
  if(userInf.employee){
    employeeController.verifyEmployeeInf(userInf,({err,error,auth})=>{
      if(err){
        console.log(err)
        window.loadFile('src/views/error.html')
      }
      if(error){
        console.log(error)
        window.loadFile('src/views/si.html')
      }
      if(auth){
        window.setPosition(0, 0)
        window.setSize(1200,800)

        window.loadFile('src/views/manage.html')
      }
    })
  }else{
    userController.verifyUserInf(userInf,({err,error,auth})=>{
      if(err){
        console.log(err)
        window.loadFile('src/views/error.html')
      }
      if(error){
        console.log(error)
        window.loadFile('src/views/si.html')
      }
      if(auth){
        window.setPosition(0, 0)
        window.setSize(1200,800)

        window.loadFile('src/views/manage.html')
      }
    })
  }
})


ipcMain.on('infreg',(event,userInfo)=>{
  userController.createUser(userInfo,({err,error,auth})=>{
    if(err){
      console.log(err)
      window.loadFile('src/views/error.html')
    }
    if(error){
      console.log(error)
      window.loadFile('src/views/si.html')
    }
    if(auth){
      window.setPosition(0,0)
      window.setSize(1200,800)
      window.loadFile('src/views/manage.html')
    }

  })
})



