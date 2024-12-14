import React, { useEffect } from 'react'
import Donar from './Donar'
import LoadingSpinner from '../utils/Spinner'
import { useState } from 'react'
import Banner from '../utils/Banner'
import ErrorMessage from '../utils/ErrorMessage'
import SelectField from '../utils/SelectField'
import { API_ADDRESS } from '../../API/API'

function Donars() {

    const [donars, setDonars] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")



    useEffect(() => {
        const getData = async () => {
            search === "" && setIsLoading(true)
            const searchValue = encodeURIComponent(search || "")

            const API_KEY = `/donar-register/donars/?search=${searchValue}`;
            try {
                const res = await fetch(API_ADDRESS + API_KEY)
                const result = await res.json();
                setDonars(result)
            } catch (error) {
                console.log(error)
                setError(error.massage)
            } finally {
                setIsLoading(false)
            }

        }

        getData()
    }, [search])


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    if (isLoading) {
        return <LoadingSpinner />
    }
    return (

        <>
            <Banner path={"Donar Lists"} />


            {

                error ? (
                    <ErrorMessage message={error} />
                ) :
                    (
                        <div className=' px-5 md:px-10 py-10 md:py-20 bg-gray-200 overflow-hidden '>

                            <div className=' w-full md:w-[48%] m-auto bg-white pt-1 pb-4 px-2 rounded-md'>
                                <SelectField
                                    name="bloodGroup"
                                    label=""
                                    defaultOption={"Filter On Blood group"}
                                    options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
                                    handleChange={handleSearch}
                                />
                            </div>
                            <div className='py-10  flex justify-center flex-wrap gap-6'>
                                {donars && donars.length > 0 ? (
                                    donars.map(dr => (
                                        <Donar key={dr._id} donar={dr} />
                                    ))
                                ) : (
                                    <h1 className='text-red-500 text-3xl text-center my-4'>There is no donor ! 😔</h1>
                                )}
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Donars