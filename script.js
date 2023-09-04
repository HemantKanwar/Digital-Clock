// Assign the value of Clock according real time

function clock() {
    let a = document.getElementsByClassName("hour");
    let b = document.getElementById("grab");
    let c = document.getElementById("am");

    let d = new Date();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    let value = `${hours}:${minute}:${second}`;

    if(hours >= 6 && hours < 12) {
        b.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
    } else if (hours >= 12 && hours < 16) {
        b.innerText = "LET'S HAVE SOME LUNCH !!"
    } else if (hours >= 16 && hours < 19) {
        b.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    } else {
        b.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
    }
 
    // Assign the value AM or PM

    if(hours > 12) {
        c.innerText = "PM"
    } else {
        c.innerText = "AM";
    }

    if(hours > 12) {
        hours = hours-12
    }
    if(hours < 10) {
        hours = "0" + hours
    }
    if(minute < 10) {
        minute = "0" + minute
    }
    if(second < 10) {
        second = "0" + second
    }

    console.log(value)
    let hrs = `${hours}`
    a[0].innerHTML = hrs
    let mnt = `${minute}`
    a[1].innerHTML = minute
    let sec = `${second}`
    a[2].innerHTML = sec
}

setInterval(() => {
    clock()
},1000)



// Assign the value of button where image and text were change.

let button = document.getElementById("button")
// let image = document.getElementById("image");
let change = document.querySelectorAll("select") 
let text = document.getElementsByClassName("text")
let good = document.getElementById("good")
let grab = document.getElementById("grab")

button.addEventListener("click", function() {
   button.innerHTML = "Party Time!"
   let d = new Date();
   let hours = d.getHours();

   //Assign value and put some image

   console.log(change[0]);
   console.log(change[1].value);
   console.log(change[2].value);
   console.log(change[3].value);
   console.log(hours);

   let t = change[0].selectedIndex;
   let t1 = change[1].selectedIndex;
   let t2 = change[2].selectedIndex;
   let t3 = change[3].selectedIndex;

   let time = change[0].options[t];
   let time1 = change[1].options[t1];
   let time2 = change[2].options[t2];
   let time3 = change[3].options[t3];

   text[0].innerHTML =  time.textContent
   text[1].innerHTML =  time1.textContent
   text[2].innerHTML =  time2.textContent
   text[3].innerHTML =  time3.textContent


   if(parseInt(change[0].value) === hours) {
    good.innerHTML = "GOOD MORNING!! WAKE UP !!";
    // grab.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
    document.getElementById("image").src = "./Open window.jpg"
   }
   else if(parseInt(change[1].value) === hours) {
    good.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    // grab.innerHTML = "LET'S HAVE SOME LUNCH !!"
    document.getElementById("image").src = "./lunch time.jpg"
   }
   else if(parseInt(change[2].value) === hours) {
    good.innerHTML = "GOOD EVENING !!"
    // grab.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    document.getElementById("image").src = "./good-evening.jpg"
   }
   else if(parseInt(change[3].value) === hours) {
    good.innerHTML = "GOOD NIGHT !!"
    // grab.innerHTML  = "CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById("image").src = "./goodnight_image.jpg"
   }
});