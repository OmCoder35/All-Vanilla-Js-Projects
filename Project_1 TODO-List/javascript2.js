const inBox = document.querySelector(".input-box");
const TodoList = document.querySelector(".todo-list");
const button = document.querySelector(".submit-btn");
const todoForm = document.querySelector(".form-todo");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(inBox.value);
  const newEle = document.createElement("li");
  newEle.innerHTML = `<span class="myspan">${inBox.value}</span>
                <div class="mydiv">
                    <button class="done small-btn">Done</button>
                    <button class="remove small-btn">Remove Todo</button>
                </div>
  `;
  TodoList.append(newEle);
  inBox.value = ""; // its clear  written inside todo input box
});
// for remove and done
TodoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const newSpan = e.target.parentNode.previousElementSibling;
    newSpan.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const removeMe = e.target.parentNode.parentNode;
    removeMe.remove();
  }
});
 