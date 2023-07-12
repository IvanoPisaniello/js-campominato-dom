"use srict"
const playButton = document.getElementById("playButton");
const squareContainer = document.getElementById("square-container");
const resetButton = document.getElementById("resetButton");
// versione 1

// creo una funzione per creare i box
// playButton.addEventListener("click", function () {

//     function createBox() {
//         for (let i = 1; i < 101; i++) {
//             let box = document.createElement("div");
//             box.className = "single-box";
//             box.innerHTML = (i);
//             squareContainer.append(box);
//             box.style.flexBasis = `calc(100% / 10)`;
//             // box.textContent = box[i];
//             console.log(box);
//             box.addEventListener("click", function () {
//                 box.classList.toggle("open-cell");
//                 console.log(i);
//                 box.innerHTML = ("");


//             });

//         }

//     }
//     console.log(createBox())



// })


// versione 2

playButton.addEventListener("click", onBtnClick);

resetButton.addEventListener("click", function () {

    location.reload();

})


//creiamo il singolo elemento
function singleSquare(textContent) {
    let box = document.createElement("div");
    box.className = "single-box";
    box.style.flexBasis = `calc(100% / 10)`;
    box.innerHTML = textContent;
    box.addEventListener("click", onSquareclick)
    function onSquareclick() {
        this.classList.toggle("open-cell");
        // console.log(box.innerHTML);
        console.log(textContent);
        // box.innerHTML = ("");
        bomb
        if (bomb() === true) {
            this.innerHTML = "<i class='fa-solid fa-bomb'></i>"
        }



    };
    return (box);
    // function onSquareclick() {
    //     if (isBomb === true) {

    //         this.innerHTML = "<i class='fa-solid fa-bomb'></i>"

    //     }
}


//creo un array di numeri casuali


//generiamone 100 al click
function onBtnClick() {
    let randomNum = [];
    for (let i = 1; i < 15; i++) {
        randomNum.push(Math.floor(Math.random() * 100));

    }
    console.log(randomNum)


    const totalSquares = 101;
    const grid = [];
    for (let i = 1; i < totalSquares; i++) {
        function bomb() {
            const isBomb = randomNum.includes(i);
            console.log(isBomb)
            return isBomb;
        }
        const singleBox = singleSquare(i);
        grid.push(singleBox);
        squareContainer.append(singleBox);





    }




    // }
    // singleBox.innerHTML = (i);

    // singleBox.dataset.indice = i;
    // console.log(singleBox.dataset);
    console.log(grid)
}















