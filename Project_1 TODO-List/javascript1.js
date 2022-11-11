// // adding and removing or checking weathewr class exists or not class in tag

// let sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add("freeclass");
// console.log(sectionTodo.classList);
// sectionTodo.classList.remove("freeclass");
// const exist = sectionTodo.classList.contains("container");
// console.log(exist); //--->return true

// //-----> toggle : which add class when it not assigned and removed when it assign
// sectionTodo.classList.toggle("raone"); //-->add class
// sectionTodo.classList.toggle("raone");  //-->remove class

// const header = document.querySelector(".header");
// // header.classList.add("freeclass");
// console.log(header.classList);
// //console check code line by line when freeclass below headerclass it take css of freeclass and vice versa

// const todo=document.querySelector(".todo-list");
// todo.innerHTML = "<li>New Todo</li>" // it will change innertext
// todo.innerHTML += "<li>hello world!</li>"
// todo.innerHTML += "<li>do exam study</li>"
// console.log(todo)

// //here above we can add todo item using innerhtml but there is performance issue like whenever browser render page its will render with previous elements which take time
// //you can use below method to create elements //-----> stick with this methods to write codes
// // document.createElement
// // append
// // prepend;
// // remove

// const newElement = document.createElement("li");
// // const elementText = document.createTextNode("My homework ⌂");
// newElement.innerHTML = "my Homework"; //you can use this line insted commneted two lines
// // newElement.appendChild(elementText);
// const todo = document.querySelector(".todo-list");
// todo.append(newElement); //this add (concat) element from end
// todo.prepend(newElement); //this add (concat) element from starts
// // we can remove li item using remove method

// const todoItem = document.querySelector(".todo-list li");
// console.log(todoItem);
// todoItem.remove();

// // inserting element using before and after command

// const newTodo = document.createElement("li");
// newTodo.textContent = "My classwork";
// console.log(newTodo);
// const myClass = document.querySelector(".todo-list");
// myClass.before(newTodo);

//elem.insertAdjacentHTML(where {//beforebegin},html)
//afterbegin
//beforeend
// // afterend
// const myTodoEle = document.querySelector(".todo-list");
// myTodoEle.insertAdjacentHTML("beforebegin", "<li>Work for dream</li>");
// // myTodoEle.insertAdjacentHTML("beforeend", "<li>Work for dream</li>");
// // myTodoEle.insertAdjacentHTML("afterbegin", "<li>Work for dream</li>");
// // myTodoEle.insertAdjacentHTML("afterend", "<li>Work for dream</li>");

// //clone nods
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new Playlist";
// ul.append(li);
// const li2 = li.cloneNode(true); //true means it clone all prperties classes and other things all
// ul.prepend(li2);

// //there are append,prepend,remove,replace methods which not work in poor Internet explorer so we can use below methods
// //appendchild
// //insertBefore
// //replacechild
// //removechild    --->eg

// const unList = document.querySelector(".todo-list");
// const myList = document.createElement("li");
// myList.textContent = "Hello world how are you";
// const referance = document.querySelector(".first-todo");
// // unList.appendChild(myList);
// unList.insertBefore(myList, referance); //.insertbefore(element,before which class)
// unList.replaceChild(myList, referance);
// unList.removeChild(myList);

// // static list vs alive list
// .querySelectorAll             //gives nodeList which is static list does not update after addin element
// .getElementbysomething        // gives html collection which is live list update after adding element
// const ul = document.querySelector(".todo-list");
// const anotherItem = ul.getElementsByTagName("li");
// // console.log(ul);
// // console.log(anotherItem);
// const myLi = document.createElement("li");
// myLi.textContent = "Room for groom";
// ul.append(myLi);
// console.log(anotherItem);
// console.log(ul);

// //how to get dimenssion of element

// const myTodoList = document.querySelector(".todo-list");
// const dim = myTodoList.getBoundingClientRect();
// const dimnew = myTodoList.getBoundingClientRect().width;
// console.log(dim);
// console.log(dimnew);

// //events in Dom
// //we mostly use click event on webpages
// //we have mainly three methods to add event in any webpage 1)in HTML doc 2) in seprate js file and 3) (mordern way -->prefferd) using method .eventListenier

// //method 2
// const button = document.querySelector(".btn-headline");
// console.dir(button);
// button.onclick = function () {
//   console.log("you Clicked me!!");
// }; // but we use this in old time

// //prefferd method using event listener

const button = document.querySelector(".btn-headline");
button.addEventListener(`click`, function (event) {
  console.log("You have one msitake");
  console.dir(event); //inside the eventlistner thsi value is eual to selected button class (local inside function)
});
// using arrow function
// const button = document.querySelector(".btn-headline");
// button.addEventListener(
//   "click",
//   (rose) => console.log("good morning"),
//   console.log(rose)
// );
// console.log(this); //outside the eventlistner thsi value is eual to window (Global)
