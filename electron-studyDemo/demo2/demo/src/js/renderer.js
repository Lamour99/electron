
// let holder = document.querySelector('#holder')
// let fs = require('fs')
// let readList = document.querySelector('#readList')
// holder.addEventListener('drop', (e)=>{
//     e.preventDefault(); // 取消默认
//     e.stopPropagation(); // 取消冒泡
//     console.log(e);
//     for(const file of e.dataTransfer.files){
//         console.log(file);
//         console.log('文件路径', file.path);
//         fs.readFile(file,path,(err,data)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 let newDiv = document.createElement('div')
//                 newDiv.className = "readFile"
//                 newDiv.innerHTML = `
//                 <h3>${file.name}</h3>
//                 <pre>${data}</pre>
//                 `
//                 readList.appendChild(newDiv)
//             }
//         })
//     }
// })
// holder.addEventListener('dragover', (e) =>{
//     e.preventDefault(); // 取消默认
//     e.stopPropagation(); // 取消冒泡
// })