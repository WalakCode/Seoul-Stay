// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Exponer solo las funciones y objetos seguros
contextBridge.exposeInMainWorld('electron', {
    sendVariableToMain:(userInf)=>{
    ipcRenderer.send('variable-content',userInf)
  }
});
