import React, {useState} from 'react'

const Foco = (props) => {

    const [estatus, setEstatus] = useState(false)

    const switchEstatus = () => {
        setEstatus(estatus => !estatus)
    }

    return (
        <div>
            <img src = {estatus ? "imagenes/focoOn.png" : "imagenes/focoOff.png"}
                onClick = {switchEstatus}
                alt = "foco" 
            />
            <p>
                {props.lugar}
            </p>
            
        </div>
    )
}

export default Foco