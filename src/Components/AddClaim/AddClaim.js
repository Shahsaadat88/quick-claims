
import { useReducer, useState } from 'react'
import './AddClaim.css'
import TimePicker from 'react-time-picker'
const AddClaim = () => {

    const initialNewClaimState = {policyNumber : "", 
    date : new Date().toISOString().slice(0,10) , time:"" , title : "",
    firstName: "", lastName: "",
    dob: new Date().toISOString().slice(0,10), description:""}

    const UploadImage = () => {
        const [selectedImage, setSelectedImage] = useState(null);
    }

    const formReducer = (state, data) => {
        return {...state, [data.feild] : data.value}
    }
    const [saveClaimResponse, setSaveClaimResponse] = useState([]);
    const saveClaim = (abc) => {
      addNewClaim(abc)
      .then ( response => {
          if (response.status === 200) {
            setSaveClaimResponse(response.data);
              setIsLoading(false);
          }
          else {
              console.log("something went wrong");
          }
      })
      .catch ( error => {
          console.log("something went wrong", error)
      })
  }



    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

    const handleChange = (event) => {
        dispatch ({field:event.target.id, value:event.target.value});
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setMessage("Saving...");
      addNewClaim(newClaim)
          .then( response => {
              if (response.status === 200) {
                  setMessage("New Claim added with id " + response.data.id);
              }
              else {
                  setMessage("Something went wrong - status code was " + response.status);
              }
              
          } )
          .catch( error => {
              setMessage("Something went wrong - " + error);
          })
  } 

    return(
    <form className="addClaimForm"> 
      <h1>New Claim</h1>
      <h3>*Please make sure all the required fields are Populated</h3>
      <label htmlFor="policyNumber">Policy Number*</label>
      <input type="text" required="required" id="policyNumber" value={newClaim.policyNumber} onChange= {handleChange}/>
      <br/>
      <label htmlFor="date">Date of the Event*</label>
      <input type="date" required="required" id="date" value={newClaim.date} onChange= {handleChange}/>
      <br/>
      <label htmlFor="date">Estimate time of the Event*</label>
      <TimePicker onChange={onChange} value={value} />
      <br/> 
      <label htmlFor="title">Title</label>
      <select name="title" id="title" value={newClaim.title} onChange= {handleChange}>
            <option value="Mr">Mr</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Mx">Mx</option>
            <option value="Dr">Dr</option>
      </select>
      <br/>
      <label htmlFor="firstName">First Name</label>
      <input type="text" required="required" id="firstName" value={newClaim.firstName} onChange= {handleChange}/>
      <br/>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" required="required" id="lastName" value={newClaim.lastName} onChange= {handleChange}/>
      <br/>
      <label htmlFor="dob">Date of Birth</label>
      <input type="date" required="required" id="dob" value={newClaim.dob} onChange= {handleChange}/>
      <br/>
      <label htmlFor="description">Please describe reason for Claim</label>
      <br/>
      <textarea  required="required" id="description" value={newClaim.description} onChange= {handleChange}/>
      <br/>
      <button type="submit">Save</button>
      <div>message goes here based on a stateful variable</div>
</form>
)} 
export default AddClaim;