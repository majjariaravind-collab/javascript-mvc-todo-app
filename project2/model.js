const todos=[];
export function addTodo(todo){
  todos.push(todo);
}
export function getTodo(){
  return todos;
}
export function deleteTodo(index){
  todos.splice(index,1);
}