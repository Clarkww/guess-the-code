


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

// let urlScore = 8

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
            console.log(`${num1} ${num2}`)
        } 
        if (numbersToGuess >= 3){
            num3 = data.guessCode[2]
            console.log(`${num1} ${num2} ${num3}`)
        }
        if (numbersToGuess === 4){
            num4 = data.guessCode[3]
            console.log(`${num1} ${num2} ${num3} ${num4}`)
        }


        if (data.hints.nothingCorrect !== undefined) {
            hint1Text = "Nothing Is Correct"
            hint1Arr = data.hints.nothingCorrect
        }


        if (data.hints.oneCorrectAndWellPlaced !== undefined) {
            hint2Text = "One Number is Correct and Well Placed"
            hint2Arr = data.hints.oneCorrectAndWellPlaced

        }
        if (data.hints.oneCorrectButWronglyPlaced !== undefined) {
            hint3Text = "One Number is Correct \nbut Wrong Placed\n";
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
let boxHeight = 55

let numOfBoxes = 4

let pageCenter = window.innerWidth / 2

if (window.innerWidth < 750) {
    pageCenter = window.innerWidth / 2 + 30
}

let StartingX = pageCenter - (numOfBoxes * boxWidth) / 2

let boxImg = new Image()
boxImg.src = './assets/box.png'


let drawBoxes = () => {
    
    ctx.fillStyle = 'black'

    // Draw the guess boxes
    ctx.strokeStyle = 'limegreen'
    ctx.lineWidth = 2
    ctx.fillStyle = '#0a2403'

    
    if (boxImg.complete) {
        if(numbersToGuess === 2) {
            // ctx.strokeRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
            // ctx.fillRect(pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
            ctx.drawImage(boxImg, pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
            
            // ctx.strokeRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
            // ctx.fillRect(pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
            
            ctx.drawImage(boxImg, pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
        }
        if (numbersToGuess === 3) {
            // ctx.strokeRect(pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)
            // ctx.fillRect(pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)
            ctx.drawImage(boxImg, pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)
            
            // ctx.strokeRect(pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)
            // ctx.fillRect(pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)
            ctx.drawImage(boxImg, pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)
            
            // ctx.strokeRect(pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)
            // ctx.fillRect(pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)
            ctx.drawImage(boxImg, pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)
        }
        if(numbersToGuess === 4) {

        } 
        
    } else {
        boxImg.onload = () => {
            if(numbersToGuess === 2) {
                ctx.drawImage(boxImg, pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter, window.innerHeight / 3, boxWidth, boxHeight)

                ctx.font = '20px bangers'
                ctx.fillStyle = 'white'

                ctx.fillText(guessBox1, pageCenter - 80, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox2, pageCenter + 20, window.innerHeight / 3 + 30)
            }
            if(numbersToGuess === 3) {
                ctx.drawImage(boxImg, pageCenter - 150, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter - 50, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter + 50, window.innerHeight / 3, boxWidth, boxHeight)

                ctx.font = '20px bangers'
                ctx.fillStyle = 'white'

                ctx.fillText(guessBox1, pageCenter - 130, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox2, pageCenter - 30, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox3, pageCenter + 70, window.innerHeight / 3 + 30)
            }
            if(numbersToGuess === 4) {
                ctx.drawImage(boxImg, pageCenter - 200, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter - 100, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter, window.innerHeight / 3, boxWidth, boxHeight)
                ctx.drawImage(boxImg, pageCenter + 100, window.innerHeight / 3, boxWidth, boxHeight)

                ctx.font = '20px bangers'
                ctx.fillStyle = 'white'

                ctx.fillText(guessBox1, pageCenter - 180, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox2, pageCenter - 80, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox3, pageCenter + 20, window.innerHeight / 3 + 30)
                ctx.fillText(guessBox4, pageCenter + 120, window.innerHeight / 3 + 30)
            }
        }
        
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

let arrowUpImg = new Image()
arrowUpImg.src = './assets/up_arrow.png'

let arrowDownImg = new Image()
arrowDownImg.src = './assets/down_arrow.png'

let drawTopArrows = () => {
    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'
    // arrow text symbol

    if (arrowUpImg.complete === false) {
        arrowUpImg.onload = () => {
    
            if (numbersToGuess === 2) {
            ctx.drawImage(arrowUpImg, pageCenter - 100, window.innerHeight / 3 - 30, 50, 40)
            ctx.drawImage(arrowUpImg, pageCenter, window.innerHeight / 3 - 30, 50, 40)
            }
    
            if (numbersToGuess === 3) {
                ctx.drawImage(arrowUpImg, pageCenter - 150, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter - 50, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter + 50, window.innerHeight / 3 - 30, 50, 40)
            }
            if(numbersToGuess === 4) {
                ctx.drawImage(arrowUpImg, pageCenter - 200, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter - 100, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter + 100, window.innerHeight / 3 - 30, 50, 40)
            }
    
        } 

    } else {
        if (numbersToGuess === 2) {
            ctx.drawImage(arrowUpImg, pageCenter - 100, window.innerHeight / 3 - 30, 50, 40)
            ctx.drawImage(arrowUpImg, pageCenter, window.innerHeight / 3 - 30, 50, 40)
            }
    
            if (numbersToGuess === 3) {
                ctx.drawImage(arrowUpImg, pageCenter - 150, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter - 50, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter + 50, window.innerHeight / 3 - 30, 50, 40)
            }
            if(numbersToGuess === 4) {
                ctx.drawImage(arrowUpImg, pageCenter - 200, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter - 100, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter, window.innerHeight / 3 - 30, 50, 40)
                ctx.drawImage(arrowUpImg, pageCenter + 100, window.innerHeight / 3 - 30, 50, 40)
            }
        
    }





    
}

let drawBottomArrows = () => {

    ctx.fillStyle = '#d7ff93'
    ctx.font = '20px bangers'

    if (arrowDownImg.complete === false) {
        arrowDownImg.onload = () => {
            if(numbersToGuess === 2) {
                ctx.drawImage(arrowDownImg, pageCenter - 100, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter, window.innerHeight / 3 + 48, 50, 40)
            }
            if(numbersToGuess === 3) {
                ctx.drawImage(arrowDownImg, pageCenter - 150, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter - 50, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter + 50, window.innerHeight / 3 + 48, 50, 40)
            }
            if(numbersToGuess === 4) {
                ctx.drawImage(arrowDownImg, pageCenter - 200, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter - 100, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter, window.innerHeight / 3 + 48, 50, 40)
                ctx.drawImage(arrowDownImg, pageCenter + 100, window.innerHeight / 3 + 48, 50, 40)
            }
        } 

    } else {
        if(numbersToGuess === 2) {
            ctx.drawImage(arrowDownImg, pageCenter - 100, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter, window.innerHeight / 3 + 48, 50, 40)
        }
        if(numbersToGuess === 3) {
            ctx.drawImage(arrowDownImg, pageCenter - 150, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter - 50, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter + 50, window.innerHeight / 3 + 48, 50, 40)
        }
        if(numbersToGuess === 4) {
            ctx.drawImage(arrowDownImg, pageCenter - 200, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter - 100, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter, window.innerHeight / 3 + 48, 50, 40)
            ctx.drawImage(arrowDownImg, pageCenter + 100, window.innerHeight / 3 + 48, 50, 40)
        }
    }

}


let guessBtnWidth = 245
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

let hintInnerBoxImg = new Image()
hintInnerBoxImg.src = './assets/hint_inner_box.png'



let onloadEvents = []

hintInnerBoxImg.onload = () => {
    for (let event of onloadEvents) {
        event();
    }
};

let hintNumBoxImg = new Image()
hintNumBoxImg.src = './assets/hintNumBox.png'

let drawHints = () => {

    

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
                hintNumBoxWitdth = (window.innerWidth / 2) / 3.7
                
                xStart = 0;
            }

            
    
            ctx.strokeRect(xStart, height, outerBoxWidth, 65);
            // transparent black
            ctx.fillStyle = 'rgba(10, 36, 3, 0.3)';
            ctx.fillRect(xStart, height, outerBoxWidth, 65);

    
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
                        // ctx.strokeRect(xStart  + gap , height , hintNumBoxWitdth, 65);
                        // ctx.drawImage(hintNumBoxImg, xStart  + gap , height , hintNumBoxWitdth, 65)

                        if(hintNumBoxImg.complete) {
                            ctx.drawImage(hintNumBoxImg, xStart  + gap , height , hintNumBoxWitdth, 65)
                        } else {
                            hintNumBoxImg.addEventListener('load', function() { 
                                ctx.drawImage(hintNumBoxImg, xStart  + gap , height , hintNumBoxWitdth, 65)
                                ctx.fillStyle = 'white';
                                ctx.font = '20px bangers';
                                ctx.fillText(number, xStart + (hintNumBoxWitdth / 2 - 3 ) + gap, height + 40)
                            }
                            )                          
                        }
                    } else {
                        // ctx.strokeRect(xStart + 20 + (index * boxWidth), height + 10, hintNumBoxWitdth, 40);
                        // ctx.drawImage(hintNumBoxImg, xStart + 20 + (index * boxWidth), height + 10, hintNumBoxWitdth, 45)
                        if(hintNumBoxImg.complete) {
                            ctx.drawImage(hintNumBoxImg, xStart + 20 + (index * boxWidth), height + 10, hintNumBoxWitdth, 45)
                        }
                        else {
                            hintNumBoxImg.addEventListener('load', function() { 
                                ctx.drawImage(hintNumBoxImg, xStart + 20 + (index * boxWidth), height + 10, hintNumBoxWitdth, 45)
                                ctx.fillStyle = 'white';
                                ctx.font = '20px bangers';
                                ctx.fillText(number, xStart + 35 + (index * boxWidth), height + 35)
                            }
                            )                          
                        }
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
                // ctx.fillStyle = 'green';
            
    
                let y = height
                let hintBoxX
                let hintBoxWidth
                if (window.innerWidth < 750) {
                    hintBoxX =  hintNumBoxWitdth*3.5
                    hintBoxWidth = hintNumBoxWitdth * 4  
                    
                }
                else if (window.innerWidth > 750) {
                    hintBoxX = xStart + (outerBoxWidth / 2) 
                    hintBoxWidth = outerBoxWidth / 2
                }

                let font = '18px bangers'
                if (window.innerWidth < 750) {
                    font = '13px bangers'
                }

                if(hintInnerBoxImg.complete) {
                    ctx.drawImage(hintInnerBoxImg, hintBoxX , y, hintBoxWidth, 65);
                } else {
                    hintInnerBoxImg.addEventListener('load', function() {
                        ctx.drawImage(hintInnerBoxImg, hintBoxX, y, hintBoxWidth, 65)
                        ctx.fillStyle = 'white';
                        ctx.font = font;
                        ctx.fillText(text, hintBoxX + 23, height + 40, outerBoxWidth / 2.2, 20)
                    });
                }

                let fontStart = hintBoxX + 23


                
                ctx.fillStyle = 'white';
                ctx.font = font;
                ctx.fillText(text, fontStart, height + 40, outerBoxWidth / 2.2, 20);
            
                // Adjust the y-coordinate of the text based on the screen size
    
            
                // ctx.fillStyle = 'green';
            };
            drawTextBox(text, height);
        };
    
        // console.log(hint1Arr)
        // console.log(hint2Arr)
        // console.log(hint3Arr)
        // console.log(hint4Arr)
    
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
            // displaySuccessScreen('./assets/lost.jpg')
            if (score > 0) {
                score--
                localStorage.setItem('score', score)
            }
            // event listener so if the user clicks on the canvas it will reload the page
            canvas.addEventListener('click', () => {
                location.reload()
            })
        }
    }
}

let displayWrong = (src) => {
    let img = new Image();
    img.src = src;

    img.onload = function() {
        let scaleFactor = Math.min(window.innerWidth / img.width, img.height / 3 / img.height);
        let width = (img.width * scaleFactor) * 1.4;
        let height = (img.height * scaleFactor)* 1.4;

        let x = (window.innerWidth - width) / 2.3;
        let y = (window.innerHeight - height) / 3.1;

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

let scoreBg = new Image();
scoreBg.src = './assets/score-box.png'

let drawScore = () => {

    // ctx.strokeStyle = '#28a745';
    // ctx.lineWidth = 2;

    let scoreWidth = 240;
    let scoreHeight = 48;

    let font = '20px bangers'

    let textStartX = pageCenter - (scoreWidth / 2 - 36)
    



    if(window.innerWidth < 750) {
        scoreWidth = 140
        scoreHeight = 44
        font = '16px bangers'
        textStartX = pageCenter - (scoreWidth / 2 + 10)
    }

    if(scoreBg.complete) {
        ctx.drawImage(scoreBg, pageCenter - (scoreWidth / 2 + 25), window.innerHeight / 24, scoreWidth, scoreHeight);
    } else {
        scoreBg.onload = () => {
            ctx.drawImage(scoreBg, pageCenter - (scoreWidth / 2 + 25), window.innerHeight / 24, scoreWidth, scoreHeight);
            ctx.fillStyle = 'white';
            ctx.font = font;
            ctx.fillText(`YOUR SCORE: ${score}`, textStartX , window.innerHeight / 24 + (46 / 1.7) )
        }

    }

    // ctx.strokeRect(pageCenter - (scoreWidth / 2 + 30), window.innerHeight / 24, scoreWidth, 46);

    ctx.fillStyle = 'white';
    ctx.font = font;
    ctx.fillText(`YOUR SCORE: ${score}`, textStartX, window.innerHeight / 24 + (46 / 1.7) );
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

let langBg = new Image()
langBg.src = './assets/lang-bg.png'

let currentLang = 'en' 


let drawLangaugeBtn = () => {

    ctx.strokeStyle = '#28a745'
    ctx.lineWidth = 2
    ctx.fillStyle = '#343a40'
    ctx.fillStyle = 'white'

    if(window.innerWidth < 750){
        if(langBg.complete) {
            ctx.drawImage(langBg, window.innerWidth * 0.8, 20, 40, 40)
        } else {
            langBg.onload = () => {
                ctx.drawImage(langBg, window.innerWidth * 0.8, 20, 40, 40)
                ctx.font = '16px bangers'
                ctx.fillText(currentLang, window.innerWidth * 0.8 + 12, 45)
            }
        }
    } else {
        if(langBg.complete) {
            ctx.drawImage(langBg, window.innerWidth * 0.79, 20, 60, 60)
        } else {
            langBg.onload = () => {
                ctx.drawImage(langBg, window.innerWidth * 0.79, 20, 60, 60)
                ctx.font = '20px bangers'
                ctx.fillText(currentLang, window.innerWidth * 0.8 + 10, 55)
            }
        }

        
    }
    



    
    if(window.innerWidth < 750){
        ctx.font = '16px bangers'
        ctx.fillText(currentLang, window.innerWidth * 0.8 + 12, 45)
    } else {
        ctx.font = '20px bangers'
        ctx.fillText(currentLang, window.innerWidth * 0.8 + 10, 55)
    }

}

let showLanguageToggle = false

let toggleBg = new Image()
toggleBg.src = './assets/toggle-bg.png'

let enIng = new Image()
enIng.src = './assets/en.png'

let frImg = new Image()
frImg.src = './assets/fr.png'

let esImg = new Image()
esImg.src = './assets/es.png'



let drawLangaugeToggle = () => {

    // we need to draw under the toggle button first bg, then the images going down in a row withing the bg

    if(window.innerWidth < 750){
        if(toggleBg.complete) {
            ctx.drawImage(toggleBg, window.innerWidth * 0.8, 55, 40, 110)
        } else {
            toggleBg.onload = () => {
                ctx.drawImage(toggleBg, window.innerWidth * 0.8, 55, 40, 110)
            }
        }

        if(enIng.complete) {
            ctx.drawImage(enIng, window.innerWidth * 0.8 + 5, 60, 30, 25)
        } else {
            enIng.onload = () => {
                ctx.drawImage(enIng, window.innerWidth * 0.8 + 5, 60, 30, 25)
            }
        }
        if(frImg.complete) {
            ctx.drawImage(frImg, window.innerWidth * 0.8 + 5, 90, 30, 25)
        } else {
            frImg.onload = () => {
                ctx.drawImage(frImg, window.innerWidth * 0.8 + 5, 90, 30, 25)
            }
        }

        if(esImg.complete) {
            ctx.drawImage(esImg, window.innerWidth * 0.8 + 5, 120, 30, 25)
        } else {
            esImg.onload = () => {
                ctx.drawImage(esImg, window.innerWidth * 0.8 + 5, 120, 30, 25)
            }
        }
    }



     else {
        if(toggleBg.complete) {
            ctx.drawImage(toggleBg, window.innerWidth * 0.79, 70, 60, 140)
        } else {
            toggleBg.onload = () => {
                ctx.drawImage(toggleBg, window.innerWidth * 0.79, 70, 60, 140)
            }
        }

        if (enIng.complete) {
            ctx.drawImage(enIng, window.innerWidth * 0.8 , 80, 40, 30)
        } else {
            enIng.onload = () => {
                ctx.drawImage(enIng, window.innerWidth * 0.8 , 80, 40, 30)
            }
        }

        if (frImg.complete) {
            ctx.drawImage(frImg, window.innerWidth * 0.8 , 120, 40, 30)
        } else {
            frImg.onload = () => {
                ctx.drawImage(frImg, window.innerWidth * 0.8, 120, 40, 30)
            }
        }

        if (esImg.complete) {
            ctx.drawImage(esImg, window.innerWidth * 0.8 , 160, 40, 30)
        } else {
            esImg.onload = () => {
                ctx.drawImage(esImg, window.innerWidth * 0.8 , 160, 40, 30)
            }
        }
    }

}

let helpBtnImg = new Image()
helpBtnImg.src = './assets/help.png'
let drawHelpBtn = () => {

    if(helpBtnImg.complete) {
        if(window.innerWidth < 750){
            ctx.drawImage(helpBtnImg, window.innerWidth * 0.8, 80, 40, 40)
        } else {
            ctx.drawImage(helpBtnImg, window.innerWidth * 0.79 - 5, 90, 70, 70)
        }
    } else {
        helpBtnImg.onload = () => {
            if(window.innerWidth < 750){
                ctx.drawImage(helpBtnImg, window.innerWidth * 0.8 , 80, 40, 40)
            } else {
                ctx.drawImage(helpBtnImg, window.innerWidth * 0.79 - 5, 90, 70, 70)
            }
        }

    }

}
let hintHeadingImg = new Image()
hintHeadingImg.src = './assets/hints.png'

let drawHintsHeading = () => { 

    if(hintHeadingImg.complete) {
        ctx.drawImage(hintHeadingImg, pageCenter - 290, window.innerHeight * 0.54, 500, 50)
    } else {
        hintHeadingImg.onload = () => {
            ctx.drawImage(hintHeadingImg, pageCenter - 290, window.innerHeight * 0.54, 500, 50)
        }

    }

}

let displaySuccessScreen = (src) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    let img = new Image()
    img.src = src;
    
    img.onload = function() {
        let x = (canvas.width - img.width) / 2;
        let y = (canvas.height - img.height) / 2;
        ctx.drawImage(img, x, y);

        drawSuccessScreenIcons();
    }
}

let drawSuccessScreenIcons = () => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)

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
        document.fonts.load('10px bangers'),
        document.fonts.load('12px bangers'),
        document.fonts.load('13px bangers'),
        document.fonts.load('14px bangers'),

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
        !showLanguageToggle && drawHelpBtn()
        drawHintsHeading()
        displayHelpScreen && displayHelp()
        showLanguageToggle && drawLangaugeToggle()

    });
};

let successScreenDisplayed = false


canvas.addEventListener('click', function(event) {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

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
    
    if (showLanguageToggle === false && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 80 && y <= 80 + btnHeight) {
        // console.log('Help button clicked')
        displayHelpScreen = true;
    } else if (displayHelpScreen === true) {
        displayHelpScreen = false;
    }

    // if language button is clicked

    if(window.innerWidth < 750) {
        if (x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 20 && y <= 20 + btnHeight) {
            // console.log('Language button clicked')
            showLanguageToggle = !showLanguageToggle
        }
    
        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 60 && y <= 60 + btnHeight) {
            // English button clicked
            currentLang = 'en'
        }
        
        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 90 && y <= 90 + btnHeight) {
            // French button clicked
            currentLang = 'fr'
        }
        
        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 120 && y <= 120 + btnHeight) {
            // Spanish button clicked
            currentLang = 'es'
        }
        
    } else {
        if (x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 20 && y <= 20 + btnHeight) {
            // console.log('Language button clicked')
            showLanguageToggle = !showLanguageToggle
        }

        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 80 && y <= 80 + btnHeight) {
            // English button clicked
            currentLang = 'en'
        }

        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 120 && y <= 120 + btnHeight) {
            // French button clicked
            currentLang = 'fr'
        }

        if (showLanguageToggle === true && x >= window.innerWidth * 0.80 && x <= window.innerWidth * 0.80 + btnWidth && y >= 160 && y <= 160 + btnHeight) {
            // Spanish button clicked
            currentLang = 'es'
        }

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
        setTimeout(function() {
            successScreenDisplayed = true;
        }, 1000)
        if (successScreenDisplayed === true && x >= pageCenter - 140 && x <= pageCenter + 160 && y >= window.innerHeight * 0.36 && y <= window.innerHeight * 0.36 + 100) {
            console.log('Next button clicked')
            window.location.reload()
        }
    }
    
    canvas.height = window.innerHeight + 100
});

drawGame()
