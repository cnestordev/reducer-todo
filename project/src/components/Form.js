import React, { useState } from 'react'

function Form(props) {
    const { dispatch, state } = props
    const [query, setQuery] = useState('')

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD',
            payload: query
        })
        setQuery('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={query} placeholder="enter new todo" type="text" />
                <button>Add</button>
            </form>
        </>
    )
}

export default Form