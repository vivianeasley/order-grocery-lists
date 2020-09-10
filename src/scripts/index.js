import { match } from 'fuzzyjs'
import { lists } from './modules/data/grocery-lists';

const input = document.querySelector(".list-input");
const generateTradersListButton = document.querySelector(".generate-ordered-traders-list-button");
const generateWfListButton = document.querySelector(".generate-ordered-wf-list-button");
const output = document.querySelector(".ordered-list-output");
const printButton = document.querySelector(".generate-printable-button");

let printableHTML = "";

window.onload = function() {
    generateTradersListButton.addEventListener("click", ()=>{init("traders")}, false);
    generateWfListButton.addEventListener("click", ()=>{init("wholeFoods")}, false);
    printButton.addEventListener("click", openPrintWindow, false);
};
function init (store) {
    const numberOfItems = {};
    const foodsArray = Object.keys(lists[store]);

    const matchedItemsList = [];
    const unmatched = [];

    if (input.value.length < 1) {
        alert("You must add items to the grocery list")
        return;
    }

    const listArray = input.value.split("\n");
    let number;
    for (let i = 0; i < listArray.length; i++) {
        let topMatch;
        let closestDistance;
        for (let j = 0; j < foodsArray.length; j++) {
            number = getNumberOfItems(listArray[i]);
            const listItem = cleanWord(listArray[i]);
            const scoreObj = match(listItem, foodsArray[j]);

            if (!closestDistance || closestDistance < scoreObj.score) {
                closestDistance = scoreObj.score;
                topMatch = foodsArray[j];
            }

        }
        if (closestDistance > 9) {
            if (number) numberOfItems[topMatch] = number;
            matchedItemsList.push(topMatch);
        } else {
            unmatched.push(listArray[i]);
        }

    }

    const zonedFoods2dArray = [[], [], [], [], [], [], [], [], [], [], [], []];
    for (let k = 0; k < matchedItemsList.length; k++) {
        if (numberOfItems[matchedItemsList[k]]) {
            zonedFoods2dArray[lists[store][matchedItemsList[k]]].push(numberOfItems[matchedItemsList[k]]+ " " +matchedItemsList[k])
        } else {
            zonedFoods2dArray[lists[store][matchedItemsList[k]]].push(matchedItemsList[k])
        }

    }

    let finalList = "";
    printableHTML = "";
    for (let l = 0; l < zonedFoods2dArray.length; l++) {
        if (zonedFoods2dArray[l].length > 0) {
            const element = zonedFoods2dArray[l].join("\n");
            finalList = finalList + element + "\n\n\n-\n";
            let htmlElement = ""
            for (let m = 0; m < zonedFoods2dArray[l].length; m++) {
                htmlElement = htmlElement + "<div>" + zonedFoods2dArray[l][m] + "</div>";

            }
            printableHTML = printableHTML + "<p>" + htmlElement + "- <p>";
        }

    }
    if (unmatched.length > 0) {
        finalList = finalList + "UNMATCHED ITEMS:\n" + unmatched.join("\n")
    }

    output.value = finalList;
}


function cleanWord (string) {
    const regex = /^[0-9].*?\s/;
    let tmpString = string.toLowerCase();
    tmpString = tmpString.trim();
    return tmpString.replace(regex, "");
}

function getNumberOfItems (string) {
    if (/^[0-9]/.test(string)) {
        const regex = /^[0-9].*?\s/;
        return string.match(regex);
    }
    return;
}

function openPrintWindow() {
    console.log(printableHTML)
    const printableWindow = window.open('','','width=300,height=300');
    printableWindow.document.write(printableHTML);
    printableWindow.document.close();
    printableWindow.focus();
    printableWindow.print();
}