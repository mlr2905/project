async function check_online() {
    Cells_manager.new_text = document.getElementById('name').value
    const url = "https://db-nmn5.onrender.com/online"
    let response = await fetch(url)
    let data = await response.json()
    localStorage.setItem("check-online", JSON.stringify(data));
    Cells_manager.online = JSON.parse(localStorage.getItem("check-online"));
    let td = document.getElementById(`online`)
    const td_son = document.createElement('div');
    td.innerHTML = ""
    td_son.innerHTML = " "
    let users = [];
    for (let i = 0; i < Cells_manager.online.length; i++) {
        if(Cells_manager.online[i].user === Cells_manager.new_text){
            Cells_manager.connected = "ok"
            
        }
        if (Cells_manager.online[i].user !== "") {
            for (const user of Cells_manager.online) {
                if (!users.includes(user.user)) {
                    users.push(user.user);
                    td_son.innerHTML += `<br/><b>${user.user}</b>`;
                    td.appendChild(td_son);
                }
            }
        }
    }
    delete_or_post()
}

function delete_or_post() {
    let time = time_now()
    time += `:${Cells_manager.time_date.getSeconds() < 10 ? `0${Cells_manager.time_date.getSeconds()}` : Cells_manager.time_date.getSeconds()}`;

            delete_out_user(time)
        }
        
function delete_out_user(time) {
    for (let i = 0; i < Cells_manager.online.length; i++) {
        if (Cells_manager.online[i].time !== undefined) {
            let id = Cells_manager.online[i].id
            let a = Cells_manager.online[i].time
            const offline = time;
            const time1 = new Date(`2023-11-29T${a}`);
            const time2 = new Date(`2023-11-29T${offline}`);
            const difference = difference_in_seconds(time1, time2);

            if (difference > 60) {
                if(Cells_manager.online[i].user === Cells_manager.new_text ){
                    Cells_manager.connected = "not"
                }
                fetch(`https://db-nmn5.onrender.com/online/${id}`, {
                    method: 'DELETE'
                }).then(response => {
                    if (!response.ok) {
                        // Handle error
                    }
                });
            
            }
        }
    }
    if(Cells_manager.connected !== "ok"){
    post_new_login(time)
    }
}

function post_new_login(time) {

    const url1 = "https://db-nmn5.onrender.com/online"
    const url2 = "https://db-nmn5.onrender.com/auto_id"
    fetch(url2)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("id", JSON.stringify(data));
            Cells_manager.id_online = JSON.parse(localStorage.getItem("id"));
            let id = Cells_manager.id_online.reduce((max, cell) => max > cell.id ? max : cell.id, -1);

            fetch(url1, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{
                "user": "${Cells_manager.new_text}",
                "time": "${time}",
                "id": "${id}"
                }`})
            id++

            fetch(url2, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{
                "id":${id}
                }`})
        })
}

    
