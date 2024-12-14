import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Inputs from '../../utils/Inputs'
import ResetPassword from '../../utils/ResetPassword'
import Notification from '../../utils/Notification'
import Loading from '../../utils/Loading'
import uploadFile from '../../utils/UploadFile'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import loginImg2 from "../../../images/loginBg2.png"

function AdminLogin() {
    const navigate = useNavigate()
    const path = useLocation()
    const { handleRegisterAdmin, handleAdminLogin, isLoading, message } = useContext(GlobalState)
    const [register, setRegister] = useState({ profilePic: "" })
    const [isRegister, setIsRegister] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value })

    }
    const handleFileChange = async (e) => {
        const image = e.target.files[0];
        await uploadFile(image, setRegister, setImgLoading);

    }

    useEffect(() => {
        const isAdminToken = JSON.parse(localStorage.getItem('ADMIN_TOKEN'));
        if (isAdminToken) {
            setTimeout(() => {
                navigate("/admin")
            }, 1500);
        }
    }, [isLoading])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='login_page_bg w-full h-screen pt-10'>


            <div className="login_forms">

                <img className=' w-full md:w-48 h-52 md:h-400' src={loginImg2} alt="" />
                <div className="w-full md:w-48">
                    <form onSubmit={(e) =>
                        isRegister ?
                            handleRegisterAdmin(e, register)
                            :
                            handleAdminLogin(e, register)
                    }
                        className='form-w bg-gray-100 p-6'>
                        {isRegister &&
                            <>
                                <Inputs
                                    type='text'
                                    name='name'
                                    value={register.name}
                                    required={true}
                                    placeholder='Enter Your Name'
                                    lable='Enter Your Good Name'
                                    handleChange={handleChange}
                                />
                                <Inputs
                                    type='text'
                                    name='gender'
                                    value={register.gender}
                                    required={true}
                                    placeholder='Gender'
                                    lable='Your Gender'
                                    handleChange={handleChange}
                                />

                            </>

                        }

                        <Inputs
                            type='email'
                            name='email'
                            value={register.email}
                            required={true}
                            placeholder='Enter Your Email'
                            lable='Enter Your Email'
                            handleChange={handleChange}
                        />
                        <Inputs
                            type='password'
                            name='password'
                            value={register.password}
                            required={true}
                            placeholder='********'
                            lable='Enter Your Password'
                            handleChange={handleChange}
                        />

                        {isRegister &&
                            <>
                                <input onChange={handleFileChange} id='file' type="file" name='profilePic' className='form-control mt-3' />
                                {
                                    imgLoading ? <small className='mb-3 text-red-400'>Uploading Image</small>
                                        :
                                        <small className='mb-3 text-green-400'>Upload Your Profile Photo</small>
                                }

                                <br />
                            </>
                        }



                        <button className='button button_blue my-4'>
                            {isRegister ? 'Register' : isLoading ? <Loading size='sm' /> : 'Log-in'}
                        </button>

                        {path === "/admin-login" &&
                            <span onClick={() => setIsRegister(!isRegister)} className='loginText'>
                                {
                                    isRegister ? 'Log-in here' : `Don’t have an account yet ? Sign up `
                                }
                            </span>}

                        <p onClick={() => setIsReset(!isReset)} className='font-italic my-4 cursor-pointer text-center button bg-slate-200 text-red-800'>forgat password</p>


                        {message && <Notification />}
                    </form>
                    {
                        isReset && <ResetPassword role='admin' />
                    }
                </div>
            </div>
        </motion.div >
    )
}

export default AdminLogin