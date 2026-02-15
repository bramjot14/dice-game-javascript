    let randomNumber1 =Math.floor(Math.random() * 6) + 1;

    let randomNumber2 =Math.floor(Math.random() * 6) + 1;

    const imageElement = document.getElementsByClassName('img1')[0];
    const imageElement2 = document.getElementsByClassName('img2')[0];

    imageElement.setAttribute("src", `./images/dice${randomNumber1}.png`)
    imageElement2.setAttribute("src", `./images/dice${randomNumber2}.png`)

    const imgSrc = imageElement.src;

    const heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 Wins";
    }
    else if (randomNumber2 > randomNumber1) {
        heading.innerHTML = "Player 2 Wins";
    }
    else {
        heading.innerHTML = "Draw";
    }

