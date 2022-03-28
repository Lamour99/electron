// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
let holder = document.querySelector('#holder')
const { log } = require('console');
let fs = require('fs')
let readList = document.querySelector('#readList')
holder.addEventListener('drop', (e)=>{
    e.preventDefault(); // 取消默认
    e.stopPropagation(); // 取消冒泡
    console.log(e);
    for(const file of e.dataTransfer.files){
        console.log(file);
        console.log('文件路径', file.path);
        fs.readFile(file.path,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                let newDiv = document.createElement('div')
                newDiv.className = "readFile"
                console.log(data);
                newDiv.innerHTML = `
                <h3>${file.name}</h3>
                <pre>${data}</pre>
                `
                readList.appendChild(newDiv)
            }
        })
    }
})
holder.addEventListener('dragover', (e) =>{
    e.preventDefault(); // 取消默认
    e.stopPropagation(); // 取消冒泡
})