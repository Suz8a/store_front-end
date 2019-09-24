import React from 'react'

function Button(props) {
    return (
        <div class="button">
            <button>{props.nombre}</button>
        </div>
    )
}

export default Button
