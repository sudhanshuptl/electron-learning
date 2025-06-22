console.log("Main Process working")

const electron = require("electron")
const path = require("path")
const url = require("url")

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let win;

 function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true


    }));

    win.on('closed', ()=>{
        win = null;
    })
 } 

 app.on('ready', createWindow);

 // for linux
 app.on('window-all-closed',()=>{
    if (process.platform !=='darwin'){
        app.quit()
    }
 })


 // for mac
 app.on('activate', ()=>{
    //when someone click from doc and app is not already running
    if (win===null){
        createWindow()
    }
 })

