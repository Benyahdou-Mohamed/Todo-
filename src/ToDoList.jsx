
import ToDoItem from './ToDoItem.jsx';
 // eslint-disable-next-line react/prop-types
 function ToDoList({todos,deleteTodo,toggleTodo}) {
    return (
        <>  
   <ul className="list">
    
    {todos.length===0 && 'No ToDos'}
     {todos.map(todo =>{
      return <ToDoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    }
     )}
    </ul>
        </>
    )
}
export default ToDoList;