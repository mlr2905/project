
function time_now() {
    Cells_manager.time_date = new Date();
    const hours = Cells_manager.time_date.getHours();
    const minutes = Cells_manager.time_date.getMinutes();
    let time = `${hours}:${minutes}`
    return time
}

function date_day_now() {
    Cells_manager.time_date = new Date();
    const day = Cells_manager.time_date.getDate()
    const Month = Cells_manager.time_date.getMonth() + 1
    const Year = Cells_manager.time_date.getFullYear()
    let Date_dey = `${day}/${Month}/${Year}`
    return Date_dey
}

