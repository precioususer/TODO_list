//Генерация карточки

const noteCard = `
<div class="wrapper">

          <div class="card">
            <div class="card_header">

              <input class="title" type="text" name="card_title"
              placeholder="Give me the name..."></input>
  

              <div class="btns">

                
               
              <img id="delBtn" class="delBtn" src="./src/delete.png" alt="delete">
                
  
              </div>


            </div>

            <textarea id="note" class="card_descr" rows="1"></textarea>

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
