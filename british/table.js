var playerName = "";
var noList = new Array();

var cordX = [[1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10]];
var cordY = [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5]];


for (let i = 0; i < 9; i++) {
    noList[i] = new Array();
    for (let u = 0; u < 10; u++) {
        noList[i][u] = i * 10 + u + 1;
    }
}

function rand(num) {
    return Math.floor(Math.random() * (num));
}

function idSplit(bId) {
    return document.querySelector(bId).id.split("-");
}


function addNames() {
    const form = document.getElementById("tform");
    const fInput = document.querySelector("input");
    playerName = fInput.value;
    document.querySelector("#printable").style.display = "block";

    if (playerName) {

        const tbody = document.getElementById("printable");

        const header = document.createElement("header");
        const h1 = document.createElement("h1");
        const main = document.createElement("main");
        const table = document.createElement("table");
        const tableBody = document.createElement("tbody");
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");


        let myName = document.createTextNode(playerName);
        h1.appendChild(myName);
        header.appendChild(h1);
        tbody.appendChild(header);
        tbody.appendChild(main);
        table.classList.add("table", "table-bordered");

        //Construct the whole printable tables with Names

        for (let i = 0; i < 9; i++) {
            tableRow.appendChild(tableCell.cloneNode(true))
        }

        for (let i = 0; i < 3; i++) {
            tableBody.appendChild(tableRow.cloneNode(true))
        }

        for (let i = 0; i < 6; i++) {
            table.appendChild(tableBody);
            main.appendChild(table.cloneNode(true));
        }

        // Add ID-s to existing cells

        let tCell = document.getElementsByTagName("td");

        for (let i = 0; i < 18; i++) {
            for (let u = 0; u < 9; u++) {
                tCell[u + i * 9].setAttribute("id", "x" + (u + 1) + "-y" + (i + 1));

            }
        }

        // Random box choice

        let randColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let checkUndefined = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < cordY.length; i++) {
            randColumn.sort(function () { return .5 - Math.random() });
            console.log("Current random column nimbers are: " + randColumn);
            for (let u = 0; u < 5; u++) {
                let box = document.querySelector("#x" + randColumn[u] + "-y" + cordY[i][0]);
                console.log("choosen box ID is: x" + randColumn[u] + "-y" + cordY[i][0]);
                box.innerHTML = noList[randColumn[u] - 1][rand(noList[randColumn[u] - 1].length)];
                console.log("Gose into the box: " + box.innerHTML);
                console.log("taking away from noList[" + (randColumn[u] - 1) + "].indexOf(" + box.innerHTML + "), 1);");
                noList[randColumn[u] - 1] = noList[randColumn[u] - 1].filter((val) => val != box.innerHTML );
                box.innerHTML == "undefined" ? checkUndefined[i]++ : false ;
                console.log(checkUndefined);
                
                //noList.findIndex((el) => el > 0); FIND THE INDEX OF FIRST NUMBER
                box.innerHTML == "undefined" ? box.innerHTML = "" : false;

            }
        }

        for (let i = 0; i < checkUndefined.filter((el) => el > 0).length; i++) {
            let box = document.querySelector("#x" + (noList.findIndex((el) => el > 0) + 1) + "-y" + checkUndefined.findIndex((el) => el > 0) + 1 );
            console.log(box);
            box.innerHTML = noList[noList.findIndex((el) => el > 0)][0];
            noList[noList.findIndex((el) => el > 0)] = noList[noList.findIndex((el) => el > 0)].filter((val) => val != box.innerHTML );
        }



    }
}























        // for (let i = 0; i < 90; i++) {
        //     let u = Math.floor(i / 10);
        //     console.log("<----------- New Loop! ----------->");
        //     console.log("let u = " + u);
        //     let numero = noList.shift();
        //     console.log("let numero = " + numero);
        //     let randYId = rand(cordY.length);
        //     console.log("let randYId = " + randYId);
        //     let box = document.querySelector("#x" + cordX[u][0] + "-y" + cordY[randYId][0]);
        //     console.log("let box = x" + cordX[u][0] + "-y" + cordY[randYId][0]);

        //     if (box.innerHTML) {
        //         console.log("The current box is occupied!");
        //         --i;
        //         noList.unshift(numero);
        //     } else {
        //         console.log("The current box is Empty!");
        //         box.innerHTML = numero;
        //         --cordY[randYId][1];
        //     }
        //     console.log("cordY[randYId][1] = " + cordY[randYId][1]);
        //     console.log("checking if cordY[randYId][1] is smaller then 1");
        //     cordY[randYId][1] < 1 ? cordY.splice(randYId, 1) : false;


        // }










        // let randXId = rand(cordX.length);
        // console.log("let randXId = " + randXId);
        // let randYId = rand(cordY.length);
        // console.log("let randYId = " + randYId);
        // let randBox = document.querySelector("#x" + cordX[randXId][0] + "-y" + cordY[randYId][0]);
        // console.log("let randBox = " + "x" + cordX[randXId][0] + " y" + cordY[randYId][0]);
        // let randNoListId = rand(noList[randXId].length);
        // console.log("let randNoListId = " + randNoListId);
        // // let randNoList = noList.flat()

        // if (noList[randXId].length < 1) {
        //     console.log("noList.splice(randXId, 1) = " + noList[randXId][0]);
        //     noList.splice(randXId, 1);
        // }
        // if (!randBox.innerHTML) {
        //     if (cordY[randYId][1] > 0) {
        //         if (cordX[randXId][1] > 0) {
        //             --cordX[randXId][1];
        //             console.log("--cordX[randXId][1] = " + cordX[randXId][1]);
        //             --cordY[randYId][1];
        //             console.log("--cordY[randYId][1] = " + cordY[randYId][1]);
        //             randBox.innerHTML = noList[randXId][randNoListId];
        //             console.log("randBox.innerHTML = " + noList[randXId][randNoListId]);
        //             console.log("noList[" + randXId + "].splice(" + randNoListId + ", 1) = removing " + noList[randXId][randNoListId]);
        //             noList[randXId].splice(randNoListId, 1); 

        //         } else {
        //             console.log("removing " + cordX[randXId] + " cordX[" + randXId + "]");
        //             cordX.splice(randXId, 1);
        //         }
        //     } else {
        //         console.log("removing " + cordY[randYId] + " cordY[" + randYId + "]");
        //         cordY.splice(randYId, 1);
        //     }
        // } else {
        //     console.log("--i = " + i);
        //     --i;
        // }
