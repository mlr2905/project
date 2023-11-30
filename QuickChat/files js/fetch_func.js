intervalId = setInterval(Push_update, 500)

function Push_update(ok) {
    if (Cells_manager.chat_n !== " " || ok === "ok") {
        fetch(`https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("check", JSON.stringify(data));
                Cells_manager.Push = JSON.parse(localStorage.getItem("check"));
                if (Cells_manager.name !== '') {
                    if (Cells_manager.Push.length !== Cells_manager.size_array.length || ok === "ok") {
                        Cells_manager.Push = 0;
                        get();                    }
                }
            });
    }
}

function get() {

    // I use get execute function last_message

    Cells_manager.size_array = JSON.parse(localStorage.getItem(`chat${Cells_manager.chat_n}`))
    Cells_manager.message_list = document.getElementById('box-body')
    Cells_manager.message_list.innerHTML = ""
    const data_day = date_day_now()
    const div = document.getElementById('box-body')
    const son = document.createElement('div')
    son.innerHTML = `<div class="date_day">${data_day}</div>`
    div.appendChild(son)
    message_sorting()
}

function post_img() {
    Cells_manager.new_time = time_now()
    image.src = URL.createObjectURL(event.target.files[0]);
    const img =  image.src
    const url = `https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}`
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{
                    "user": "${Cells_manager.name}",
                    "img": "${img}",
                    "time": "${Cells_manager.new_time}"
                }`})
}

function post_data() {
    if (document.getElementById("text").value !== "") {
        Cells_manager.new_time = time_now()
        Cells_manager.new_text = document.getElementById('text').value
        Cells_manager.string_name = "text"
        Cells_manager.json_id += 1
        link_type()
        const input = document.getElementById('text')
        input.value = '';
        const url = `https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{
                    "user": "${Cells_manager.name}",
                    "${Cells_manager.string_name}": "${Cells_manager.new_text}",
                    "time": "${Cells_manager.new_time}",
                    "id": ${Cells_manager.json_id}
                }`})
    }
}



async  function put(number, value) {
    Cells_manager.new_text = value
    Cells_manager.string_name = "text"
    link_type()
    //   document.getElementById(`message-${number}`).value
    Cells_manager.new_time = time_now()
    const url = `https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}/${number}`
    let response = await fetch(`${url}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `{
                    "user": "${Cells_manager.name}",
                    "${Cells_manager.string_name}": "${Cells_manager.new_text}",
                    "time": "${Cells_manager.new_time}"
                }`})
        let data = await response.json()
        if(data){
            clearInterval(intervalId); 
            Push_update("ok")
            intervalId = setInterval(Push_update, 500)


        }
              

}

function delete_(number) {
    fetch(`https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}/${number}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            console.error(response)
            alert('failure')
        } else {
        }
    })
}
function id_message(i) {
    let url = `https://db-nmn5.onrender.com/chat${i}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem(`id${i}`, JSON.stringify(data));
        })
    let date = JSON.parse(localStorage.getItem(`id${i}`))
    let id_n = date
    const id = id_n.filter((item) => item.id === Math.max(...id_n.map((item) => item.id)));
    return id[0].id;
}

function post_new_login(time){

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
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: `{
                "id":${id}
                }`})
        })
}

function delete_out_user(time){
    for (let i = 0; i < Cells_manager.online.length; i++) {
        if (Cells_manager.online[i].time !== undefined) {
            let id = Cells_manager.online[i].id
            let a = Cells_manager.online[i].time
            const offline = time;
            const time1 = new Date(`2023-11-29T${a}`);
            const time2 = new Date(`2023-11-29T${offline}`);
            const difference = difference_in_seconds(time1, time2);

            if (difference > 60) {
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
    post_new_login(time)

}
