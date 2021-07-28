const destinationURL = "http://localhost:3000/pups";
const formData = {
    name: "",
    email: ""
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

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
        parentNode.appendChild(dogSpan)
    }
}



// add event handler that receives click event on each span
function handleClickEvent() {
    let dogNodes = document.querySelectorAll("span")
    for (let i = 0; i < dogNodes.length; i++) {
        dogNodes[i].addEventListener("click", displayDetail(dogObjArray[i]))
    }
}

function displayDetail(dog) {
    const displayLocation = document.querySelector("div#dog-info");
    const dogHeading = document.createElement("h2");
    const dogImg = document.createElement("img");
    const dogButton = document.createElement("button");
    dogHeading.textContent = dog.name;
    dogImg.src = dog.image;
    dogButton.textContent = dog.isGoodDog;
    displayLocation.appendChild(dogHeading)
    displayLocation.appendChild(dogImg)
    displayLocation.appendChild(dogButton)
}

function addDescriptionToDiv(dogData) {

}


