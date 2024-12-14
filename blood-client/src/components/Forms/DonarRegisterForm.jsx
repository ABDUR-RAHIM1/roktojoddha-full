import React, { useContext, useEffect, useState } from 'react'
import Inputs from '../utils/Inputs'
import TextArea from '../utils/TextArea'
import { GlobalState } from '../../State/State'
import Loading from '../utils/Loading'
import { useLocation } from 'react-router-dom'
import SelectField from '../utils/SelectField'
import FileField from '../utils/FileField'
import useFileUploader from '../../hooks/useFileUploader'
import { initialRegisterFormState } from '../../Data/formData/registerForm'

function DonarRegisterForm() {
    const state = useLocation().state;

    const { postHandler, posting, editHandler, updating } = useContext(GlobalState);

    const { fileLoading, uploadFile } = useFileUploader();

    const [formData, setFormData] = useState(initialRegisterFormState);

    console.log(posting)
    const handleChange = async (e) => {
        const { name, value } = e.target;
        if (name === "photo") {
            const image = e.target.files[0];
            await uploadFile(image, setFormData);
            console.log("photo")
        } else {

            setFormData({ ...formData, [name]: value })
        }
    }

    let required;
    if (state) {
        required = false;
    } else {
        required = true
    }

    useEffect(() => {
        if (state) {
            setFormData(state)
        }
    }, [state])

    const handleAddRegister = (e) => {
        e.preventDefault();

        const POST_API = '/donar-register/register'
        postHandler(POST_API, formData)

    }
    const handleUpdateRegister = (e) => {
        e.preventDefault();
        const UPDATE_API = `/donar-register/update/${state._id}`
        editHandler(UPDATE_API, formData)
    }

    return (
        <form onSubmit={state ?
            handleUpdateRegister
            : handleAddRegister
        }
        >

            <h1 className=' text-3xl md:text-4xl font-bold my-8'>
                {
                    state ? "Update Information" : "Register as a Donar"
                }
            </h1>


            {/* Address */}
            <Inputs
                type='text'
                name='address'
                value={formData.address}
                required={required}
                placeholder='Address'
                label='Enter your Address'
                handleChange={handleChange}
            />

            {/* Contact Number */}
            <Inputs
                type='number'
                name='contactNumber'
                value={formData.contactNumber}
                required={required}
                placeholder='Enter your contact number'
                label='Contact Number'
                handleChange={handleChange}
            />

            {/* Emergency Contact */}
            <Inputs
                type='number'
                name='emergencyContact'
                value={formData.emergencyContact}
                required={required}
                placeholder='Emergency Contact'
                label='Enter emergency contact number'
                handleChange={handleChange}
            />

            {/* Relationship Contact */}
            <Inputs
                type='number'
                name='relationshipContact'
                value={formData.relationshipContact}
                placeholder='Relationship Emergency Contact'
                label='Relationship Emergency Contact'
                handleChange={handleChange}
            />

            {/* Date of Birth */}
            <Inputs
                type='date'
                name='dob'
                value={formData.dob}
                required={required}
                placeholder='Date Of Birth'
                label='Date of Birth'
                handleChange={handleChange}
            />


            {/* Gender */}
            <SelectField
                label="Gender"
                name="gender"
                value={formData.gender}
                required={true}
                handleChange={handleChange}
                options={["Male", "Female", "Others"]}
            />


            {/* Weight */}
            <Inputs
                type='number'
                name='weight'
                value={formData.weight}
                required={required}
                placeholder='Weight (kg)'
                label='Enter your weight in kilograms'
                handleChange={handleChange}
            />

            {/* Blood Group */}
            <SelectField
                label="Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup}
                required={true}
                handleChange={handleChange}
                defaultOption={"Select Your Blood Group"}
                options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
            />

            {/* Donation Date */}
            <Inputs
                type='date'
                name='donationDate'
                value={formData.donationDate}
                required={required}
                placeholder='Donation Date'
                label='Last Donation Date'
                handleChange={handleChange}
            />


            {/* Before Donation Count */}
            <Inputs
                type='number'
                name='beforeDonation'
                required={required}
                value={formData.beforeDonation}
                placeholder='(5) times'
                label='How many times have you donated?'
                handleChange={handleChange}
            />

            {/* Donation Location */}
            <Inputs
                type='text'
                name='donationLocation'
                value={formData.donationLocation}
                required={required}
                placeholder='Rangpur , lalmonirhat , aditmary'
                label='Enter your Donation Location'
                handleChange={handleChange}
            />

            {/* Medical Conditions */}
            <Inputs
                type='text'
                name='medicalCondition'
                value={formData.medicalCondition}
                required={false}
                placeholder='Medical Conditions'
                label='Enter any Medical Conditions (optional)'
                handleChange={handleChange}
            />

            {/* Allergies */}
            <Inputs
                type='text'
                name='allergies'
                value={formData.allergies}
                required={false}
                placeholder='Allergies'
                label='Enter any Allergies (optional)'
                handleChange={handleChange}
            />

            {/* Last Donation Location */}
            <Inputs
                type='text'
                name='lastDonationLocation'
                value={formData.lastDonationLocation}
                required={false}
                placeholder='Last Donation Location'
                label='Enter your Last Donation Location'
                handleChange={handleChange}
            />

            {/* Preferred Donation Time */}
            <Inputs
                type='time'
                name='preferredDonationTime'
                value={formData.preferredDonationTime}
                required={false}
                placeholder='Preferred Donation Time'
                label='Preferred Donation Time'
                handleChange={handleChange}
            />


            {/* Profile Picture */}
            <FileField
                name="photo"
                label={fileLoading ? "Uploading . . ." : "Upload Photo"}
                required={false}
                handleChange={handleChange}
            />

            {/* Message */}
            <TextArea
                type='textarea'
                name='message'
                value={formData.message}
                required={required}
                placeholder='Enter your message (optional)'
                label='Any prerequisites?'
                handleChange={handleChange}
            />

            {/* Submit Button */}
            <button disabled={fileLoading} className='w-full py-4 px-7 rounded-sm text-xl font-medium primaryBg hover:secondaryBg my-3 '>
                {posting || updating ? <Loading /> : state ? "Update Now" : "Submit Now"}
            </button>


        </form>

    )
}

export default DonarRegisterForm