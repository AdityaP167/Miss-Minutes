setInterval(()=>{
    d = new Date()
    hours = d.getHours()
    mins = d.getMinutes()
    secs = d.getSeconds()
    hRotate = 30*hours + mins/2
    mRotate = 6*mins
    sRotate = secs*6

    hour_hand.style.transform = `rotate(${hRotate}deg)`
    minute_hand.style.transform = `rotate(${mRotate}deg)`
    second_hand.style.transform = `rotate(${sRotate}deg)`

},1000)

// d = new Date()
// hours = d.getHours()
// mins = d.getMinutes()
// secs = d.getSeconds()
// console.log(hours)
// console.log(mins)
// console.log(secs)