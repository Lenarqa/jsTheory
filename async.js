function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms)
    })
}

let url = 'https://jsonplaceholder.typicode.com/todos/1';

// function fetchTodos(){
//     console.log("fetchTodos start")

//     return delay().then(()=>{
//         return fetch(url);
//     }).then(response => response.json())
// }

// fetchTodos().then((data)=>{
//     console.log("data = ", data);
// }).catch((err)=>{
//     console.log("error = ", err)
// })

async function fetchAsyncTodo(){
    try{
        await delay(2000);
        const responce = await fetch(url);
        const data1 = await responce.json();
        console.log("data = ", data1);
    }catch{
        console.error(e);
    }finally{
        console.log('finnaly')
    }
}

fetchAsyncTodo();