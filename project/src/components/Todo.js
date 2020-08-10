import React from 'react'

function Todo({ data, toggler }) {
    let color;
    let font;

    if (!data.completed) {
        color = {
            color: '#e4e4e4',
            transition: '150ms'
        }
        font = {
            color: '#000',
            transition: '150ms'
        }
    } else {
        color = {
            color: '#88d9ff',
            transition: '150ms'
        }
        font = {
            color: '#e4e4e4',
            transition: '150ms'
        }
    }

    return (
        <div className="item" onClick={() => toggler(data)}>
            <i style={color} className="fas fa-check-circle"></i>
            <h3 style={font}>{data.item}</h3>
        </div>
    )
}

export default Todo