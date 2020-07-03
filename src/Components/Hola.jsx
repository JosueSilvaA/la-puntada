import React, { useState } from 'react'

const Saludo = (props) => {
    const [count, setCount] = useState(0)

    return (
        <React.Fragment>
            <div>
                <h1>Hola {props.name}  desde react component</h1>
                <p className="h4 text-success">You clicked {count} times</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                    Click me
      </button>
            </div>
        </React.Fragment>
    )
}

export default Saludo;