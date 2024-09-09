const notesContainer = document.querySelector(".notes-container"); //Calling Notes container Div//
const createBtn = document.querySelector(".btn"); // declering the btn in js = notes button
let notes = document.querySelectorAll(".input-box");

function showNotes(){   //create show notes function
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();    // call show notes function

function updateStorage(){   //create update storage function
    localStorage.setItem("notes", notesContainer.innerHTML);    //store notes in the notes container
} 

createBtn.addEventListener("click", ()=>{   //added create button add event listener
    let inputBox = document.createElement("p"); //create variable called input box, store and create element by P
    let img = document.createElement("img");    //create element img tag
    inputBox.className = "input-box";   //on P Element add class name input-box
    inputBox.setAttribute("contenteditable", "true");   // in inputbox contenteditable true
    img.src = "./notes-app-img/images/delete.png"; 
    notesContainer.appendChild(inputBox).appendChild(img);  // display notes container

})

notesContainer.addEventListener("click", function(e){ //notes container eventlister when click
    if(e.target.tagName === "IMG"){ //target the bin img when click 
        e.target.parentElement.remove(); // when bin img clicked remove the notes container
        updateStorage(); // Call update storage function
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }


})

document.addEventListener("keydown", event =>{
    if(event .key === "Enter"){
       document.execCommand("insertLineBreak");
        event.preventDefault();
   }
}) 

    