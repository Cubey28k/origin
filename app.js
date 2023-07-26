function randomGame() {
    let tries = 0;
    const intervalID  = setInterval(() => {
        const randomNum = Math.random();
        tries++;

        if (randomNum > 0.75) {
            clearInterval(intervalID);
            console.log ("There were" + tries + "to find a number greater than 0.75")
        }
    }, 1000);

}