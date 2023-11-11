

function text_message(i,id) {
    Cells_manager.son.innerHTML = `
    <br/>
    
    <div>
        <div>
            <img id="${Cells_manager.type_id}" src="${Cells_manager.img}" />
            <div id="${Cells_manager.margin_bottom}"><b>${Cells_manager.size_array[i].user}</b></div>
        </div>
        <div class="${Cells_manager.type_class}">
            <span class="user" id="message-${id}">
                <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
            </span>
            <span>${Cells_manager.size_array[i].text}</span>
            <div><sub>${Cells_manager.size_array[i].time}</sub></div>
        </div>
  </div>
  <br/><br/><br/>
        `
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}

function image_Message(i,id) {
    Cells_manager.son.innerHTML = ` <br />
        <div>
            <div>
                <img id="${Cells_manager.type_id}" src="${Cells_manager.img}" />
                <div id="${Cells_manager.margin_bottom}"><b>${Cells_manager.size_array[i].user}</b></div>
            </div>
            <div class="${Cells_manager.type_class}">
                <div class="${Cells_manager.type_class}" id="message-${id}">
                <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
             
                <img src="${Cells_manager.size_array[i].img}" width="200px" height="200px" />
            </div>
                <div><sub>${Cells_manager.size_array[i].time}</sub></div>
        </div>`
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}


function link_message(i,id) {
    Cells_manager.son.innerHTML = `<br/>
    <div><img id="${Cells_manager.type_id}" src="${Cells_manager.img}"/>
    
        <b>${Cells_manager.size_array[i].user}</b>
        </div>
        <div class="${Cells_manager.type_class}">
            <div class="${Cells_manager.type_class}" id="message-${id}">
                <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
            <a href="${Cells_manager.size_array[i].link}">${Cells_manager.size_array[i].link}</a>
            </br>
            <sub>${Cells_manager.size_array[i].time}</sub></div>
        </div>
    </div>
    </div>`
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}
function youtube_message(i,id) {
    Cells_manager.son.innerHTML = `
    <br />
    <div>
        <div>
            <img id="${Cells_manager.type_id}" src="${Cells_manager.img}"/>
            <div><b>${Cells_manager.size_array[i].user}</b></div>
        </div>
        <div class="${Cells_manager.type_class}">
            <iframe width="300" height="200"
                src="https://www.youtube.com/embed/Vaxpu-8m4kw?${Cells_manager.size_array[i].tube}"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <spam class="${Cells_manager.type_class}" id="message-${id}">
                <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
            </spam>
            <div><sub>${Cells_manager.size_array[i].time}</sub></div>
        </div>
    </div>`
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}
function facebook_message(i,id) {
    Cells_manager.son.innerHTML = `
    <br/>
    <div>
        <div>
            <img id="${Cells_manager.type_id}" src="${Cells_manager.img}" />
                <div ><b>${Cells_manager.size_array[i].user}</b></div>
            </div>
            <div class="${Cells_manager.type_class}">                          
                <iframe width="300" height="200" 
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSirtonimInt%2Fvideos%2F${Cells_manager.size_array[i].face}%2F&show_text=false&width=560&t=0"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            <spam class="${Cells_manager.type_class}" id="message-${id}">
                    <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
                </spam> 
            <div><sub>${Cells_manager.size_array[i].time}</sub></div>
        </div>
    </div>`
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}
function tiktok_message(i,id) {
    const url = Cells_manager.size_array[i].tiktok
    const parts = url.split("/");
    const videoId = parts[parts.length - 1];
    const id_link = videoId.split("?");
    const firstPart = id_link[0];
    Cells_manager.son.innerHTML = `
    <br/>
    <div>
        <div>
            <img id="${Cells_manager.type_id}" src="${Cells_manager.img}" />
                <div ><b>${Cells_manager.size_array[i].user}</b></div>
            </div>
    </div>         
    <div class="${Cells_manager.type_class}">                          
        <blockquote class="tiktok-embed" cite="${Cells_manager.size_array[i].tiktok}" 
            data-video-id="${firstPart}" style="width="300px" height="200px";" > 
            <section> </section>
        </blockquote> 
            <spam class="${Cells_manager.type_class}" id="message-${id}">
                <iconify-icon icon="uim:ellipsis-v"></iconify-icon>
            </span> 
        <div><sub>${Cells_manager.size_array[i].time}</sub></div>
    </div>`
    Cells_manager.message_list.appendChild(Cells_manager.son)
    addCellClick(`message-${id}`, id)
}