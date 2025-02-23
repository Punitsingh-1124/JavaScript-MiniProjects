// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// let notes = document.querySelectorAll("input-box");

// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem("notes") || "";
// }
// showNotes();

// function UpdateStorages() {
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// createBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })


// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         UpdateStorages();
//     }
//     else if (e.target.tagName === "p") {

//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function () {
//                 UpdateStorages();
//             };
//         });
        
//     }

// })

// document.addEventListener("keydown", event => {
//     if (Event.key === "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })

//2

// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// let notes = document.querySelectorAll("input-box");

// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem("notes") || ""; // Ensure notes load correctly from local storage
// }
// showNotes();

// function UpdateStorages() {
//     localStorage.setItem("notes", notesContainer.innerHTML); // Save notes to local storage
// }

// createBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);

//     UpdateStorages(); // Fix: Ensure new notes are saved to local storage
// });

// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         UpdateStorages(); // Update local storage after deleting a note
//     } else if (e.target.tagName === "p") {
//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function () {
//                 UpdateStorages(); // Save notes on editing
//             };
//         });
//     }
// });

// document.addEventListener("keydown", event => {
//     if (Event.key === "Enter") { // Fix: Use "event.key" instead of "Event.key"
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// });

//3
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || ""; // Load notes from localStorage

    // Fix: Reattach event listeners after loading notes
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup = function () {
            UpdateStorages();
        };
    });

    notesContainer.querySelectorAll("img").forEach(img => {
        img.onclick = function () {
            img.parentElement.remove();
            UpdateStorages();
        };
    });
}
showNotes();

function UpdateStorages() {
    localStorage.setItem("notes", notesContainer.innerHTML); // Save notes to localStorage
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    UpdateStorages(); // Save new note to localStorage
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        UpdateStorages();
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                UpdateStorages();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


