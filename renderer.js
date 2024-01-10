const {ipcRenderer} = require('electron');


window.api = {
    minimizeWindow: () => {
        ipcRenderer.send('minimize-window');
    },
    maximizeWindow: () => {
        ipcRenderer.send('maximize-window');
    },
    closeWindow: () => {
        ipcRenderer.send('close-window');
    }
};

ipcRenderer.on('minimized', () =>{

});

ipcRenderer.on('unmaximized', () =>{
    
});

ipcRenderer.on('closed', () =>{
    
});