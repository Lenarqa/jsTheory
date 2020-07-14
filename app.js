// console.log(3**3);


// let name = prompt("Name", "Oleg");
// alert(name);

// let massage;

// let login = prompt('loginn', 'login');
// (login == "Сотрудник") ? massage = "Привет" : 
//     (login == "Директор") ? massage = "Здравствуйте" :
//     (login == '') ? massage = "Нет логина" : massage = '';


// alert(massage);

let websoket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

websoket.onopen = function(e){
    alert("[open] Соединение установлено");
    alert("Отправляем данные на сервер");
    websoket.send("Меня зовут Ленар");
}

websoket.onmessage = function(e){
    alert("Данные которые пришли = " + e.data);
}

websoket.onclose = function(e){
    if(e.wasClean){
        alert(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
    }else{
        alert('[close] Соединение прервано');
    }
}

websoket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };