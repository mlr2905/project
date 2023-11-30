async function check_online() {
    Cells_manager.new_text = document.getElementById('name').value
    const url = "https://db-nmn5.onrender.com/online"
    let response = await fetch(`${url}`)
    let data = await response.json()
    localStorage.setItem("check-online", JSON.stringify(data));
    Cells_manager.online = JSON.parse(localStorage.getItem("check-online"));
    let td = document.getElementById(`online`)
    const td_son = document.createElement('div');
    td.innerHTML = ""
    td_son.innerHTML = " "
    let users = [];
    for (let i = 0; i < Cells_manager.online.length; i++) {
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
    
