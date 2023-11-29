const Cells_manager = new Default_cells(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",)

Cells_manager.One_time = 0

function Hide_div() {
    const div2 = document.getElementById("page-content");
    div2.style.display = "block"
 
}

function Hide_di3() {
    const div2 = document.getElementById("page-content");
    div2.style.display = "none"

    const div5 = document.getElementById("chats");
    div5.style.display = div5.style.display === "none" ? "block" : "none";
    Cells_manager.size_array = []
    Cells_manager.message_list = document.getElementById('box-body')
    Cells_manager.message_list.innerHTML = ""
    

}

function Hide_div2() {
    const div4 = document.getElementById("from");
    div4.style.display = div4.style.display === "block" ? "none" : "none";
    const div5 = document.getElementById("chats");
    div5.style.display = div5.style.display === "none" ? "block" : "none";
    intervalId = setInterval(last_message, 500)

    if (Cells_manager.One_time === 0) {
        check_online()
        setInterval(check_online, 15000)
        emoji_keyboard()
        Cells_manager.One_time++
    }
}

function edit_or_delete(number) {
    const element = document.getElementById(`message-${number}`);
    const classes = element.className;
    if (classes === "user") {
        Swal.fire({
            title: 'Edit or delete the message?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'edit',
            denyButtonText: `delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                text_editing(number)
            } else if (result.isDenied) {
                Swal.fire('The message has been deleted', '', 'info')
                delete_(number)
            }
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are trying to edit a message that is not yours!',
        })
    }
}

function text_editing(number) {
    (async () => {
        const { value: text } = await Swal.fire({
            input: 'text',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },showCancelButton: true})
        if (text) {
            [Swal.fire(text)]
            put(number, text)

        }})()

}

function activation(n) {
    if (Cells_manager.name !== '') {
        document.querySelector("#text").addEventListener("keydown", handleEnter);
        Hide_div2()
        Hide_div()
        Hide_div()
        Cells_manager.chat_n = n
        Cells_manager.json_id = id_message(n)
        Cells_manager.size_array = []
    }
    else {
        Swal.fire('Must enter a name', '', 'success')
    }
}

function add_img() {
    frame.src = URL.createObjectURL(event.target.files[0]);
    Cells_manager.img_user = frame.src
}


function id_message(i) {
    let url = `https://db-nmn5.onrender.com/chat${i}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem(`id${i}`, JSON.stringify(data));})
    let date = JSON.parse(localStorage.getItem(`id${i}`))
    let id_n = date
    const id = id_n.filter((item) => item.id === Math.max(...id_n.map((item) => item.id)));
    return id[0].id;
}

function handleEnter(enter) {
    if (enter.keyCode === 13) {
        if (document.getElementById("text").value !== "") {
            enter.preventDefault()
            post_data()
        }
    }
}
