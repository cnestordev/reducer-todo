import React from 'react'

function Todo({ data }) {
    return (
        <div>
            <h3>{data.item}</h3>
        </div>
    )
}

export default Todo