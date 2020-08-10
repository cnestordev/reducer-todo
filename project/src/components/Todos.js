import React, { useReducer, useState } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

import Todo from './Todo'
import Form from './Form'

function Todos(props) {
    const [state, dispatch] = useReducer(todoReducer, initialState)
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

    const handleToggler = obj => {
        dispatch({
            type: 'TOGGLE',
            payload: obj
        })
    }

    const handleClear = e => {
        e.preventDefault()
        dispatch({
            type: 'CLEAR'
        })
    }

    const TodoList = state.map(todo => <Todo toggler={handleToggler} key={todo.id} data={todo} />)

    const uncompleted = state.filter(todo => !todo.completed)

    return (
        <div className="container">
            <h1>Your Todo List</h1>
            <p className="subheader">You have <span className="number">{uncompleted.length}</span> items left </p>
            <Form clear={handleClear} state={query} change={handleChange} submit={handleSubmit} />
            {TodoList}
        </div>
    )
}

export default Todos