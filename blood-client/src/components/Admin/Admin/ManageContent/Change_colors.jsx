import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { GlobalState } from '../../../../State/State'
import { useEffect } from 'react'

function Change_colors() {
    const colorInputs = [
        {
            lable: 'Card background Color',
            type: 'color',
            name: 'cardBg',
        },
        {
            lable: 'Card Text Color',
            type: 'color',
            name: 'cardText',
        },
        {
            lable: 'button bacakground Color',
            type: 'color',
            name: 'btnBg',
        },
        {
            lable: 'button text Color',
            type: 'color',
            name: 'btnText',
        },
        {
            lable: 'form bacakground Color',
            type: 'color',
            name: 'formBg',
        },
        {
            lable: 'form label Color',
            type: 'color',
            name: 'formText',
        },
        {
            lable: 'Genarel background Color',
            type: 'color',
            name: 'genarelBg',
        },
        {
            lable: 'Genarel Text Color',
            type: 'color',
            name: 'genarelText',
        },
    ]

    const { handleUpdateColorPalate, handleGetColors, colorPalate } = useContext(GlobalState)

    const [color, setColor] = useState({})

    const handleColorChange = (e) => {
        setColor({ ...color, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        handleGetColors()
    }, [])

    return (


        <div className='add_form'>
            <form onSubmit={(e) => handleUpdateColorPalate(e, color)}>
                {
                    colorInputs.map((cl, index) => <Colors
                        key={index}
                        color={cl}
                        handleColorChange={handleColorChange}
                    />)
                }
                <button type='submit' className='button button_blue my-4'>Change Colors</button>
            </form>
        </div>
    )
}

export default Change_colors


const Colors = (props) => {
    const { lable, type, name } = props.color
    return (
        <div className='w-2/4 m-auto'>
            <input onChange={props.handleColorChange} className='form-control mt-3 h-10' type={type} name={name} />
            <small>{lable}</small>
        </div>
    )
}