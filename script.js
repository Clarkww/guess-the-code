

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
h2c = num2
while ((h2d = Math.floor(Math.random() * 10)) === num4){}

let h3a, h3b, h3c, h3d
h3a = num3
h3b = num4
while ((h3c = Math.floor(Math.random() * 10)) === num3){}
while ((h3d = Math.floor(Math.random() * 10)) === num4){}

let h4a, h4b, h4c, h4d
h4a = num1
while ((h4b = Math.floor(Math.random() * 10)) === num2){}
h4c = num3
while ((h4d = Math.floor(Math.random() * 10)) === num4){}




console.log(`The answer is ${num1}${num2}${num3}${num4}`)


const ctx = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

let boxWidth = 50
let boxHeight = 50

let numOfBoxes = 4

let pageCenter = window.innerWidth / 2

if (window.innerWidth < 750) {
    pageCenter = window.innerWidth / 2 + 30
}

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
    // console.log('drawing guess btn')
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

        
        // let outerBoxWidth = window.innerWidth - 100;
        let outerBoxWidth = 550;
        let xStart = window.innerWidth / 2 - outerBoxWidth / 2 ;
        let hintNumBoxWitdth = 40
        
        if (window.innerWidth < 750) {
            outerBoxWidth = window.innerWidth
            hintNumBoxWitdth = (window.innerWidth / 2) / 4
            xStart = 0;
        }

        ctx.strokeRect(xStart, height, outerBoxWidth, 65);

        let drawInnerBoxes = (numbers, height) => {
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 2;

            // Draw a box around each number
            numbers.forEach((number, index) => {
                let gap
                if(index === 0) {
                    gap = 0
                } else if (index === 1) {
                    gap = hintNumBoxWitdth 
                }
                else if (index === 2) {
                    gap = hintNumBoxWitdth * 2
                }
                else if (index === 3) {
                    gap = hintNumBoxWitdth * 3
                }



                if (window.innerWidth < 750) {
                    ctx.strokeRect(xStart  + gap , height , hintNumBoxWitdth, 65);
                } else {
                    ctx.strokeRect(xStart + 20 + (index * boxWidth), height + 10, hintNumBoxWitdth, 40);
                }
            });
            
            ctx.fillStyle = 'white';
            ctx.font = '20px bangers';
            numbers.forEach((number, index) => {
                let gap
                if(index === 0) {
                    gap = 0
                } else if (index === 1) {
                    gap = hintNumBoxWitdth
                }
                else if (index === 2) {
                    gap = hintNumBoxWitdth * 2
                }
                else if (index === 3) {
                    gap = hintNumBoxWitdth * 3
                }
                if (window.innerWidth < 750) {
                    ctx.fillText(number, xStart + (hintNumBoxWitdth / 2 - 3 ) + gap, height + 40);
                } else {
                    ctx.fillText(number, xStart + 35 + (index * boxWidth), height + 35);
                }
            });
        };
        drawInnerBoxes(numbers, height);

        let drawTextBox = (text, height) => {
            ctx.fillStyle = 'green';
        

            let y = height
            let hintBoxX
            let hintBoxWidth
            if (window.innerWidth < 750) {
                hintBoxX =  hintNumBoxWitdth*4
                hintBoxWidth = outerBoxWidth  
                
            }
            else if (window.innerWidth > 750) {
                hintBoxX = xStart + (outerBoxWidth / 2) 
                hintBoxWidth = outerBoxWidth / 2
            }



        
            ctx.fillRect(hintBoxX, y, hintBoxWidth, 65);
        
            ctx.fillStyle = 'white';
            ctx.font = '18px bangers';
        
            // Adjust the y-coordinate of the text based on the screen size

        
            ctx.fillText(text, hintBoxX + 10, height + 40, outerBoxWidth / 2.2, 50);
            ctx.fillStyle = 'green';
        };
        drawTextBox(text, height);
    };

    drawHintOuterBox(hintArr1, drawFrom, hintText1)
    drawHintOuterBox([h2a, h2b, h2c, h2d], drawFrom + 70, hintText2)
    drawHintOuterBox([h3a, h3b, h3c, h3d], drawFrom + 140 , hintText3)
    drawHintOuterBox([h4a, h4b, h4c, h4d], drawFrom + 210 , hintText4)
}

let checkAnswer = () => {
    // console.log('checking answer')
    // Compare the user's guess with the correct answer
    if (guessBox1 === num1 && guessBox2 === num2 && guessBox3 === num3 && guessBox4 === num4) {
        // The guess is correct
        displaySuccessScreen('./assets/cong.jpg');
    } else {
        // The guess is wrong
        displayWrong('./assets/wrong_code.png')
    }
}

let displayWrong = (src) => {
    let img = new Image();
    img.src = src;

    img.onload = function() {
        let scaleFactor = Math.min(window.innerWidth / img.width, img.height / 3 / img.height);
        let width = img.width * scaleFactor;
        let height = img.height * scaleFactor;

        let x = (window.innerWidth - width) / 2;
        let y = (window.innerHeight - height) / 2;

        ctx.drawImage(img, x, y, width, height);
    }
}

let drawGuessTheCodeText = () => {
    // Load the image
    let img = new Image();
    img.src = './assets/success_bg.png';


    img.onload = function() {
        ctx.drawImage(img, pageCenter - 240, window.innerHeight /6.8, 440, 100);

        // Draw the text over the image
        ctx.fillStyle = 'white';
        ctx.font = '30px bangers';
        ctx.fillText('WHAT IS THE CODE?', pageCenter - 120, window.innerHeight / 6.8 + 50);
    }
}

let drawScore = () => {

    ctx.strokeStyle = '#28a745';
    ctx.lineWidth = 2;

    let scoreWidth = 130;
    let scoreHeight = 45;


    ctx.strokeRect(pageCenter - (scoreWidth / 2 + 30), window.innerHeight / 24, scoreWidth, 46);

    ctx.fillStyle = 'white';
    ctx.font = '20px bangers';
    ctx.fillText(`YOUR SCORE: 100`, pageCenter - (scoreWidth / 2 + 25) , window.innerHeight / 24 + (46 / 1.5) );
}

let drawRestetBtn = () => {
    let img = new Image()
    img.src = './assets/logo-removebg-preview.png'

    img.onload = () => {
        let imgWidth = window.innerWidth < 750 ? 40 : 80;
        let imgHeight = window.innerWidth < 750 ? 40 : 80;
        ctx.drawImage(img, window.innerWidth * 0.1, 20, imgWidth, imgHeight);
    }

}

let drawLangaugeBtn = () => {

    ctx.strokeStyle = '#28a745'
    ctx.lineWidth = 2
    ctx.fillStyle = '#343a40'

    if(window.innerWidth < 750){
        ctx.strokeRect(window.innerWidth * 0.8, 20, 30, 30)
        ctx.fillRect(window.innerWidth * 0.8, 20, 30, 30)
    } else {
        ctx.strokeRect(window.innerWidth * 0.8, 20, 40, 40)
        ctx.fillRect(window.innerWidth * 0.8, 20, 40, 40)
        
    }
    



    ctx.fillStyle = 'white'
    
    if(window.innerWidth < 750){
        ctx.font = '16px bangers'
        ctx.fillText('EN', window.innerWidth * 0.8 + 6, 40)
    } else {
        ctx.font = '20px bangers'
        ctx.fillText('EN', window.innerWidth * 0.8 + 10, 45)
    }

}

let drawHelpBtn = () => {
    let img = new Image()
    img.src = './assets/help.png'

    img.onload = () => {
        if(window.innerWidth > 759){
            ctx.drawImage(img, window.innerWidth * 0.80, 80, 40, 40)
        } else {
            ctx.drawImage(img, window.innerWidth * 0.80, 80, 25, 25)
        }
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
        ctx.drawImage(img1, pageCenter - 100 , window.innerHeight * 0.36, 200, 150);
        ctx.drawImage(img2, pageCenter - 200, window.innerHeight * 0.6, 100, 100);
        ctx.drawImage(img3, pageCenter + 50, window.innerHeight * 0.6, 100, 100);
        ctx.drawImage(img4, pageCenter - 160, window.innerHeight * 0.1, 300, 100)
    });
};

let displayHelpScreen = false

let displayHelp = () => {
    let helpImg = new Image()
    helpImg.src = './assets/help_screen.png'

    let helpWidth
    let helpHiehgth

    let helpX
    let helpY

    if(window.innerWidth < 750) {
        helpWidth = window.innerWidth 
    
        helpHiehgth = window.innerHeight / 3    
    
        helpX = 0
        helpY = 0
        
    } else {
        helpWidth = window.innerWidth / 2
        helpHiehgth = window.innerHeight / 2

        helpX = window.innerWidth / 4
        helpY = window.innerHeight / 4
    }


    helpImg.onload = () => {
        ctx.drawImage(helpImg, helpX, helpY, helpWidth, helpHiehgth)
    }
    
}



let drawGame = () => {

    Promise.all([
        document.fonts.load('16px bangers'),
        document.fonts.load('18px bangers'),
        document.fonts.load('20px bangers'),
        document.fonts.load('30px bangers')
        
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
        displayHelpScreen && displayHelp()
        // displaySuccessScreen('./assets/cong.jpg')
        
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

    // console.log(`x: ${x} y: ${y}`)
    
    
    
    // Check if click is within bounds of any arrow
    if (y >= window.innerHeight / 3 - 60 && y <= window.innerHeight / 3) {
        if (x >= pageCenter - 185 && x <= pageCenter - 165) {
            // console.log('Arrow 1 clicked')
            if (guessBox1 < 9) {
                guessBox1++
            }
            
        } else if (x >= pageCenter -85 && x <= pageCenter - 65) {
            // console.log('Arrow 2 clicked')
            if (guessBox2 < 9) {
                guessBox2++
            }
            
        } else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
            // console.log('Arrow 3 clicked')
            if (guessBox3 < 9) {
                guessBox3++
            }
            
        } else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
            // console.log('Arrow 4 clicked')
            if (guessBox4 < 9) {
                guessBox4++
            }
            
            
        }
    }
    
    if (y >= window.innerHeight / 3 + 40 && y <= window.innerHeight / 3 + 80) {
        if (x >= pageCenter - 185 && x <= pageCenter - 165) {
            // console.log('Arrow 1 clicked')
            if (guessBox1 > 0) {
            guessBox1--
            }
            
        } else if (x >= pageCenter - 85 && x <= pageCenter - 65) {
            console.log('Arrow 2 clicked')
            if (guessBox2 > 0) {
                guessBox2--
            }
            
        } else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
            // console.log('Arrow 3 clicked')
            if (guessBox3 > 0) {
                guessBox3--
            }            
        } else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
            // console.log('Arrow 4 clicked')
            if (guessBox4 > 0) {
                guessBox4--
            }
            
            
        }
    }

    // if user clicks on guess button
    if (x >= pageCenter - 140 && x <= pageCenter - 140 + guessBtnWidth && y >= window.innerHeight / 2.2 && y <= window.innerHeight / 2.2 + guessBtnHeight) {
        // console.log('Guess button clicked')
        checkAnswer()
    }

    // if help button is clicked

    let btnWidth, btnHeight;

    if (window.innerWidth > 759) {
        btnWidth = btnHeight = 40;
    } else {
        btnWidth = btnHeight = 25;
    }
    
    if (x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 80 && y <= 80 + btnHeight) {
        // console.log('Help button clicked')
        displayHelpScreen = true;
    } else if (displayHelpScreen === true) {
        displayHelpScreen = false;
    }


    // if user clicks on reset button

    if (x >= window.innerWidth * 0.1 && x <= window.innerWidth * 0.1 + 80 && y >= 20 && y <= 20 + 80) {
        // console.log('Reset button clicked')
        window.location.reload()
    }

    if(gameWon === true) {
        if (x >= pageCenter - 90 && x <= pageCenter + 110 && y >= window.innerHeight * 0.36 && y <= window.innerHeight * 0.36 + 150) {
            // console.log('Next button clicked')
            window.location.reload()
        }
    }

   
    
    

    
    drawGame()
    
});

drawGame()







  