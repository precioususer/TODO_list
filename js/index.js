const notesArea = document.getElementById("notesArea");
const addBtn = document.querySelector(".addBtn");

// Note structure
function createNote() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("cardHeader");

  const title = document.createElement("input");
  title.classList.add("title");
  title.setAttribute("placeholder", "Give me the name...");
  title.setAttribute("spellchek", "false");
  title.setAttribute("type", "text");

  const btns = document.createElement("div");
  btns.classList.add("btns");

  const checkBtn = document.createElement("input");

  checkBtn.setAttribute("id", "checkBtn");
  checkBtn.classList.add("checkBtn");
  checkBtn.setAttribute("type", "checkbox");

  const delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  const delImg = document.createElement("img");
  delImg.classList.add("delImg");
  delImg.setAttribute("src", "./../delete1.png");

  const cardDescr = document.createElement("textarea");
  cardDescr.classList.add("cardDescr");
  cardDescr.setAttribute("spellchek", "false");
  cardDescr.setAttribute("rows", "1");
  cardDescr.setAttribute("placeholder", "...");

  notesArea.prepend(wrapper);
  wrapper.appendChild(card);

  card.appendChild(cardHeader);
  card.appendChild(cardDescr);

  cardHeader.appendChild(title);
  cardHeader.appendChild(btns);

  btns.appendChild(checkBtn);
  btns.appendChild(delBtn);

  delBtn.appendChild(delImg);
}
// Create new note
addBtn.addEventListener("click", () => createNote());

// Delete note
document.addEventListener("click", (e) => {
  const delNote = e.target.closest(".wrapper");
  e.target.className === "delImg" ? delNote.remove() : null;
});

// Check note

/*

document.addEventListener("click", (e) => {
  const checkBtn = e.target;
  const note = e.target.closest(".wrapper");

  if (e.target.id === "checkBtn") {
    note.style.backgroundColor = "var(--done-note)";

    checkBtn.id = "done";
  } else if (e.target.id === "done") {
    note.style.backgroundColor = "#fff";

    checkBtn.id = "checkBtn";
  }
});

*/
