import React from 'react'
import Inputs from '../utils/Inputs'
import { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import TextArea from '../utils/TextArea';
import Notification from '../utils/Notification';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectField from '../utils/SelectField';
import FileField from '../utils/FileField';
import { appoinmentInitialState } from '../../Data/formData/appoinmentForm';
import useFileUploader from '../../hooks/useFileUploader';
import Loading from '../utils/Loading';

function AppoinmentForm() {

  const state = useLocation().state;
  const navigate = useNavigate()
  const { token, postHandler, posting, editHandler, updating, message } = useContext(GlobalState);

  const [formData, setFormData] = useState(appoinmentInitialState);
  const { fileLoading, uploadFile } = useFileUploader()



  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const image = e.target.files[0];
      await uploadFile(image, setFormData);
    } else {

      setFormData({ ...formData, [name]: value })
    }
  }


  useEffect(() => {
    if (state) {
      setFormData(state)
    }
  }, [state]);


  const handleCreateAppoinment = (e) => {
    e.preventDefault();

    if (!token) {
      const res = window.confirm("Please Login First")
      if (res) {
        navigate("/auth")
      }

      return

    }

    const POST_API = "/users-register/register"
    postHandler(POST_API, formData);

  }

  const handleUpdateAppoinment = (e) => {

    e.preventDefault();
    const UPDATE_API = `/users-register/update/${state._id}`
    editHandler(UPDATE_API, formData);

  }

  const required = state ? false : true

  return (
    <>

      <form
        onSubmit={
          state ?
            handleUpdateAppoinment
            : handleCreateAppoinment
        }

      >

        <h1 className=' text-2xl md:text-3xl font-bold my-8'>
          {
            state ? "Update The Appointment" : "Request Appointment Here"
          }
        </h1>

        {
          state &&
          <SelectField
            label="Is Blood Donation Successful?"
            name="donationStatus"
            value={formData.donationStatus}
            required={required}
            handleChange={handleChange}
            defaultOption={"Donation Status"}
            options={["yes", "no"]}
          />}
        {/* Patient Name */}
        <Inputs
          type="text"
          name="patientName"
          value={formData.patientName}
          required={required}
          placeholder="Patient's Name"
          handleChange={handleChange}
          label="Enter Patient's Name"
        />

        {/* Patient Age */}
        <Inputs
          type="number"
          name="patientAge"
          value={formData.patientAge}
          required={required}
          placeholder="Patient's Age"
          handleChange={handleChange}
          label="Enter Patient's Age"
        />

        {/* Contact Number */}
        <Inputs
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          required={required}
          placeholder="Contact number"
          handleChange={handleChange}
          label="Enter Contact Number"
        />

        {/* Blood Group */}
        <SelectField
          label="Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          required={required}
          handleChange={handleChange}
          defaultOption={"Select Blood Group"}
          options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
        />

        {/* Problem Description */}
        <Inputs
          type="text"
          name="problem"
          value={formData.problem}
          required={required}
          placeholder="What is the problem?"
          handleChange={handleChange}
          label="Describe the Patient's Problem"
        />

        {/* How Many Bags of Blood */}
        <Inputs
          type="number"
          name="howMuch"
          value={formData.howMuch}
          required={required}
          placeholder="Number of Bags"
          handleChange={handleChange}
          label="How Many Bags of Blood?"
        />
        {/* Preferred Donation Date */}
        <Inputs
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          required={required}
          placeholder="Preferred Donation Date"
          handleChange={handleChange}
          label="When is the Preferred Donation Date?"
        />

        {/* Need Time */}
        <Inputs
          type="time"
          name="needTime"
          value={formData.needTime}
          required={required}
          placeholder="When Needed"
          handleChange={handleChange}
          label="What Time is the Blood Needed?"
        />

        {/* Where is the Blood Needed */}
        <Inputs
          type="text"
          name="location"
          value={formData.location}
          required={required}
          placeholder="Location Name"
          handleChange={handleChange}
          label="Where is the Blood Needed?"
        />



        {/* Hospital/Medical Center */}
        <Inputs
          type="text"
          name="hospital"
          value={formData.hospital}
          required={required}
          placeholder="Hospital Name"
          handleChange={handleChange}
          label="Hospital/Medical Center Name"
        />

        {/* Urgency Level */}
        <SelectField
          label="Urgency Level"
          name="urgency"
          value={formData.urgency}
          required={required}
          handleChange={handleChange}
          options={["Normal", "Urgent", "Critical"]}
        />

        {/* Doctor's Contact Information */}
        <Inputs
          type="text"
          name="doctorContact"
          value={formData.doctorContact}
          required={false}
          placeholder="Doctor's Contact Info"
          handleChange={handleChange}
          label="Doctor’s Contact Information (Optional)"
        />

        {/* Upload Patient Photo */}
        <FileField
          name="photo"
          label={fileLoading ? "Uploading . . ." : "Upload Patient Photo"}
          required={false}
          handleChange={handleChange}
        />

        {/* Additional Message */}
        <TextArea
          type="text"
          name="message"
          value={formData.message}
          required={required}
          placeholder="Message"
          handleChange={handleChange}
          label="Additional Information about the Patient's Condition"
        />



        {/* Submit Button */}
        <button disabled={fileLoading} className="w-full py-4 px-7 rounded-sm text-xl font-medium primaryBg2 hover:secondaryBg">
          {posting || updating ? <Loading /> : state ? "Update Now" : "Submit Now"}
        </button>

        {/* Notification for any messages */}
        {message && <Notification />}

      </form>



    </>
  )
}

export default AppoinmentForm