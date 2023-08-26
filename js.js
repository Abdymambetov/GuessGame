const startGame = () => {
    let stopGame = true;
    let lives = Number(prompt('Сколько жизней вы хотите?'));
    if (lives >= 8) {
        alert('Слишком много');
        return false;
    }
    if (lives < 1 || lives % 1 !==0) return false;
    while (stopGame) {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber);
        const user = prompt('Угадай цифру от 1 до 7\n' + 'Осталось жизней: ' + lives);
        if (user === null) {
            stopGame = false;
            return false;
        }
        if (user < 1 || user > 7 || user.trim() === '') {
            return false;
        }
        if (randomNumber === +user) {
            alert('Вы угадали!\nЯ загадал: ' + randomNumber);
            return false;
        }
        else lives--;
        if (lives === 0) {
            alert('Твои жизни на нуле!');
            return stopGame = false;
        }
    }
}
while (startGame() === false) {
    const play = confirm('Сыграешь со мной еще раз?');
    if (!play) break;
}