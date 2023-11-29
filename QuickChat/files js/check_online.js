async function check_online() {
    Cells_manager.new_text = document.getElementById('name').value
    const url = "https://db-nmn5.onrender.com/online"
    let response = await fetch(`${url}`)
    let data = await response.json()
    localStorage.setItem("check-online", JSON.stringify(data));
    Cells_manager.online = JSON.parse(localStorage.getItem("check-online"));
    let td = document.getElementById(`online`)
    let users = [];
    for (let i = 0; i < Cells_manager.online.length; i++) {
        let td_son = document.createElement('div')
        if (Cells_manager.online[i].user !== "") {
            for (let i = 0; i < Cells_manager.online.length; i++) {
                if (!users.includes(Cells_manager.online[i].user)) {
                    users.push(Cells_manager.online[i].user);
                    td_son.innerHTML = `<b>${Cells_manager.online[i].user}</b>`
                    td.appendChild(td_son)
                }
            }
        }
    }
    delete_or_post()
}

function delete_or_post() {

    let time = time_now()
    let getSeconds = Cells_manager.time_date.getSeconds()
    if (getSeconds < 10) {
        time += `:0${Cells_manager.time_date.getSeconds()}`
    }
    else {
        time += `:${Cells_manager.time_date.getSeconds()}`

    }

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
                let id = Cells_manager.online[i].id
                let a = Cells_manager.online[i].time
                let offline = time

                const time1 = new Date(`2023-11-29T${a}`);
                const time2 = new Date(`2023-11-29T${offline}`);

                const difference = differenceInSeconds(time1, time2);

                if (difference > 30) {
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

