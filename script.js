
const createBtn = document.getElementById("createBtn");
const notesContainer = document.getElementById("notesContainer");

createBtn.addEventListener("click", function () {

    
    const note = document.createElement("div");
    note.classList.add("note");


    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write your note here...";

    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");


    const deleteImg = document.createElement("img");
    deleteImg.src = "delete.png";
    deleteImg.alt = "Delete";

    deleteBtn.appendChild(deleteImg);

    
    deleteBtn.addEventListener("click", function () {
        note.remove();
    });

    
    note.appendChild(textarea);
    note.appendChild(deleteBtn);

    
    notesContainer.appendChild(note);

});
