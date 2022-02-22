

setInterval(
    ()=>{
        let time = new Date();
        console.log(time.getHours()%12);
        console.log(time.getMinutes());
        console.log(time.getSeconds());
        console.log("------");
        document.getElementById("hour").style.transform = `translate(-50%, -50%) rotate(${(time.getHours()%12)/12*360}deg)`;
        document.getElementById("minutes").style.transform = `translate(-50%, -50%) rotate(${time.getMinutes()/60*360}deg)`;
        document.getElementById("second").style.transform = `translate(-50%, -50%) rotate(${time.getSeconds()/60*360}deg)`;
    },
    1
)