import { TodoItem } from "./TodoItem"

export function ToDoList({todos, toggleTodo, deleteTodo}) { 

    return ( 
        <ul className="list"> 

        {todos.length === 0 && "Nothing to do? Are you sure?"}
        {/*  javascript concept short circuiting  */}
      
        {todos.map (todo => { 
          return ( 
            <TodoItem 
            {...todo} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
            />
          )

        })}
       
            </ul> 

    )

}

