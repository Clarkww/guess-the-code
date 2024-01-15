


let data

let numbersToGuess 

let num1
let num2
let num3
let num4

let hint1Arr
let hint2Arr
let hint3Arr
let hint4Arr
let hint5Arr

let hint1Text
let hint2Text
let hint3Text
let hint4Text
let hint5Text


let score = localStorage.getItem('score') || 0

console.log()

let urlScore = parseInt(score) + 1

// console.log(urlScore)

let wrongGuesses = 0

let url = `https://www.crack-the-code.com/code/${urlScore}/`

// console.log(url)

 let request = new XMLHttpRequest();
 request.open('GET', url, false);  // `false` makes the request synchronous
 request.send(null);
 
 if (request.status === 200) {
    data = JSON.parse(request.responseText)

    numbersToGuess = data.numberToGuess
        if (numbersToGuess >= 2){
            num1 = data.guessCode[0]
            num2 = data.guessCode[1]
        } 
        if (numbersToGuess >= 3){
            num3 = data.guessCode[2]
        }
        if (numbersToGuess === 4){
            num4 = data.guessCode[3]
        }

        // console.log(data.hints)

        // we need the length of data.hints it is a object

        let hintsLength = Object.keys(data.hints).length

        // console.log(hintsLength)


        if (data.hints.nothingCorrect !== undefined) {
            hint1Text = "Nothing Is Correct"
            hint1Arr = data.hints.nothingCorrect
        }


        if (data.hints.oneCorrectAndWellPlaced !== undefined) {
            hint2Text = "One Number is Correct and Well Placed"
            hint2Arr = data.hints.oneCorrectAndWellPlaced

        }
        if (data.hints.oneCorrectButWronglyPlaced !== undefined) {
            hint3Text = "One Number is Correct but Wrong Placed"
            hint3Arr = data.hints.oneCorrectButWronglyPlaced

        }
        if (data.hints.twoCorrectAndWellPlaced !== undefined) {
            hint4Text = "Two Numbers are Correct and Well Placed"
            hint4Arr = data.hints.twoCorrectAndWellPlaced

        }
        if (data.hints.twoCorrectButWronglyPlaced !== undefined) {
            hint5Text = "Two Numbers are Correct but Wrongly Placed"
            hint5Arr = data.hints.twoCorrectButWronglyPlaced

        }
 }

const canvas = document.getElementById('canvas')



let guessBox1 = 0
let guessBox2 = 0
let guessBox3 = 0
let guessBox4 = 0

let gameWon = false

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

    if(numbersToGuess === 2) {
        ctx.strokeRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
    }

    if(numbersToGuess === 3) {
        ctx.strokeRect(pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)
    }

    if(numbersToGuess === 4) {

        ctx.strokeRect(pageCenter - 200, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 200, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)

        ctx.strokeRect(pageCenter + 100, window.innerHeight / 3, boxWidth, boxHeight)
        ctx.fillRect(pageCenter + 100, window.innerHeight / 3, boxWidth, boxHeight)

    }


    
    // Add the text of the guess boxes
    ctx.font = '20px bangers'
    ctx.fillStyle = 'white'

    if(numbersToGuess === 2) {
        ctx.fillText(guessBox1, pageCenter - 80, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox2, pageCenter + 20, window.innerHeight / 3 + 30)
    }

    if(numbersToGuess === 3) {
        ctx.fillText(guessBox1, pageCenter - 130, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox2, pageCenter - 30, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox3, pageCenter + 70, window.innerHeight / 3 + 30)
    }
    if(numbersToGuess === 4) {
        ctx.fillText(guessBox1, pageCenter - 180, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox2, pageCenter - 80, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox3, pageCenter + 20, window.innerHeight / 3 + 30)
        ctx.fillText(guessBox4, pageCenter + 120, window.innerHeight / 3 + 30)
    }


}

let drawTopArrows = () => {
    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'
    // arrow text symbol

    if(numbersToGuess === 2) {
        ctx.fillText('▲', pageCenter - 85, window.innerHeight / 3 - 20)
        ctx.fillText('▲', pageCenter + 15, window.innerHeight / 3 - 20)
    }

    if(numbersToGuess === 3) {
        ctx.fillText('▲', pageCenter - 135, window.innerHeight / 3 - 20)
        ctx.fillText('▲', pageCenter - 35, window.innerHeight / 3 - 20)
        ctx.fillText('▲', pageCenter + 65, window.innerHeight / 3 - 20)
    }

    if(numbersToGuess === 4) {
        ctx.fillText('▲', pageCenter - 185, window.innerHeight / 3 - 20)
        ctx.fillText("▲", pageCenter - 85, window.innerHeight / 3 - 20)
        ctx.fillText("▲", pageCenter + 15, window.innerHeight / 3 - 20)
        ctx.fillText("▲", pageCenter + 115, window.innerHeight / 3 - 20)
    }
    
}

let drawBottomArrows = () => {

    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'

    if(numbersToGuess === 2) {
        ctx.fillText('▼', pageCenter - 85, window.innerHeight / 3 + 80)
        ctx.fillText('▼', pageCenter + 15, window.innerHeight / 3 + 80)
    }

    if(numbersToGuess === 3) {
        ctx.fillText('▼', pageCenter - 135, window.innerHeight / 3 + 80)
        ctx.fillText('▼', pageCenter - 35, window.innerHeight / 3 + 80)
        ctx.fillText('▼', pageCenter + 65, window.innerHeight / 3 + 80)
    }

    if(numbersToGuess === 4) {
        ctx.fillText('▼', pageCenter - 185, window.innerHeight / 3 + 80)
        ctx.fillText("▼", pageCenter - 85, window.innerHeight / 3 + 80)
        ctx.fillText("▼", pageCenter + 15, window.innerHeight / 3 + 80)
        ctx.fillText("▼", pageCenter + 115, window.innerHeight / 3 + 80)
    }

}


let guessBtnWidth = 240
let guessBtnHeight = 60
let guessBtnImg = new Image()
guessBtnImg.src = './assets/check_btn.png'

let drawGuessBtn = () => {

    if (guessBtnImg.complete) {
        ctx.drawImage(guessBtnImg, pageCenter - 140, window.innerHeight / 2.2, guessBtnWidth, guessBtnHeight);
    } else {
        guessBtnImg.onload = () => {
            ctx.drawImage(guessBtnImg, pageCenter - 140, window.innerHeight / 2.2, guessBtnWidth, guessBtnHeight)
            
        }

    }
    
}


let drawHints = () => {

    if (window.innerHeight > 680) {

        ctx.fillStyle = 'white'
        // let hintArr1 = [h1a, h1b, h1c, h1d]
    
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
    
        console.log(hint1Arr)
        console.log(hint2Arr)
        console.log(hint3Arr)
        console.log(hint4Arr)
    
        if (hint1Arr) {
            drawHintOuterBox(hint1Arr, drawFrom, hint1Text);
        }
        if (hint2Arr) {
            drawHintOuterBox(hint2Arr, drawFrom + 70, hint2Text);
        }
        if (hint3Arr) {
            drawHintOuterBox(hint3Arr, drawFrom + 140, hint3Text);
        }
        if (hint4Arr) {
            drawHintOuterBox(hint4Arr, drawFrom + 210, hint4Text);
        }
        if (hint5Arr) {
            drawHintOuterBox(hint5Arr, drawFrom + 280, hint5Text);
        }
    } else {
        // drawing boxes for smaller screen height

        ctx.fillStyle = 'white'
    
        let drawFrom = window.innerHeight / 1.65
        let drawHintOuterBox = (numbers, height, text) => {
            ctx.strokeStyle = 'limegreen';
            ctx.lineWidth = 2;
    
            
            let outerBoxWidth = 550;
            let xStart = window.innerWidth / 2 - outerBoxWidth / 2 ;
            let hintNumBoxWitdth = 40
            
            if (window.innerWidth < 750) {
                outerBoxWidth = window.innerWidth
                hintNumBoxWitdth = (window.innerWidth / 2) / 4
                xStart = 0;
            }
    
            ctx.strokeRect(xStart, height, outerBoxWidth, 50);
    
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
                        ctx.strokeRect(xStart  + gap , height , hintNumBoxWitdth, 50);
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
                        ctx.fillText(number, xStart + (hintNumBoxWitdth / 2 - 3 ) + gap, height + 30);
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
    
    
    
            
                ctx.fillRect(hintBoxX, y, hintBoxWidth, 50);
            
                ctx.fillStyle = 'white';
                ctx.font = '18px bangers';
            
                // Adjust the y-coordinate of the text based on the screen size
    
            
                ctx.fillText(text, hintBoxX + 10, height + 30, outerBoxWidth / 2.2, 30);
                ctx.fillStyle = 'green';
            };
            drawTextBox(text, height);
        };
    

    
        if (hint1Arr) {
            drawHintOuterBox(hint1Arr, drawFrom, hint1Text);
        }
        if (hint2Arr) {
            drawHintOuterBox(hint2Arr, drawFrom + 50, hint2Text);
        }
        if (hint3Arr) {
            drawHintOuterBox(hint3Arr, drawFrom + 100, hint3Text);
        }
        if (hint4Arr) {
            drawHintOuterBox(hint4Arr, drawFrom + 150, hint4Text);
        }
        if (hint5Arr) {
            drawHintOuterBox(hint5Arr, drawFrom + 200, hint5Text);
        }
    }

}

let checkAnswer = () => {
    // Compare the user's guess with the correct answer
    if (numbersToGuess === 2 && guessBox1 === num1 && guessBox2 === num2) {
        // The guess is correct
        displaySuccessScreen('./assets/cong.jpg')
        gameWon = true
        score++
        localStorage.setItem('score', score)
    } else if (numbersToGuess === 3 && guessBox1 === num1 && guessBox2 === num2 && guessBox3 === num3) {
        // The guess is correct
        displaySuccessScreen('./assets/cong.jpg')
        gameWon = true
        score++
        localStorage.setItem('score', score)
    } else if (numbersToGuess === 4 && guessBox1 === num1 && guessBox2 === num2 && guessBox3 === num3 && guessBox4 === num4) {
        // The guess is correct
        displaySuccessScreen('./assets/cong.jpg')
        gameWon = true
        score++
        localStorage.setItem('score', score)
    } else {
        // The guess is wrong
        displayWrong('./assets/wrong_code.png')
        wrongGuesses++
        if (wrongGuesses === 2) {
            // The user has lost the game
            displaySuccessScreen('./assets/lost.jpg')
            if (score > 0) {
                score--
                localStorage.setItem('score', score)
            }
            window.location.reload()
        }
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
let textBgImg = new Image();
textBgImg.src = './assets/success_bg.png';

let drawGuessTheCodeText = () => {


    if(textBgImg.complete) {
        ctx.drawImage(textBgImg, pageCenter - 240, window.innerHeight /6.8, 440, 100);
    }else {
        textBgImg.onload = function() {
            ctx.drawImage(textBgImg, pageCenter - 240, window.innerHeight /6.8, 440, 100);
            ctx.fillStyle = 'white';
            ctx.font = '30px bangers';
            ctx.fillText('WHAT IS THE CODE?', pageCenter - 120, window.innerHeight / 6.8 + 50)
        }

    }


    ctx.fillStyle = 'white';
    ctx.font = '30px bangers';
    ctx.fillText('WHAT IS THE CODE?', pageCenter - 120, window.innerHeight / 6.8 + 50);
}

let drawScore = () => {

    ctx.strokeStyle = '#28a745';
    ctx.lineWidth = 2;

    let scoreWidth = 130;
    let scoreHeight = 45;


    ctx.strokeRect(pageCenter - (scoreWidth / 2 + 30), window.innerHeight / 24, scoreWidth, 46);

    ctx.fillStyle = 'white';
    ctx.font = '20px bangers';
    ctx.fillText(`YOUR SCORE: ${score}`, pageCenter - (scoreWidth / 2 + 25) , window.innerHeight / 24 + (46 / 1.5) );
}

let resetBtnImg = new Image()
resetBtnImg.src = './assets/logo-removebg-preview.png'

let drawRestetBtn = () => {
    let imgWidth = window.innerWidth < 750 ? 40 : 80;
    let imgHeight = window.innerWidth < 750 ? 40 : 80;

    if(resetBtnImg.complete) {
        ctx.drawImage(resetBtnImg, window.innerWidth * 0.1, 20, imgWidth, imgHeight);
    } else {
        resetBtnImg.onload = () => {
            ctx.drawImage(resetBtnImg, window.innerWidth * 0.1, 20, imgWidth, imgHeight);
        }

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

let helpBtnImg = new Image()
helpBtnImg.src = './assets/help.png'
let drawHelpBtn = () => {

    if(helpBtnImg.complete) {
        if(window.innerWidth > 759){
            ctx.drawImage(helpBtnImg, window.innerWidth * 0.80, 80, 40, 40)
        } else {
            ctx.drawImage(helpBtnImg, window.innerWidth * 0.80, 80, 25, 25)
        }
    } else {
        helpBtnImg.onload = () => {
            if(window.innerWidth > 759){
                ctx.drawImage(helpBtnImg, window.innerWidth * 0.80, 80, 40, 40)
            } else {
                ctx.drawImage(helpBtnImg, window.innerWidth * 0.80, 80, 25, 25)
            }
        }

    }

}
let hintHeadingImg = new Image()
hintHeadingImg.src = './assets/hints.png'

let drawHintsHeading = () => { 

    if(hintHeadingImg.complete) {
        ctx.drawImage(hintHeadingImg, pageCenter - 300, window.innerHeight * 0.54, 500, 50)
    } else {
        hintHeadingImg.onload = () => {
            ctx.drawImage(hintHeadingImg, pageCenter - 300, window.innerHeight * 0.54, 500, 50)
        }

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

    });
};


canvas.addEventListener('click', function(event) {
    let x = event.clientX;
    let y = event.clientY;

    if (numbersToGuess === 2) {
        if (y >= window.innerHeight / 3 - 60 && y <= window.innerHeight / 3) {
            if (x >= pageCenter - 85 && x <= pageCenter - 65) {
                // console.log('Arrow 1 clicked')
                if (guessBox1 < 9) {
                    guessBox1++
                }
                
            }
            else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
                // console.log('Arrow 2 clicked')
                if (guessBox2 < 9) {
                    guessBox2++
                }
                
            }
        }

        if (y >= window.innerHeight / 3 + 40 && y <= window.innerHeight / 3 + 80) {
            if (x >= pageCenter - 85 && x <= pageCenter - 65) {
                // console.log('Arrow 1 clicked')
                if (guessBox1 > 0) {
                guessBox1--
                }
                
            }
            else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
                console.log('Arrow 2 clicked')
                if (guessBox2 > 0) {
                    guessBox2--
                }
                
            }
        }
    }

    if (numbersToGuess === 3) {

        if (y >= window.innerHeight / 3 - 60 && y <= window.innerHeight / 3) {

            if (x >= pageCenter - 135 && x <= pageCenter - 115) {
                // console.log('Arrow 1 clicked')
                if (guessBox1 < 9) {
                    guessBox1++
                }
                
            }
            else if (x >= pageCenter - 35 && x <= pageCenter - 15) {
                // console.log('Arrow 2 clicked')
                if (guessBox2 < 9) {
                    guessBox2++
                }
                
            }
            else if (x >= pageCenter + 65 && x <= pageCenter + 85) {
                // console.log('Arrow 3 clicked')
                if (guessBox3 < 9) {
                    guessBox3++
                }
                
            }
        }

        if (y >= window.innerHeight / 3 + 40 && y <= window.innerHeight / 3 + 80) {
            if (x >= pageCenter - 135 && x <= pageCenter - 115) {
                // console.log('Arrow 1 clicked')
                if (guessBox1 > 0) {
                guessBox1--
                }
                
            }
            else if (x >= pageCenter - 35 && x <= pageCenter - 15) {
                console.log('Arrow 2 clicked')
                if (guessBox2 > 0) {
                    guessBox2--
                }
                
            }
            else if (x >= pageCenter + 65 && x <= pageCenter + 85) {
                // console.log('Arrow 3 clicked')
                if (guessBox3 > 0) {
                    guessBox3--
                }
                
            }
        }
    }

    if (numbersToGuess === 4) {
            
            if (y >= window.innerHeight / 3 - 60 && y <= window.innerHeight / 3) {
    
                if (x >= pageCenter - 185 && x <= pageCenter - 165) {
                    // console.log('Arrow 1 clicked')
                    if (guessBox1 < 9) {
                        guessBox1++
                    }
                    
                }
                else if (x >= pageCenter - 85 && x <= pageCenter - 65) {
                    // console.log('Arrow 2 clicked')
                    if (guessBox2 < 9) {
                        guessBox2++
                    }
                    
                }
                else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
                    // console.log('Arrow 3 clicked')
                    if (guessBox3 < 9) {
                        guessBox3++
                    }
                    
                }
                else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
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
                    
                }
                else if (x >= pageCenter - 85 && x <= pageCenter - 65) {
                    console.log('Arrow 2 clicked')
                    if (guessBox2 > 0) {
                        guessBox2--
                    }
                    
                }
                else if (x >= pageCenter + 15 && x <= pageCenter + 35) {
                    // console.log('Arrow 3 clicked')
                    if (guessBox3 > 0) {
                        guessBox3--
                    }            
                }
                else if (x >= pageCenter + 115 && x <= pageCenter + 135) {
                    // console.log('Arrow 4 clicked')
                    if (guessBox4 > 0) {
                        guessBox4--
                    }
                    
                    
                }
            }
        }


    // if user clicks on guess button
    if (x >= pageCenter - 140 && x <= pageCenter - 140 + guessBtnWidth && y >= window.innerHeight / 2.2 && y <= window.innerHeight / 2.2 + guessBtnHeight) {
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
    if(gameWon === false) {
        drawGame()
    }

    if(gameWon === true) {
        displaySuccessScreen('./assets/cong.jpg')
        if (x >= pageCenter - 140 && x <= pageCenter + 160 && y >= window.innerHeight * 0.36 && y <= window.innerHeight * 0.36 + 100) {
            // console.log('Next button clicked')
            window.location.reload()
        }
    }
    
});

drawGame()
