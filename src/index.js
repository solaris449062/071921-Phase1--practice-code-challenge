const destinationURL = "http://localhost:3000/pups";

let dogObject;
fetch(destinationURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        parseArray(data);
        addNamesToHTML(dogObjArray);
        handleClickEvent();
    })

let dogObjArray = [];
function parseArray(object) {
    object.forEach((dog) => {
        dogObjArray.push(dog)
    })
}

// console.log(dogObjArray)

function addNamesToHTML(dogArray) {
    const parentNode = document.querySelector("div#dog-bar");

    for (let i = 0; i < dogArray.length; i++) {
        const dogSpan = document.createElement('span');
        dogSpan.textContent = dogArray[i].name;
        parentNode.append(dogSpan)
    }
}



// add event handler that receives click event on each span
function handleClickEvent() {
    let dogNodes = document.querySelectorAll("span");
    for (let i = 0; i < dogNodes.length; i++) {
        dogNodes[i].addEventListener("click", function() {
            displayDetail(dogObjArray[i]);
            // console.log("click event triggered")
        })
    }
}

function displayDetail(dog) {
    const displayLocation = document.querySelector("div#dog-info");
    const dogHeading = document.createElement("h2");
    const dogImg = document.createElement("img");
    const dogButton = document.createElement("button");
    dogHeading.textContent = dog.name;
    dogImg.src = dog.image;
    dogButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    dogButton.addEventListener("click", function() {
        dog.isGoodDog = !dog.isGoodDog;
        dogButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    })
    removeAllChildNodes(displayLocation)
    displayLocation.appendChild(dogHeading)
    displayLocation.appendChild(dogImg)
    displayLocation.appendChild(dogButton)

}

function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}