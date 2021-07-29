const fetchURL = "http://localhost:3000/pups";
const dogBarParent = document.querySelector("div#dog-bar");
const dogInfoParent = document.querySelector("div#dog-info");
let dogFilter = document.querySelector("button#good-dog-filter");
let filterStatus = false;
let dogObjectArray = [];
// fetch the data
fetch(fetchURL)
.then(response => response.json()) // json() is a function! remember to put ()
.then(jsonObject => {
    saveDogObjectArray(jsonObject)
    goodDogFilter();
    createDogBar();
});

function saveDogObjectArray(jsonObjectFetched) {
    for (let i = 0; i < jsonObjectFetched.length; i++) {
        dogObjectArray.push(jsonObjectFetched[i]);
    }
}
console.log(dogObjectArray);

function createDogBar() {
    removeAllChildNodes(dogBarParent);
    if (filterStatus === false) {
        for (let i = 0; i < dogObjectArray.length; i++) {
            const spanElement = document.createElement("span");
            spanElement.innerText = dogObjectArray[i].name;
            spanElement.addEventListener("click", () => displayDogData(dogObjectArray[i]))
            dogBarParent.append(spanElement);    
        }
    }    
    else {
        for (let i = 0; i < dogObjectArray.length; i++) {
            if (dogObjectArray[i].isGoodDog) {
            const spanElement = document.createElement("span");
            spanElement.innerText = dogObjectArray[i].name;
            spanElement.addEventListener("click", () => displayDogData(dogObjectArray[i]))
            dogBarParent.append(spanElement);  
            } 
        }
    }
    // console.log(dogBarElement);
}

function goodDogFilter() {
    dogFilter.addEventListener("click", function() {
        filterStatus = !filterStatus;
        console.log(filterStatus)
        dogFilter.innerText = `Filter good dogs: ${filterStatus? "ON" : "OFF"}`;
        createDogBar();
    })
}

function displayDogData(dogObject) {
    const dogName = document.createElement("h2");
    const dogImg = document.createElement("img");
    let dogStatus = document.createElement("button");


    dogImg.src = dogObject.image;
    dogName.innerText = dogObject.name;
    dogStatus.innerText = dogObject.isGoodDog? "Good Dog!" : "Bad Dog!";
    // console.log(dogStatus)
    dogStatus.addEventListener("click", function() {
        dogObject.isGoodDog = !dogObject.isGoodDog;
        dogStatus.textContent = dogObject.isGoodDog ? "Good Dog!" : "Bad Dog!";
    })


    removeAllChildNodes(dogInfoParent);
    dogInfoParent.append(dogImg);
    dogInfoParent.append(dogName);
    dogInfoParent.append(dogStatus);

}

function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}
// put the dog name in the span tag

// append the span tag to the "div" tag with id "dog-bar"

//