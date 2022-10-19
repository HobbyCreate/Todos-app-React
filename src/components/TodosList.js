import React, { useState } from 'react'
import TodosForm from './TodosForm';
import Todo from './Todo';

function TodosList() {
    const [todos, setTodos] = useState([]);

    // Insert todo
    const addTodo = todo => {
        if (!todo.text) {
            return
        }
        const newTodo = [todo, ...todos];

        setTodos(newTodo)
        console.log(todo, ...todos);
    }

    // Check Complete 
    const completedTodo = id => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updateTodo);
    }
    // Edit todo
    const editTodo = (todoId, newTodo) => {
        if (!newTodo.text) {
            return
        }
        setTodos(prev => prev.map(item => item.id === todoId ? newTodo : item));
    }

    // Remove todo
    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArray);
    }

    return (
        <div className="todo-container">
            <TodosForm
                onSubmit={addTodo} 
            />
            <Todo
                todos={todos}
                setTodo={setTodos}
                completedTodo={completedTodo}
                removeTodo={removeTodo}
                editTodo={editTodo} 
            />
        </div>
    )
}

export default TodosList
