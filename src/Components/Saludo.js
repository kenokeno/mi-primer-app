import React from 'react'

export default function Saludar(props){
    const {user, saludarFn} = props
    const {name} = user
    console.log(props);
    return (
        <button onClick={()=>saludarFn(name)}>Saludar
        </button>
    )
}