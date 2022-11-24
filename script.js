const qouteDisplay = document.getElementById('qouteDisplay');
const inputText = document.getElementById('input');
const timerElement = document.getElementById('timer');
const ShowSpeed = document.getElementById('show-speed');

const demo = ["A random qoute is all that we need","we need to correct things to get it done","When you do projects you can understand better","AirCampus taught me many interesting things that helps me innovate","Howrah Bridge is a cantilever bridge that spans over the Hooghly River in West Bengal"];
let randomIndex = Math.floor(demo.length*Math.random())
const wordCount = demo[randomIndex].split(" ").length;

inputText.addEventListener('click',()=>{ //To make timer & input reset if someone click out of the textarea and comes back in text area
    startTimer();
    renderQoute();
    inputText.value = null;
    timerElement.innerText = 0;
    ShowSpeed.innerText = "";
    inputText.style.backgroundColor = "white";
});

inputText.addEventListener('input',()=>{
   const qouteArr = qouteDisplay.querySelectorAll('span');
   const inputArr = inputText.value.split('');
   qouteArr.forEach((charSpan,index)=>{
    const inputChar = inputArr[index];

    isCorrect = false;

    if(inputChar == null){
        charSpan.classList.remove("incorrect");
        charSpan.classList.remove("correct");
        isCorrect = false;
    } else if(inputChar === charSpan.innerText){
        charSpan.classList.add("correct");
        isCorrect = true;
    } else {
        charSpan.classList.add("incorrect");
        isCorrect = false;
    }
   });
   if(isCorrect){ 
        var getTime = (timerElement.innerText)/60; //if text is correct then only get typing speed
        const speed = Math.floor(wordCount/getTime);
        ShowSpeed.innerText = `Your Speed Is ${speed} WPM `;

        renderQoute();
        inputText.value = null;
        startTime = new Date(); //To reset the time after completing correct typing
        inputText.style.backgroundColor = "red";
    }
})

let startTime;
function startTimer(){
    timerElement.innerText = 0;
    startTime = new Date();

    setInterval(() => {
        const timeElapsed = Math.floor((new Date()-startTime)/1000);
        timerElement.innerText = timeElapsed;
    },1000);
}

function renderQoute(qoute){ 
    const qouteArr = demo[randomIndex].split("");
    qouteDisplay.innerHTML = "";

    qouteArr.forEach(char =>{
        const newSpan = document.createElement('span');
        newSpan.innerText = char;
        qouteDisplay.append(newSpan);
    })
}

renderQoute();

        