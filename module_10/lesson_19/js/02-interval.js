const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");


let intervalId = null;

startBtn.addEventListener("click", () => {
    if(!intervalId) {
        intervalId = setInterval(() => {
            console.log(`intervalId: ${intervalId}, ${Math.random()}`);
        }, 1000)
    }

    // startBtn.disabled = true;
    // intervalId = setInterval(() => {
    //     console.log(`intervalId: ${intervalId}, ${Math.random()}`);
    // }, 1000)

});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    console.log(`stop intervalId: ${intervalId}`);
    intervalId = null;
    // startBtn.disabled = false;
})




  