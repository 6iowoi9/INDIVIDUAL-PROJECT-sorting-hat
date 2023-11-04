const Houses = [
    { house: "gryffindor", image: "https://images.ctfassets.net/usf1vwtuqyxm/4PcgKT3VHNAUTvf7kXkdrD/2093bb06b6a9e6e74129f13c0c639932/Filled-Gryffindor.svg" },
    { house: "hufflepuff", image: "https://images.ctfassets.net/usf1vwtuqyxm/1Et1EKQhLsGiql1ZlbHShw/79b58fe13d156833a808c82b085bedfe/Filled-Hufflepuff.svg" },
    { house: "ravenclaw", image: "https://images.ctfassets.net/usf1vwtuqyxm/17xo05yCVo3tetTYhsgAvG/8963643ef613a74abc40a72548ddb953/Filled-Ravenclaw.svg" },
    { house: "slytherin", image: "https://images.ctfassets.net/usf1vwtuqyxm/1dUgeiYSumqjTF6m8BWP1u/aa4d596be495975136ce08fe14a63e7b/Filled-Slytherin.svg" }
];
const box1 = document.querySelector("#box1");

let domstring =""
//grab sortbutton when clicks function will create a name = to the name inputted in text bar value trim will remove any added spaces or mistakes user types . 
document.getElementById("sortbutton").addEventListener("click", function() {
    const Name = document.getElementById("Name").value.trim();
    if (Name !== "") //if the name isnt = to an empty string the following function will be excuted
    {
        //we create  random house have math floor roundup the number to a whole from math.random   houses length and choose a number from the index 
        const randomhouseIndex = Math.floor(Math.random() * Houses.length);
        //we create new const = to houses[the number generated from above code which will provide the house index] 
        const randomHouse = Houses[randomhouseIndex];

        domstring += `
            <div class="card" style="width: 18rem;">
                <img src="${randomHouse.image}" class="card-img-top" alt="${randomHouse.house}">
                <div class="card-body">
                    <h5 class="card-title">${Name}</h5>
                    <p class="card-text">${randomHouse.house}</p>
                    <button class="btn btn-danger deleteBtn" onclick="movecard(this)">Expel</button>
                </div>
            </div>`;
    } 
    box1.innerHTML+=domstring
});

const box2 = document.querySelector("#box2");

function movecard(button){
    const card =button.closest('.card');
    box2.appendChild(card);
}