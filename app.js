// Selectors
const imgUrl = document.querySelector('.imgUrl');
const capOne = document.querySelector('.cap1');
const capTwo = document.querySelector('.cap2');
const subBtn = document.querySelector('.submitBtn');
const imgField = document.querySelector('.image');



// Events Listeners
subBtn.addEventListener('click', addMeme);
imgField.addEventListener('click', remove, false);

// Functions
function addMeme(event) {
    event.preventDefault();

    const memeDiv = document.createElement('div');
    memeDiv.classList.add("meme");


    const newMeme = document.createElement('img');
    newMeme.src = imgUrl.value;
    newMeme.classList.add("textdiv");
    memeDiv.innerText = capOne.value + "\n" + capTwo.value + "\n";
    memeDiv.appendChild(newMeme);

    imgField.appendChild(memeDiv);

    clear();
}


function clear() {
    document.getElementById("newForm").reset();
}

function remove(event) {
    event.target.parentNode.remove();
}