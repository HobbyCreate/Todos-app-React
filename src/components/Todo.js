import React, { useState } from 'react'
import TodosForm from './TodosForm';
import { RiEditBoxLine } from 'react-icons/ri';
import { CiSquareRemove } from 'react-icons/ci';

function Todo({ todos, completedTodo, editTodo, removeTodo }) {
    const [edit, setEdit] = useState({ id: null, text: '' });

    const submitEdit = text => {
        editTodo(edit.id, text);
        setEdit({
            id: null,
            text: ''
        });
    }

    if (edit.id) {
        return <TodosForm edit={edit} onSubmit={submitEdit} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "text-complete " : "text-uncomplete"}
            key={index}>
            <div className="text" key={todo.id} onClick={() => completedTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiEditBoxLine
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="remove-icon"
                />
                <CiSquareRemove
                    onClick={() => removeTodo(todo.id)}
                    className="edit-icon"
                />
            </div>
        </div>
    ));
}

export default Todo