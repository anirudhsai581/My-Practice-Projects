
import {useState} from 'react';

import {v4 as uuidv4} from 'uuid';

export default function Todo () {

const [todos, setTodos] = useState([{task:"simple task",id:uuidv4()}]);

const [newTodo, setNewTodo] = useState('');

let updateTodos = (event) => {
   setNewTodo(event.target.value);
   
};

let addNewTodo = () => {
    setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
    setNewTodo(''); 
};

let deleteTodo = (id) => { 
    setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
    }); 
}

let upperCaseAll =() => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return { ...todo, task: todo.task.toUpperCase() };
        });
    });
}

let lowerCaseAll =() => {
    setTodos((prevTodos) => {  
        return prevTodos.map((todo) => {
            return { ...todo, task: todo.task.toLowerCase() };
        });
    });
}


let editTodo = (id, newTask) => {
     if (newTask === null) return;
    if (!newTask || newTask.trim() === '') {
        alert("Task cannot be empty!");
        return;
    }
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: newTask };
            }
            return todo;
        });
    });
}



    return(
<>

 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
        src="./src/assets/balayya.jpg"
          alt="NBK"
          style={{ width: '150px', height: '150px', marginRight: '15px', borderRadius: '8px' }}
        />
        <p style={{ fontSize: '16px', fontWeight: 'bold', lineHeight: '1.5' }}>
          Chudu, Todo app lo unna anni tasks chudu… ivi cheyakapothe, neeku next deadline undadu!
        </p>
        <hr></hr>
      </div>
 <hr></hr>
<input type="text"  value={newTodo} onChange ={updateTodos} placeholder="Add a todo" ></input>
<br></br>
<br></br>
<button onClick={addNewTodo} >Add Todo</button>
<br></br>
<br></br>
<h4> &lt; -Tasks Todo - &gt; </h4>
<ul>
    {
        todos.map((e) => {
            return <li key={e.id}>
                <div className="todo-item">
                  <span>{e.task}</span>
             &nbsp; &nbsp;
            <button onClick={()=>deleteTodo(e.id)} className="delete"><i class="fa-solid fa-trash"></i></button>
            <button onClick={() => editTodo(e.id, prompt("Edit your task:", e.task))} className="edit"><i class="fa-solid fa-pen-to-square"></i></button>
              </div>
            </li>
        })
    }
</ul>
<br></br>
<button onClick={upperCaseAll}>UpperCase All</button> &nbsp;&nbsp;
<button onClick={lowerCaseAll}>LowerCase All</button>

</>
    )
}