let addPopup = document.getElementById("add-popup")
let popupOverlay = document.querySelector(".popup-overlay")
let popup = document.querySelector(".popup")
let cancelPopup = document.getElementById("cancel-popup")
let addBook = document.getElementById("add-book")
let container = document.querySelector(".container")
let bookContainer = document.querySelector(".book-container")

let bookName = document.getElementById("book-title")    
let bookAuthor = document.getElementById("book-author")
let bookDescription = document.getElementById("book-description")

let delBook = document.getElementById("remove-book")


addPopup.addEventListener("click",function(){
    popupOverlay.style.display="block";
    popup.style.display="block"
    
   
})

cancelPopup.addEventListener("click",function(){
    popupOverlay.style.display="none";
    popup.style.display="none";
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
        
    var allArea = document.querySelectorAll('textarea');
    allArea.forEach(singleInput => singleInput.value = '');
})

addBook.addEventListener("click", function(event){
    event.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookName.value}</h2>
    <h4>${bookAuthor.value}</h4>
    <p>${bookDescription.value}</p>
    <button id="remove-book" onclick='removebook(event)'>Delete</button>`
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

    var allArea = document.querySelectorAll('textarea');
    allArea.forEach(singleInput => singleInput.value = '');

    
    popupOverlay.style.display="none";
    popup.style.display="none"
    container.append(div)
   

})

function removebook(event){
    event.target.parentElement.remove()
}
