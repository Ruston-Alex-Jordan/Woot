export function getTimeRemaining() {
    let date = new Date();
    // let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // console.log(minute, second)
    
    let secondsRemaining = ((60 - minute) * 60) + (60 - second);
    return secondsRemaining;
}


export function timerComplete() {
    window.location.reload();
}
