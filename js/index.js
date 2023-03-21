//Генерация карточки

const noteCard = `
<div class="wrapper block_hidden">

          <div class="card">
            <div class="card_header">

              <input id="title" class="title" type="text" name="card_title"
              placeholder="Give me the name..." spellcheck="false"></input>
  

              <div class="btns">

              <div id="checkBtn" class="checkBtn"></div>
               
              <img id="delBtn" class="delBtn" src="./src/delete.png" alt="delete">
                
  
              </div>


            </div>

            <textarea id="card_descr" placeholder="..." class="card_descr" rows="1" spellcheck="false"></textarea>

          </div>

        </div>
`;

//  Добавление карточки

const notesArea = document.getElementById("notesArea");

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () =>
  notesArea.insertAdjacentHTML("afterbegin", noteCard)
);

//  Удаление карточки

document.addEventListener("click", (e) => {
  const delElement =
    e.target.parentElement.parentElement.parentElement.parentElement;

  if (e.target.id === "delBtn") {
    delElement.remove();
  }
});

//  Отметка о выполнении

document.addEventListener("click", (e) => {
  const checkBtn = e.target;

  const noteWrapper =
    e.target.parentElement.parentElement.parentElement.parentElement;

  const inputTitle = e.target.parentElement.previousElementSibling;

  const description = e.target.parentElement.parentElement.nextElementSibling;

  if (e.target.id === "checkBtn") {
    noteWrapper.style = "background-color: rgb(200, 244, 135);";
    inputTitle.style = "background-color: rgb(200, 244, 135);";
    description.style = "background-color: rgb(200, 244, 135);";
    checkBtn.style = "background-image: url(./../src/done.png);";
    checkBtn.id = "done";
  } else if (e.target.id === "done") {
    noteWrapper.style = "background-color: #fff;";
    inputTitle.style = "background-color: #fff;";
    description.style = "background-color: #fff;";
    checkBtn.style = "background-image: url(./../src/check.png);";
    checkBtn.id = "checkBtn";
  }
});

//  Авторасширение описания карточки

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].style = `height:" + ${tx[i].scrollHeight}px; overflow-y:hidden`;
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}
