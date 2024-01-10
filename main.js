const{app, BrowserWindow, nativeImage, ipcMain} = require ('electron')
const path = require('path');

let win;

function creatWindow (){

  const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

  if(app.dock) {
    app.dock.setIcon(icon);
  }
  

   win = new BrowserWindow({
    icon,
    width:1000,
    height: 800,
    titleBarStyle:'hidden',
     webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
        },
  });

  win.loadFile('index.html')

    win.on('closed',()=>{
        win=null;
    });
  
}
app.whenReady().then(()=>{
  creatWindow();

  app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length ===0){
            createWindow();
        }
    });
 
});   

    app.on('window-all-closed', ()=>{
    if(process.plataform !=='darwin'){
        app.quit();
    }

});

ipcMain.on('minimize-window', () => {
    if(win) {
        win.minimize();
    }
});

ipcMain.on('maximize-window', ()=>{
    if(win){
        if(win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
        
    }
});

ipcMain.on('close-window', () => {
    if(win) {
        win.close();
    }
});




