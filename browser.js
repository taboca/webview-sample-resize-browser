    ipcRenderer.on('scale', (event, message) => {

	console.log('Scale:' +  message);
	document.body.setAttribute('style',';transform-origin:0 0; trasform:scale(.3););
	document.getElementById('webview1').setAttribute('style','background:red;transform-origin:0 0; height:'+page_height+'px');
	document.getElementById('webview2').setAttribute('style','background:red;transform-origin:0 0; height:'+page_height+'px');
	document.getElementById('webview3').setAttribute('style','background:red;transform-origin:0 0; height:'+page_height+'px');
    })
