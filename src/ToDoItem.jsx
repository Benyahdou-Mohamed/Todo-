
 // eslint-disable-next-line react/prop-types
 function ToDoItem({completed,id,title,deleteTodo,toggleTodo}) {
    
    return (
        <>

        
         <li key={id}>
          <label >
            <input type="checkbox" checked={completed} onChange={e=> toggleTodo(id,e.target.checked)}/>
             {title}
          </label>
          <button className="btn btn-danger" onClick={()=>deleteTodo(id)}>delete</button>
        </li>
      
      
      
        </>
    );
}
export default ToDoItem;