import React from 'react'

function Todo({ data, toggler }) {
    let style;

    if (data.completed) {
        style = {
            background: 'green'
        }
    } else {
        style = {
            background: 'red'
        }
    }

    return (
        <div style={style} onClick={() => toggler(data)}>
            <h3>{data.item}</h3>
        </div>
    )
}

export default Todo