
function time_now() {
    Cells_manager.time_date = new Date();
    const a = Cells_manager.time_date.getHours();
    const b = Cells_manager.time_date.getMinutes();
    let minutes = 0
    let hours = 0
    hours = a < 10 ? `0${a}` : `${a}`;
    minutes = b < 10 ? `0${b}` : `${b}`;
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

function difference_in_seconds(time1, time2) {
    // מחלק את הזמן לשעות, דקות ו-שניות
    const hours1 = time1.getHours();
    const minutes1 = time1.getMinutes();
    const seconds1 = time1.getSeconds();
    const hours2 = time2.getHours();
    const minutes2 = time2.getMinutes();
    const seconds2 = time2.getSeconds();
    // מחשב את ההפרש בשעות
    const hoursDiff = hours2 - hours1;
    // מחשב את ההפרש בדקות
    const minutesDiff = minutes2 - minutes1;
    // מחשב את ההפרש בשניות
    const secondsDiff = seconds2 - seconds1;
    // מחזיר את ההפרש הכולל בשניות
    return hoursDiff * 3600 + minutesDiff * 60 + secondsDiff;
  }
  