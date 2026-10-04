const inputTodo=document.querySelector(".input");
const addButton=document.querySelector(".add-button");
const todoLists=document.querySelector(".todoList");

export function getInput(){
  return inputTodo.value;
 }

 export function clearInput(){
  inputTodo.value="";
 }


export function displayTodo(todos){
  todoLists.innerHTML="";
  todos.forEach((todo,index)=>{
  const li=document.createElement("li");
  li.textContent=todo;
  const deleteButton= document.createElement('button');
  deleteButton.textContent="Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.dataset.index=index;
  li.appendChild(deleteButton);
  todoLists.appendChild(li);
  });
}

export function onAddTodo(callBack){
addButton.addEventListener("click",callBack);
}
export function onDeleteTodo(callBack){
  todoLists.addEventListener("click",(event)=>{
    if(event.target.classList.contains("deleteButton")){
      const index = event.target.dataset.index;
      callBack(index);
    }

  });
  

}




