intervalId = setInterval(Push_update, 500)

function Push_update() {
    if (Cells_manager.chat_n !== " ") {
        fetch(`https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("check", JSON.stringify(data));
                Cells_manager.Push = JSON.parse(localStorage.getItem("check"));
                if (Cells_manager.name !== '') {
                    if (Cells_manager.Push.length !== Cells_manager.size_array.length) {
                        Cells_manager.Push = 0;
                        get();
                    }
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

function post_data() {
    if (document.getElementById("text").value !== ""){
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

function put(number, value) {
    Cells_manager.new_text = value
    Cells_manager.string_name = "text"
    link_type()
    //   document.getElementById(`message-${number}`).value
    Cells_manager.new_time = time_now()
    const url = `https://db-nmn5.onrender.com/chat${Cells_manager.chat_n}/${number}`
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `{
                    "user": "${Cells_manager.name}",
                    "${Cells_manager.string_name}": "${Cells_manager.new_text}",
                    "time": "${Cells_manager.new_time}"
                }`
    }).then(response => {
        if (!response.ok) {
            console.error(response)
            alert('failure') 
        }
    })
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