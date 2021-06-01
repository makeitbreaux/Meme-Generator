// Selects URL input by user
const imgUrl = document.querySelector('#inputURL');

//Selects Submit Button
const subBtn = document.querySelector('.submitBtn');

//Selects Div Image will be displayed in
const imgField = document.querySelector('.imgRow');



// Events Listeners
subBtn.addEventListener('click', addMeme);


function addMeme(event) {
    event.preventDefault();
    
    //creates div for Meme
    const memeDiv = document.createElement('div');
    memeDiv.classList.add("meme-img");
    
    //creates div for image 
    const textAbove = document.getElementById("inputTextAbove");
    const urlInput = document.getElementById('inputURL').value,
        src = urlInput,
        img = document.createElement('img');
    img.src = src;
    img.width = "500";
    
    //creates div for top caption
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add("topText");
    topTextDiv.innerText = document.getElementById("inputTextAbove").value;
    
    //creates div for bottom caption
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("botText");
    bottomTextDiv.innerText = document.getElementById("inputTextBelow").value;

    //adds image, top & bottom caption to display div
    imgField.appendChild(memeDiv);
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    
    //resets form after submission
    newForm.reset();
}

