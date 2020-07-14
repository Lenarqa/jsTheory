// console.log("last-data");

// setTimeout(()=>{
//     console.log('prepearing data');
//     const backEndData = {
//         server: 'wss',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(()=>{
//         backEndData.modified = true;
//         console.log('Data resived ', backEndData);
//     }, 2000);
// }, 2000);


// let  p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('prepearing data');
//         const backEndData = {
//             server: 'wss',
//             port: 2000,
//             status: 'working'
//         }

//         resolve(backEndData);
//     },2000);
// });

// p.then((data)=>{
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             data.modified = true;
//             resolve(data);
//             // reject(data);
//         })
//     }, 2000);

//     // p2.then((data)=>{
//     //     console.log('Data resived ', data);
//     // });
// })
// .then((data)=>{
//     data.promiseChange = true;
//     return data;
// }).then(data =>{
//     console.log("new data = ",data);
// }).catch((err)=>{console.log("Error ", err)})
// .finally(()=>{
//     console.log("Finally");
// })

const sleep = ms => new Promise(resolve => {
    setTimeout(() => {resolve()},ms);
});

// sleep(2000).then(()=>{console.log("2000s")});
// sleep(3000).then(()=>{console.log("3000s")});

Promise.all([sleep(2000), sleep(5000)]).then(()=>{
    console.log("end all sleeps");
});

Promise.race([sleep(2000), sleep(6000)]).then(()=>{
    console.log('Race');
})