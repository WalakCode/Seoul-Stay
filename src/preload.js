// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Exponer solo las funciones y objetos seguros
contextBridge.exposeInMainWorld('electron', {
    logininf:(userInf)=>{
    ipcRenderer.send('inflogin',userInf)
  },
  regisinf:(userinfo)=>{
    ipcRenderer.send('infreg',userinfo)
  }

});
