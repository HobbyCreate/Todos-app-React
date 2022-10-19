import React, { useState, useEffect, useRef } from 'react'

function TodosForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });
    const handleChange = e => {
        setInput(e.target.value);

    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input
        });

        setInput('')
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {props.edit ?
                (
                    <>
                        <input
                            className="input-area-edit"
                            type="text"
                            placeholder="Add Todo"
                            value={input}
                            name='text'
                            ref={inputRef}
                            onChange={handleChange} />
                        <button>Update</button>
                    </>
                ) :
                (
                    <>
                        <input
                            className="input-area"
                            type="text"
                            placeholder="Add Todo"
                            value={input}
                            name='text'
                            ref={inputRef}
                            onChange={handleChange} />
                        <button>Add</button>
                    </>
                )
            }

        </form>
    )
}

export default TodosForm
