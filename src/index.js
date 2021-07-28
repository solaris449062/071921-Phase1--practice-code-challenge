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
        addDataToHTML(data);
    });

function addDataToHTML(dogData) {
    const parentNode = document.querySelector("div#dog-bar");

    dogData.forEach((dog) => {
    const dogSpan = document.createElement('span');
    dogSpan.textContent = dog.name;
    parentNode.appendChild(dogSpan)
    })
    
    
    // console.log(addLocation)
}


