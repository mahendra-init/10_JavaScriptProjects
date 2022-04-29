//JavaScript counts months from 0 to 11:

const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle = popupBox.querySelector("header p"),
  closeIcon = popupBox.querySelector("header i"),
  addBtn = popupBox.querySelector("button"),
  titleTag = popupBox.querySelector("input"),
  descTag = popupBox.querySelector("textarea"),
  //getting notes from localstorage if exist and parsing them to js obj otherwise parsing an empty array
  notes = JSON.parse(localStorage.getItem("notes") || "[]");

let isUpdate = false,
  updateId;
function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let wrapperEl = `
        <li class="note">
        <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
        </div>
        <div class="bottom-content">
        <span>${note.date}</span>
        <div class="settings">
                                <i onclick = "showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                <ul class="menu">
                                    <li onclick = "updateNote(${index}, '${note.title}', '${note.description}')"><i class="fa-solid fa-pen"></i>Edit</li>
                                    <li onclick = "deleteNote(${index})"><i class="fa-solid fa-trash-can"></i>Delete</li>
                                </ul>
                                </div>
                                </div>
                                </li>
                                `;
    addBox.insertAdjacentHTML("afterend", wrapperEl);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add("show");
  // removing class = show from setting menu if clicked anywhere else
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  confirmDel = confirm("Are you sure want to delete this note!!");
  if (!confirmDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function updateNote(noteId, title, description) {
  isUpdate = true;
  updateId = noteId;
  addBox.click();
  addBtn.innerText = "Update Note";
  popupTitle.innerText = "Update a note";
  titleTag.value = title;
  descTag.value = description;
}

addBox.addEventListener("click", () => {
  titleTag.focus();
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  isUpdate = false;
  addBtn.innerText = "Add Note";
  popupTitle.innerText = "Add a new note";
  titleTag.value = "";
  descTag.value = "";
  popupBox.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleTag.value,
    noteDesc = descTag.value;
  if (noteTitle || noteDesc) {
    let noteDate = new Date();
    noteDate = noteDate.toDateString();
    noteDate = noteDate.slice(4, noteDate.length);
    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: noteDate,
    };
    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      notes[updateId] = noteInfo;
      isUpdate = false;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes();
  }
});
