const input = document.querySelector("#noteInput")
const notesSection = document.querySelector("#notesSection")

const addNote = () => { 
    const text = input.value;
    
    if(text === "") return;
    
    const note = document.createElement("div")
    note.classList.add("notes")
    note.textContent = text 

    const close = document.createElement("button")
    close.textContent = "x"
    close.classList.add("close")

    close.addEventListener("click", event =>
    event.target.parentElement.remove())
    

    const inputSection = document.querySelector('#input')
    
    note.appendChild(close)

    notesSection.appendChild(note)

    input.value = ""
}

const add = document.querySelector('#add');
add.addEventListener("click", addNote)
