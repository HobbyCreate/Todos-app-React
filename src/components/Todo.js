import React, {useState} from 'react'
import TodosForm from './TodosForm';
import { RiEditBoxLine } from 'react-icons/ri';
import { CiSquareRemove } from 'react-icons/ci';

function Todo({todos, completedTodo, editTodo, removeTodo}) {
    const [edit, setEdit] = useState({ id: null, text: ''});

    const submitEdit = text => {
        editTodo(edit.id, text);
        setEdit({
            id: null,
            text: ''
        });
    }   

    if(edit.id) {
        return <TodosForm edit={edit} onSubmit={submitEdit} />;
    }
    

    return (

        <div className="todo-text">
            {todos.map((todo, index) =>
                <div className="text-icon-container">
                    <h2 className="text" key={index} onClick={completedTodo}>{todo.text}</h2>
                    <div className="icon">
                        <RiEditBoxLine  className="edit-icon" onClick={()=>setEdit({id: todo.id, value: todo.text})}/>
                        <CiSquareRemove className="remove-icon" onClick={()=>removeTodo(todo.id)}/>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Todo