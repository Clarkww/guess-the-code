
// we need to get canvas element

const canvas = document.getElementById('canvas')

let num1 = Math.floor(Math.random() * 9)
let num2 = Math.floor(Math.random() * 9)
let num3 = Math.floor(Math.random() * 9)
let num4 = Math.floor(Math.random() * 9)

let guessBox1 = 0
let guessBox2 = 0
let guessBox3 = 0
let guessBox4 = 0

let gameWon = false


// hint number generation

let h1a, h1b, h1c, h1d
while ((h1a = Math.floor(Math.random() * 10)) === num1) {}
while ((h1b = Math.floor(Math.random() * 10)) === num2) {}
while ((h1c = Math.floor(Math.random() * 10)) === num3) {}
h1d = num4

let h2a, h2b, h2c, h2d
while ((h2a = Math.floor(Math.random() * 10)) === num1){}
while ((h2b = Math.floor(Math.random() * 10)) === num2){}
h2c = num3
while ((h2d = Math.floor(Math.random() * 10)) === num4){}

let h3a, h3b, h3c, h3d
h3a = num1
h3b = num2
while ((h3c = Math.floor(Math.random() * 10)) === num3){}
while ((h3d = Math.floor(Math.random() * 10)) === num4){}

let h4a, h4b, h4c, h4d
h4a = num1
while ((h4b = Math.floor(Math.random() * 10)) === num2){}
h4c = num3
while ((h4d = Math.floor(Math.random() * 10)) === num4){}




console.log(`The answer is ${num1}${num2}${num3}${num4}`)

// we need to get context of canvas
const ctx = canvas.getContext('2d')

// we need to set width and height of canvas to fill the whole screen
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let boxWidth = 50
let boxHeight = 50

let numOfBoxes = 4

let pageCenter = window.innerWidth / 2
let StartingX = pageCenter - (numOfBoxes * boxWidth) / 2


let drawBoxes = () => {
    ctx.fillStyle = 'black'

    
    // Draw the guess boxes
    ctx.strokeStyle = 'limegreen'
    ctx.lineWidth = 2
    ctx.fillStyle = '#0a2403'

    for (let i = 0; i < numOfBoxes; i++) {
        ctx.strokeRect(pageCenter - 200 + (i * 100), window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 200 + (i * 100), window.innerHeight / 3, boxWidth, boxHeight)
    }
    
    // Add the text of the guess boxes
    ctx.font = '20px bangers'
    ctx.fillStyle = 'white'
    ctx.fillText(guessBox1, pageCenter - 180, window.innerHeight / 3 + 30)
    ctx.fillText(guessBox2, pageCenter - 80, window.innerHeight / 3 + 30)
    ctx.fillText(guessBox3, pageCenter + 20, window.innerHeight / 3 + 30)
    ctx.fillText(guessBox4, pageCenter + 120, window.innerHeight / 3 + 30)
}

let drawTopArrows = () => {
    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'
    // arrow text symbol
    
    ctx.fillText('▲', pageCenter - 185, window.innerHeight / 3 - 20)
    ctx.fillText("▲", pageCenter - 85, window.innerHeight / 3 - 20)
    ctx.fillText("▲", pageCenter + 15, window.innerHeight / 3 - 20)
    ctx.fillText("▲", pageCenter + 115, window.innerHeight / 3 - 20)
}

let drawBottomArrows = () => {

    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'

    // arrow text symbol
    ctx.fillText("▼", pageCenter - 185, window.innerHeight / 3 + 80)
    ctx.fillText("▼", pageCenter - 85, window.innerHeight / 3 + 80)
    ctx.fillText("▼", pageCenter + 15, window.innerHeight / 3 + 80)
    ctx.fillText("▼", pageCenter + 115, window.innerHeight / 3 + 80)
}

let guessBtnImg = new Image()
guessBtnImg.src = './assets/check_btn.png'

guessBtnImg.onload = () => {
    drawGame()
}

let guessBtnWidth = 240
let guessBtnHeight = 60

let drawGuessBtn = () => {
    console.log('drawing guess btn')
    ctx.drawImage(guessBtnImg, pageCenter - 140, window.innerHeight / 2.2, guessBtnWidth, guessBtnHeight)

    

}




let drawHints = () => {
    let hintText1 = "One Number is Correct and Well Placed"
    let hintText2 = "One Number is Correct but Wrong Placed"
    let hintText3 = "Two Numbers are Correct but Wrong Placed"
    let hintText4 = "Two Numbers are Correct and Well Placed"

    ctx.fillStyle = 'white'
    let hintArr1 = [h1a, h1b, h1c, h1d]

    let drawFrom = window.innerHeight / 1.65
    let drawHintOuterBox = (numbers, height, text) => {
        ctx.strokeStyle = 'limegreen';
        ctx.lineWidth = 2;

        let xStart = window.innerWidth * 0.05 ;
        
        let outerBoxWidth = window.innerWidth - 100;

        ctx.strokeRect(xStart, height, outerBoxWidth, 65);

        let drawInnerBoxes = (numbers, height) => {
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 2;

            // Draw a box around each number
            numbers.forEach((number, index) => {
                ctx.strokeRect(xStart + 20 + (index * boxWidth), height + 15, 40, 40);
            });

            ctx.fillStyle = 'white';
            ctx.font = '20px bangers';
            numbers.forEach((number, index) => {
                ctx.fillText(number, xStart + 35 + (index * boxWidth), height + 43);
            });
        };
        drawInnerBoxes(numbers, height);

        let drawTextBox = (text, height) => {
            // we need background of the text box to be green
            ctx.fillStyle = 'green';

            ctx.fillRect(xStart + (outerBoxWidth / 2), height, outerBoxWidth / 2, 65);
           



            ctx.fillStyle = 'white';
            ctx.font = '18px bangers';
            // background color of text box
            // ctx.fillRect(xStart + (outerBoxWidth / 2.2), height + 20, outerBoxWidth / 2.2, 50)
            ctx.fillText(text, xStart + (outerWidth / 2), height + 40, outerWidth / 2.2, 50);
            ctx.fillStyle = 'green';
            
        };
        drawTextBox(text, height);
    };

    drawHintOuterBox(hintArr1, drawFrom, hintText1)
    drawHintOuterBox([h2a, h2b, h2c, h2d], drawFrom + 80, hintText2)
    drawHintOuterBox([h3a, h3b, h3c, h3d], drawFrom + 160 , hintText3)
    drawHintOuterBox([h4a, h4b, h4c, h4d], drawFrom + 240 , hintText4)
}

let checkAnswer = () => {
    console.log('checking answer')
    // Compare the user's guess with the correct answer
    if (guessBox1 === num1 && guessBox2 === num2 && guessBox3 === num3 && guessBox4 === num4) {
        // The guess is correct
        displaySuccessScreen('./assets/cong.jpg');
    } else {
        // The guess is wrong
        displayImage('./assets/wrong_code.png');
    }
}

let displayImage = (src) => {
    let img = new Image();
    img.src = src;

    img.onload = function() {
        // Draw the image in the center of the canvas
        let x = (canvas.width - img.width) / 2;
        let y = (canvas.height - img.height) / 2;
        ctx.drawImage(img, x, y);
    }
}

let drawGuessTheCodeText = () => {
    // Load the image
    let img = new Image();
    img.src = './assets/success_bg.png';

    // Draw the image once it's loaded
    img.onload = function() {
        ctx.drawImage(img, pageCenter - 240, window.innerHeight /6.8, 440, 100);

        // Draw the text over the image
        ctx.fillStyle = 'white';
        ctx.font = '30px bangers';
        ctx.fillText('WHAT IS THE CODE?', pageCenter - 120, window.innerHeight / 5);
    }
}

let drawScore = () => {
    // we need a border around the score
    ctx.strokeStyle = '#28a745';
    ctx.lineWidth = 2;




    ctx.strokeRect(pageCenter - 95, window.innerHeight / 24, 160, 45);

    ctx.fillStyle = 'white';
    ctx.font = '20px bangers';
    ctx.fillText(`YOUR SCORE: 100`, pageCenter - 80, window.innerHeight / 14);
}

let drawRestetBtn = () => {
    let img = new Image()
    img.src = './assets/logo-removebg-preview.png'

    img.onload = () => {
        ctx.drawImage(img, window.innerWidth *0.1 , 20, 80, 80)
    }

}

let drawLangaugeBtn = () => {

    ctx.strokeStyle = '#28a745'
    ctx.lineWidth = 2

    ctx.strokeRect(window.innerWidth * 0.8, 20, 40, 40)

    ctx.fillStyle = '#343a40'

    ctx.fillRect(window.innerWidth * 0.8, 20, 40, 40)

    ctx.fillStyle = 'white'
    ctx.font = '20px bangers'
    ctx.fillText('EN', window.innerWidth * 0.8 + 10, 45)

}

let drawHelpBtn = () => {
    let img = new Image()
    img.src = './assets/help.png'

    img.onload = () => {
        ctx.drawImage(img, window.innerWidth * 0.8, 80, 40, 40)
    }
}

let drawHintsHeading = () => { 
    let img = new Image()
    img.src = './assets/hints.png'

    img.onload = () => {
        ctx.drawImage(img, pageCenter - 300, window.innerHeight * 0.54, 500, 50)
    }
}

let displaySuccessScreen = (src) => {
    let img = new Image();
    img.src = src;

    img.onload = function() {
        // Draw the image in the center of the canvas
        let x = (canvas.width - img.width) / 2;
        let y = (canvas.height - img.height) / 2;
        ctx.drawImage(img, x, y);
    }

    

    drawSuccessScreenIcons()
}

let drawSuccessScreenIcons = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let img1 = new Image();
    img1.src = './assets/next.png'

    let img2 = new Image();
    img2.src = './assets/rate_us.png'

    let img3 = new Image();
    img3.src = './assets/share.png'

    let img4 = new Image();
    img4.src = './assets/level_message.png'

    // Wait for all images to load before drawing them
    Promise.all([
        new Promise(resolve => img1.onload = resolve),
        new Promise(resolve => img2.onload = resolve),
        new Promise(resolve => img3.onload = resolve),
        new Promise(resolve => img4.onload = resolve)
    ]).then(() => {
        ctx.drawImage(img1, pageCenter - 90, window.innerHeight * 0.36, 200, 150);
        ctx.drawImage(img2, pageCenter - 200, window.innerHeight * 0.6, 100, 100);
        ctx.drawImage(img3, pageCenter + 50, window.innerHeight * 0.6, 100, 100);
        // Add the drawImage call for img4 here
        ctx.drawImage(img4, pageCenter - 200, window.innerHeight * 0.2, 400, 100)
    });
};

// let drawSuccessScreenIcons = () => {

//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     let img1 = new Image();
//     img1.src = './assets/next.png'

//     img1.onload = () => {
//         ctx.drawImage(img1, pageCenter - 90, window.innerHeight * 0.36, 200, 150)
//     }

//     let img2 = new Image();
//     img2.src = './assets/rate_us.png'

//     img2.onload = () => {
//         ctx.drawImage(img2, pageCenter - 200, window.innerHeight * 0.6, 100, 100)
//     }

//     let img3 = new Image();
//     img3.src = './assets/share.png'

//     img3.onload = () => {
//         ctx.drawImage(img3, pageCenter + 50, window.innerHeight * 0.6, 100, 100)
//     }

//     let img4 = new Image();
//     img4.src = './assets/level_message.png'

//     img4.onload = () => {
//         ctx.drawImage(img4, pageCenter - 200, window.innerHeight * 0.2, 400, 100)
//     }
// }

let drawGame = () => {
    // Load the fonts before drawing
    Promise.all([
        document.fonts.load('16px bangers'),
        document.fonts.load('18px bangers'),
        document.fonts.load('20px bangers'),
        document.fonts.load('30px bangers')
        // Add more font sizes as needed
    ]).then(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBoxes();
        drawTopArrows();
        drawBottomArrows();
        drawGuessBtn();
        drawHints();
        drawGuessTheCodeText();
        drawScore();
        drawRestetBtn()
        drawLangaugeBtn()
        drawHelpBtn()
        drawHintsHeading()
    });
};

// let drawGame = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)

//     drawBoxes()
//     drawTopArrows()
//     drawBottomArrows()
//     drawGuessBtn()
//     drawHints()
//     drawGuessTheCodeText()
//     drawScore()
//     drawRestetBtn()
//     drawLangaugeBtn()
//     drawHelpBtn()
// }

// displaySuccessScreen('./assets/cong.jpg')


canvas.addEventListener('click', function(event) {
    let x = event.clientX;
    let y = event.clientY;

    console.log(`x: ${x} y: ${y}`)
    
    
    
    // Check if click is within bounds of any arrow
    if (y >= window.innerHeight / 3 - 60 && y <= window.innerHeight / 3) {
        if (x >= pageCenter - 185 && x <= pageCenter - 165) {
            console.log('Arrow 1 clicked')
            if (guessBox1 < 9) {
                guessBox1++
            }
            
        } else if (x >= pageCenter -85 && x <= pageCenter - 65) {
            console.log('Arrow 2 clicked')
            if (guessBox2 < 9) {
                guessBox2++
            }
            
        } else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
            console.log('Arrow 3 clicked')
            if (guessBox3 < 9) {
                guessBox3++
            }
            
        } else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
            console.log('Arrow 4 clicked')
            if (guessBox4 < 9) {
                guessBox4++
            }
            
            
        }
    }
    
    if (y >= window.innerHeight / 3 + 40 && y <= window.innerHeight / 3 + 80) {
        if (x >= pageCenter - 185 && x <= pageCenter - 165) {
            console.log('Arrow 1 clicked')
            if (guessBox1 > 0) {
                guessBox1--
            }
            
        } else if (x >= pageCenter - 85 && x <= pageCenter - 65) {
            console.log('Arrow 2 clicked')
            if (guessBox2 > 0) {
                guessBox2--
            }
            
        } else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
            console.log('Arrow 3 clicked')
            if (guessBox3 > 0) {
                guessBox3--
            }            
        } else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
            console.log('Arrow 4 clicked')
            if (guessBox4 > 0) {
                guessBox4--
            }
            
            
        }
    }

    // if user clicks on guess button
    if (x >= pageCenter - 140 && x <= pageCenter - 140 + guessBtnWidth && y >= window.innerHeight / 2.2 && y <= window.innerHeight / 2.2 + guessBtnHeight) {
        console.log('Guess button clicked')
        checkAnswer()
    }

    // if user clicks on reset button

    if (x >= window.innerWidth * 0.1 && x <= window.innerWidth * 0.1 + 80 && y >= 20 && y <= 20 + 80) {
        console.log('Reset button clicked')
        window.location.reload()
    }

    if(gameWon === true) {
        if (x >= pageCenter - 90 && x <= pageCenter + 110 && y >= window.innerHeight * 0.36 && y <= window.innerHeight * 0.36 + 150) {
            console.log('Next button clicked')
            window.location.reload()
        }
    }
    
    

    
    drawGame()
    
});

drawGame()







