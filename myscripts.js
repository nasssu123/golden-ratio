var initialMinute = 3; 
var initialSecond = 0;
var speed = 50;
var s1, s2, s3, s4; 

let minutePassed1, secondPassed1;
let minutePassed2, secondPassed2;
let minutePassed3, secondPassed3;
let minutePassed4, secondPassed4;

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("occ1").style.display="block";
    document.getElementById("ps1").style.backgroundColor="yellow"; 
    let minute = initialMinute;
    let second = initialSecond;

    let minuteP=0; 
    let secondP=0;
    let minuteOT=0;
    let secondOT=0;


    clearInterval(s1);
    document.getElementById("counter1").innerHTML = (minute < 10 ? "0" + minute : minute) + ":00";

    s1 = setInterval(() => {
        secondP++;
            if(secondP > 59){
                minuteP++;
                secondP=0;
            }

        if (second==0 && minute>0){
               second = 60;
               minute--;
            }

            second--;

         if (second==0 && minute == 0){
            clearInterval(s1);
            s1 = setInterval(() => {

                secondP++;
                if(secondP > 59){
                    minuteP++;
                    secondP=0;
                }
                secondOT++;
                if(secondOT > 59){
                    minuteOT++;
                    secondOT=0; 
                }

                document.getElementById("counter1").innerHTML =
            (minuteOT < 10 ? "0" + minuteOT : minuteOT)+ ":" + (secondOT < 10 ? "0" + secondOT : secondOT);
                document.getElementById("ps1").style.backgroundColor="red";
                document.getElementById("counter1").style.color = "white";
                document.getElementById("occ1").style.color = "white";
                minutePassed1 = minuteP;
                secondPassed1 = secondP;
            }, speed);
            }

            document.getElementById("counter1").innerHTML =
            (minute < 10 ? "0" + minute : minute)+ ":" + (second < 10 ? "0" + second : second);

            minutePassed1 = minuteP;
            secondPassed1 = secondP;
    }, speed);
});



document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("occ2").style.display="block";
    document.getElementById("ps2").style.backgroundColor="yellow"; 
    let minute = initialMinute;
    let second = initialSecond;

    let minuteP=0; 
    let secondP=0;
    let minuteOT=0;
    let secondOT=0;


    clearInterval(s2);
    document.getElementById("counter2").innerHTML = (minute < 10 ? "0" + minute : minute) + ":00";

    s2 = setInterval(() => {
        secondP++;
            if(secondP > 59){
                minuteP++;
                secondP=0;
            }

        if (second==0 && minute>0){
               second = 60;
               minute--;
            }

            second--;

         if (second==0 && minute == 0){
            clearInterval(s2);
            s2 = setInterval(() => {

                secondP++;
                if(secondP > 59){
                    minuteP++;
                    secondP=0;
                }
                secondOT++;
                if(secondOT > 59){
                    minuteOT++;
                    secondOT=0; 
                }

                document.getElementById("counter2").innerHTML =
            (minuteOT < 10 ? "0" + minuteOT : minuteOT)+ ":" + (secondOT < 10 ? "0" + secondOT : secondOT);
                document.getElementById("ps2").style.backgroundColor="red";
                document.getElementById("counter2").style.color = "white";
                document.getElementById("occ2").style.color = "white";
                minutePassed2 = minuteP;
                secondPassed2 = secondP;
            }, speed);
            }

            document.getElementById("counter2").innerHTML =
            (minute < 10 ? "0" + minute : minute)+ ":" + (second < 10 ? "0" + second : second);

            minutePassed2 = minuteP;
            secondPassed2 = secondP;
    }, speed);
});


document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("occ3").style.display="block";
    document.getElementById("ps3").style.backgroundColor="yellow"; 
    let minute = initialMinute;
    let second = initialSecond;

    let minuteP=0; 
    let secondP=0;
    let minuteOT=0;
    let secondOT=0;


    clearInterval(s3);
    document.getElementById("counter3").innerHTML = (minute < 10 ? "0" + minute : minute) + ":00";

    s3 = setInterval(() => {
        secondP++;
            if(secondP > 59){
                minuteP++;
                secondP=0;
            }

        if (second==0 && minute>0){
               second = 60;
               minute--;
            }

            second--;

         if (second==0 && minute == 0){
            clearInterval(s3);
            s3 = setInterval(() => {

                secondP++;
                if(secondP > 59){
                    minuteP++;
                    secondP=0;
                }
                secondOT++;
                if(secondOT > 59){
                    minuteOT++;
                    secondOT=0; 
                }

                document.getElementById("counter3").innerHTML =
            (minuteOT < 10 ? "0" + minuteOT : minuteOT)+ ":" + (secondOT < 10 ? "0" + secondOT : secondOT);
                document.getElementById("ps3").style.backgroundColor="red";
                document.getElementById("counter3").style.color = "white";
                document.getElementById("occ3").style.color = "white";
                minutePassed3 = minuteP;
                secondPassed3 = secondP;
            }, speed);
            }

            document.getElementById("counter3").innerHTML =
            (minute < 10 ? "0" + minute : minute)+ ":" + (second < 10 ? "0" + second : second);

            minutePassed3 = minuteP;
            secondPassed3 = secondP;
    }, speed);
});


document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("occ4").style.display="block";
    document.getElementById("ps4").style.backgroundColor="yellow"; 
    let minute = initialMinute;
    let second = initialSecond;

    let minuteP=0; 
    let secondP=0;
    let minuteOT=0;
    let secondOT=0;


    clearInterval(s4);
    document.getElementById("counter4").innerHTML = (minute < 10 ? "0" + minute : minute) + ":00";

    s4 = setInterval(() => {
        secondP++;
            if(secondP > 59){
                minuteP++;
                secondP=0;
            }

        if (second==0 && minute>0){
               second = 60;
               minute--;
            }

            second--;

         if (second==0 && minute == 0){
            clearInterval(s4);
            s4 = setInterval(() => {

                secondP++;
                if(secondP > 59){
                    minuteP++;
                    secondP=0;
                }
                secondOT++;
                if(secondOT > 59){
                    minuteOT++;
                    secondOT=0; 
                }

                document.getElementById("counter4").innerHTML =
            (minuteOT < 10 ? "0" + minuteOT : minuteOT)+ ":" + (secondOT < 10 ? "0" + secondOT : secondOT);
                document.getElementById("ps4").style.backgroundColor="red";
                document.getElementById("counter4").style.color = "white";
                document.getElementById("occ4").style.color = "white";
                minutePassed4 = minuteP;
                secondPassed4 = secondP;
            }, speed);
            }

            document.getElementById("counter4").innerHTML =
            (minute < 10 ? "0" + minute : minute)+ ":" + (second < 10 ? "0" + second : second);

            minutePassed4 = minuteP;
            secondPassed4 = secondP;
    }, speed);
});

function addLog(slot, minutes, seconds) {
    if (minutes >= 0 || seconds > 0) {
        const logs = document.getElementById("logs");
        const timelog = document.createElement("p");

        var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        const timestamp = getTimestamp(); // Get current timestamp dynamically
        timelog.innerHTML = "Slot " + slot + ": " +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds) + spaces + spaces + timestamp;
        
        logs.appendChild(timelog);
        
        // Scroll to the bottom of the logs container
        logs.scrollTop = logs.scrollHeight;
    }
}

function getTimestamp() {
    const now = new Date();

    // Format the timestamp
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


// Slot 1 release
document.getElementById("btn11").addEventListener("click", function () {
    if (secondPassed1 >= 1) {
        addLog(1, minutePassed1, secondPassed1);
    }

    clearInterval(s1);
    document.getElementById("counter1").innerHTML = "open";
    document.getElementById("occ1").style.display = "none";
    document.getElementById("occ1").style.color = "black";
    document.getElementById("counter1").style.color = "black";
    document.getElementById("ps1").style.backgroundColor = "#39ff14";
    minutePassed1 = 0;
    secondPassed1 = 0;
});

// Slot 2 release
document.getElementById("btn21").addEventListener("click", function () {
    if (secondPassed2 >= 1) {
        addLog(2, minutePassed2, secondPassed2);
    }

    clearInterval(s2);
    document.getElementById("counter2").innerHTML = "open";
    document.getElementById("occ2").style.display = "none";
    document.getElementById("occ2").style.color = "black";
    document.getElementById("counter2").style.color = "black";
    document.getElementById("ps2").style.backgroundColor = "#39ff14";
    minutePassed2 = 0;
    secondPassed2 = 0;
});

// Slot 3 release
document.getElementById("btn31").addEventListener("click", function () {
    if (secondPassed3 >= 1) {
        addLog(3, minutePassed3, secondPassed3);
    }

    clearInterval(s3);
    document.getElementById("counter3").innerHTML = "open";
    document.getElementById("occ3").style.display = "none";
    document.getElementById("occ3").style.color = "black";
    document.getElementById("counter3").style.color = "black";
    document.getElementById("ps3").style.backgroundColor = "#39ff14";
    minutePassed3 = 0;
    secondPassed3 = 0;
});

// Slot 4 release
document.getElementById("btn41").addEventListener("click", function () {
    if (secondPassed4 >= 1) {
        addLog(4, minutePassed4, secondPassed4);
    }

    clearInterval(s4);
    document.getElementById("counter4").innerHTML = "open";
    document.getElementById("occ4").style.display = "none";
    document.getElementById("occ4").style.color = "black";
    document.getElementById("counter4").style.color = "black";
    document.getElementById("ps4").style.backgroundColor = "#39ff14";
    minutePassed4 = 0;
    secondPassed4 = 0;
});


