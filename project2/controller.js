import { onDeleteTodo,getInput,displayTodo,onAddTodo,clearInput} from "./view.js";
import { addTodo,deleteTodo,getTodo } from "./model.js";

function handleTodo(){
  const inputTodo =getInput();
  if(inputTodo.trim()===""){
    return;
  }
  addTodo(inputTodo);
  clearInput();
  displayTodo(getTodo());
  }

  function handleDelete(index){
    deleteTodo(index);
    displayTodo(getTodo());
  }
 
  onAddTodo(handleTodo);
  onDeleteTodo(handleDelete);
  displayTodo(getTodo());




