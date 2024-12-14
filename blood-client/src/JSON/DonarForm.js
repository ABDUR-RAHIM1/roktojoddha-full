export const DonarformFields = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your full name',
        required: true,
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email address',
        required: true,
    },
    {
        name: 'contactNumber',
        label: 'Contact Number',
        type: 'tel',
        placeholder: 'Enter your contact number',
        required: true,
    },
    {
        name: 'dob',
        label: 'Date of Birth',
        type: 'date',
        required: true,
    },
    {
        name: 'donationDate',
        label: 'Donation Date',
        type: 'date',
        required: true,
    },
    {
        name: 'donationTime',
        label: 'Donation Time',
        type: 'time',
        required: true,
    },
    {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female', 'Other'],
        required: true,
    },
    {
        name: 'bloodGroup',
        label: 'Blood Group',
        type: 'select',
        options: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        required: true,
    },
    {
        name: 'weight',
        label: 'Weight (kg)',
        type: 'number',
        placeholder: 'Enter your weight in kilograms',
        required: true,
    },
    {
        name: 'emergencyContact',
        label: 'Emergency Contact',
        type: 'tel',
        placeholder: 'Enter emergency contact number',
        required: true,
    },
    {
        name: 'relationshipContact',
        label: 'Relationship with Emergency Contact',
        type: 'tel',
        placeholder: 'Enter relationship with emergency contact',
        required: true,
    },
    {
        name: 'beforeDonation',
        label: 'How much do you donate?',
        type: 'text',
        required: true,
        placeholder: "YES / NO"
    },
    {
        name: 'profilePic',
        label: 'Upload Your Image',
        type: 'file', 
    },
    {
        name: 'message',
        label: 'any prerequisite?',
        type: 'textarea',
        placeholder: 'Enter your message (optional)',
    },

];



// export const DoanrloginFormFields = [

//     {
//         name: 'username',
//         label: 'Username',
//         type: 'text',
//         placeholder: 'Enter your username',
//         required: true,
//     },
//     {
//         name: 'email',
//         label: 'Password',
//         type: 'password',
//         placeholder: 'Enter your password',
//         required: true,
//     },
//     {
//         name: 'gender',
//         label: 'Gender',
//         type: 'text',
//         placeholder: 'Enter your Gender',
//         required: true,
//     },
//     {
//         name: 'password',
//         label: 'Password',
//         type: 'password',
//         placeholder: 'Enter your password',
//         required: true,
//     },
// ];
