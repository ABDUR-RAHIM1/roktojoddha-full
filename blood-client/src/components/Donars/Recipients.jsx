import React, { useEffect } from 'react'
import { useState } from 'react'
import Banner from '../utils/Banner'
import Recipient from './Recipient'
import LoadingSpinner from '../utils/Spinner'
import SelectField from '../utils/SelectField'
import { API } from '../../API/API'

const Recipients = () => {
  const [recipients, setRecipients] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("no");



  console.log("rr", recipients)

  useEffect(() => {
    const getData = async () => {
      search === "" && setIsLoading(true)
      const searchValue = encodeURIComponent(search || "")
      const API_KEY = `/users-register/users?search=${searchValue}`;
      try {
        const res = await fetch(API + API_KEY)
        const result = await res.json();
        setRecipients(result)
      } catch (error) {
        console.log(error)
        setError(error.massage)
      } finally {
        setIsLoading(false)
      }

    }

    getData()
  }, [search])


  if (isLoading) {
    return <LoadingSpinner />
  }

  if (recipients === null) {
    return <p>No recipients</p>
  }

  const statusFilter = recipients && recipients.filter(st => st.donationStatus === filter);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  const handleFilter = (e) => {
    const { value } = e.target;

    setFilter(value.toLowerCase())
  }

  return (
    <>
      <Banner path={"Recipients Lists"} /> {/* Assume you have a Banner component */}

      <div className='py-10 md:py-20 bg-gray-200'>
        <div className="px-5 md:px-10 flex items-center justify-between">


          <div className='w-[48%] bg-white pb-4 px-2 rounded-md'>
            <SelectField
              name="bloodGroup"
              label=""
              defaultOption={"Filter On Blood group"}
              options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
              handleChange={handleSearch}
            />
          </div>

          <div className='w-[48%]  bg-white pb-4 px-2 rounded-md'>
            <SelectField
              name="donationStatus"
              label=""
              defaultOption={"Filter On Status"}
              options={["yes", "no"]}
              handleChange={handleFilter}
            />
          </div>

        </div>

        <div className="wrap py-10 flex justify-center flex-wrap gap-5">
          {error ? (
            <h1 className='text-red-500 text-3xl text-center my-4'>{error}</h1>
          ) : recipients && recipients.length > 0 ? (
            statusFilter.map((recipient, index) => (
              <Recipient key={index} recipient={recipient} />
            ))
          ) : (
            <h1 className='text-red-500 text-3xl text-center my-4'>There is no Request! 😔</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipients