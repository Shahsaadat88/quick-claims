import ClaimRow from "./ClaimRow";
import './Claim.css';
import { useEffect, useState } from "react";

const ClaimTable = (props) => {

    const [claim, setClaim] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaimsForpolicyNumber(props.searchTerm)
                .then( response => {
                        setClaim(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("Please try again", error);
                })
        }

    }, [props.searchTerm]  );

    


   
    
    //debugger;
   
    

    }

return (<>
    {!isLoading && props.searchTerm === "" && <div className="ClaimsPolicyNumberSelector">
        Select policyNumber: <select onChange={changePolicyNumber} defaultValue={selectedPolicyNumber}>
            <option value="" disabled={true}> ---select---</option>
            {uniquePolicyNumbers.map (policyNumber => <option key={policyNumber} value={policyNumber}>{policyNumber}</option>)}
        </select>
    </div>}
    {isLoading && <p style={{textAlign:"center"}} >Please wait... loading</p>}
    {!isLoading &&
    <table className="ClaimTable">
        <thead>
            <tr>
                <th>Claim Number</th>
                <th>Policy Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
                        
            {   claim
                .filter (claim => props.searchTerm !== "" || claim.policyNumber === selectedPolicyNumber)
                .map( (claim, index) => {
                return <ClaimRow key={index} claimNumber={claim.claimNumber} policyNumber = {claim.policyNumber}
                 date={Calim.date} time = {claim.time} title={claim.title} firstName={claim.firstName} lastName={claim.lastName}
                dob={claim.dob} description={claim.description}   />
            }   )   } 

        </tbody>
    </table>
    }
    </>
)


export default ClaimTable;