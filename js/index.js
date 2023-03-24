const notesArea = document.getElementById("notesArea");

const addBtn = document.querySelector(".addBtn");

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

  const checkBtn = document.createElement("div");
  checkBtn.setAttribute("id", "checkBtn");
  checkBtn.classList.add("checkBtn");

  const delBtn = document.createElement("div");
  delBtn.classList.add("delBtn");

  const cardDescr = document.createElement("textarea");
  cardDescr.classList.add("cardDescr");
  cardDescr.setAttribute("spellchek", "false");
  cardDescr.setAttribute("rows", "1");
  cardDescr.setAttribute("placeholder", "...");

  notesArea.appendChild(wrapper);
  wrapper.appendChild(card);

  card.appendChild(cardHeader);
  card.appendChild(cardDescr);

  cardHeader.appendChild(title);
  cardHeader.appendChild(btns);

  btns.appendChild(checkBtn);
  btns.appendChild(delBtn);
}
// Create new note
addBtn.addEventListener("click", () => createNote());

// Delete note
document.addEventListener("click", (e) => {
  const delNote = e.target.closest(".wrapper");
  e.target.className === "delBtn" ? delNote.remove() : null;
});

// Check note

document.addEventListener("click", (e) => {
  const checkBtn = e.target;
  const note = e.target.closest(".wrapper");
  const input = e.target.closest(".title");
  const cardDescr = e.target.closest(".cardDescr");

  if (e.target.id === "checkBtn") {
    note.setAttribute("background-color", "var(--done-note)");
    input.setAttribute("background-color", "var(--done-note)");
    cardDescr.setAttribute("background-color", "var(--done-note)");
    checkBtn.setAttribute("background-image", "url(./done.png);");
    checkBtn.id = "done";
  } else if (e.target.className === "done") {
    note.setAttribute("background-color", "#fff");
    input.setAttribute("background-color", "#fff");
    cardDescr.setAttribute("background-color", "#fff");
    checkBtn.setAttribute("background-image", "url(./check.png);");
    checkBtn.id = "checkBtn";
  }
});
