import React from 'react'

function Form(props) {
    const { submit, change, state, clear } = props

    return (
        <>
            <form onSubmit={submit}>
                <input onChange={change} value={state} placeholder="enter new todo" type="text" />
            </form>
            <form className="clearForm" onSubmit={clear}>
                <button>Clear completed</button>
            </form>
        </>
    )
}

export default Form