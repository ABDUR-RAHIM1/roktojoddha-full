
import register from "../images/process/registration.jpg"
import pre from "../images/process/pre.jpg"
import scaning from "../images/process/scaning.jpg"
import donation from "../images/process/donation.jpg"
import recovery from "../images/process/recovery.jpg"
import deperture from "../images/process/deperture.jpg"


export const processData = [
  {
    photo: register,
    step: "Registration",
    description: "Upon arriving at the blood donation center, you will first complete a simple registration. You'll provide personal details and confirm your eligibility to donate, ensuring that all donors meet necessary health and safety standards."
  },
  {
    photo: pre,
    step: "Pre-Donation Questionnaire",
    description: "After registration, you’ll fill out a questionnaire regarding your medical history and recent health conditions. This helps determine if you are eligible to donate blood safely."
  },
  {
    photo: scaning,
    step: "Health Screening",
    description: "Next, you'll undergo a brief health screening. A professional will check your blood pressure, pulse, hemoglobin levels, and other key health indicators to ensure that donating blood is safe for both you and the recipient."
  },
  {
    photo: donation,
    step: "Blood Donation",
    description: "Once cleared for donation, you’ll be seated comfortably while a trained professional collects about one pint of blood. The actual donation process usually takes 8-10 minutes and is overseen to ensure your safety."
  },
  {
    photo: recovery,
    step: "Refreshments & Recovery",
    description: "After the donation, you’ll be provided with snacks and refreshments to help restore your energy. You’ll relax for 10-15 minutes to make sure you're feeling well before leaving the center."
  },
  {
    photo: deperture,
    step: "Departure",
    description: "Once you've rested and feel fine, you’re free to leave the center. Make sure to stay hydrated and avoid heavy physical activities for the rest of the day. Thank you for your valuable contribution!"
  }
];
