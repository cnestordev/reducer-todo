import React, { useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

import Todo from './Todo'
import Form from './Form'

function Todos(props) {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const TodoList = state.map(todo => <Todo key={todo.id} data={todo} />)
    return (
        <div>
            {TodoList}
            <Form state={state} dispatch={dispatch} />
        </div>
    )
}

export default Todos