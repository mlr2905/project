async function check_online() {
    Cells_manager.new_text = document.getElementById('name').value
    const url = "https://db-nmn5.onrender.com/online"
    let response = await fetch(`${url}`)
    let data = await response.json()
    localStorage.setItem("check-online", JSON.stringify(data));
    Cells_manager.online = JSON.parse(localStorage.getItem("check-online"));
    let td = document.getElementById(`online`)
    td.innerHTML = ""
    let users = [];
    for (let i = 0; i < Cells_manager.online.length; i++) {
        let td_son = document.createElement('span')
        if (Cells_manager.online[i].user !== "") {
            for (let i = 0; i < Cells_manager.online.length; i++) {
                if (!users.includes(Cells_manager.online[i].user)) {
                    users.push([Cells_manager.online[i].user, Cells_manager.online[i].time]);
                    td_son.innerHTML = `<b>${Cells_manager.online[i].user}:</b><sub>${Cells_manager.online[i].time}</sub>`
                    td.appendChild(td_son)
                }
            }
        }
    }
    delete_or_post()
}

function delete_or_post() {
    let id_delete = []
    let time = time_now()
    time += `:${Cells_manager.time_date.getSeconds()}`
    let jsonArray = Cells_manager.online
    let name = jsonArray.findIndex((item) => item.user === Cells_manager.new_text);
    if (name === -1) {
        const url = "https://db-nmn5.onrender.com/online"
        fetch("https://db-nmn5.onrender.com/auto_id")
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("id", JSON.stringify(data));
                Cells_manager.id_online = JSON.parse(localStorage.getItem("id"));
                let id = Cells_manager.id_online.reduce((max, cell) => max > cell.id ? max : cell.id, -1);
                fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: `{
                        "user": "${Cells_manager.new_text}",
                        "time": "${time}",
                        "id": "${id}"
                        }`})
                id++

                fetch(`https://db-nmn5.onrender.com/auto_id`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: `{
                        "id":${id}
                        }`})
            })
    }
    else {
        for (let i = 0; i < Cells_manager.online.length; i++) {
            if (Cells_manager.online[i].time !== undefined) {
                let a = Cells_manager.online[i].time.split(":")[2];
                let offline = time.split(":")[2]
                offline = offline + a
                let id = Cells_manager.online[i].id
                if (offline > 15) {
                    if (!id_delete.includes(id)) {
                        id_delete.push(id);
                        fetch(`https://db-nmn5.onrender.com/online/${id}`, {
                            method: 'DELETE'
                        }).then(response => {
                            if (!response.ok) {
                            }
                        })
                    }
                }
            }
        }
    }
}
