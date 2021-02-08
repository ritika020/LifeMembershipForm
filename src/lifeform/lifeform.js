import axios from "axios";

export const sendLifemembershipForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/LifeMembership", data,{
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};


// firstName : {
//     type : String
// },
// middleName : {
//     type : String
// },
// lastName : {
//     type : String
// },
// gender: {
//     type: String,
//     enum: {
//         values: ['male', 'female','other'],
//         message: 'gender is either male, female or other'
//     }
// },
// dateOfBirth: {
//     type: String
// },
// bloodGroup : {
//     type : String
// },
// contactNo : {
//     type : Number,
//     unique : true
// },
// alternateNumber : {
//     type : Number,
//     unique : true
// },
// address : {
//     type : String
// },
// qualification : {
//     type : String
// },
// examiningBody : {
//     type : String
// },
// yearOfPassing : {
//     type : Number
// },
// registrationNumber : {
//     type : Number
// },
// dateOfRegistration : {
//     type : String
// },
// nameOfBoard : {
//     type : String 
// },
// professionalStatus : {
//     practitioner : {
//         hospitalAttached : {
//             type : String
//         },
//         capacity : {
//             type : Number
//         }
//     },
//     medicalEduTeacher: {
//         nameOfInstitution : {
//             type : String
//         },
//         designation : {
//             type : String 
//         }
//     },
//     inService : {
//         designation : {
//             type : String
//         },
//         nameOfEmployee : {
//             type : String
//         }
//     },
//     researchWorker : {
//         designation : {
//             type : String
//         },
//         nameOfInstitution : {
//             type : String
//         }
//     }
// },
// paperPublished : {
//     type : String
// },
// titleOfPaper : [{
//     type : String
// }],
// nimaMemberBefore : {
//     type : String
// },
// branch : {
//     type : String
// },
// reasonForDiscontinue : {
//     type : String
// }