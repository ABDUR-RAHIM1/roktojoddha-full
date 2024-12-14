import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import Add_logo from './Add_logo'
import Change_colors from './Change_colors'
import Add_slider from '../Add_slider'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'

function Manage_content() {
    const { handleGetSlider, sliders, handleAddSlider, handleAddLogo,
        handleGetLogo, logo , isDelete } = useContext(GlobalState)
    useEffect(() => {
        handleGetSlider();
        handleGetLogo();
    }, [isDelete])

    return (
        <AdminDashboard>

            <div>
                <Add_slider handleAddSlider={handleAddSlider} sliders={sliders}/>
                <Add_logo handleAddLogo={handleAddLogo} logo={logo} />
                <Change_colors />
            </div>


        </AdminDashboard>
    )
}

export default Manage_content