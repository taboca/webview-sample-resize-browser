const {app, BrowserWindow} = require('electron');
let win;

app.on('ready', () => {

  win = new BrowserWindow({
      height: 640,
      width: 360
  });

  win.loadURL('file://' + __dirname + '/browser.html');

});



