import React from 'react'

function Form(props) {
    const { submit, change, state, clear } = props

    return (
        <>
            <form onSubmit={submit}>
                <input onChange={change} value={state} placeholder="enter new todo" type="text" />
                <button>Add</button>
            </form>
            <form onSubmit={clear}>
                <button>Clear Completed</button>
            </form>
        </>
    )
}

export default Form