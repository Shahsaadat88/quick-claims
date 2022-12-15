import axios from "axios";

export const getAllClaims = () => {
    return [
        {claimNumber: 1100, policyNumber: 11111, date:"2022-07-02", time:"10:30 AM", title:"Mr.", firstName: "first1", lastName: "last1", dob: "1999-01-01", description:"Fire"},
        {claimNumber: 1101, policyNumber: 11112, date:"2022-03-31", time:"12:02 PM", title:"Ms.", firstName: "first2", lastName: "last2", dob: "1998-12-12", description:"Accident"},
        {claimNumber: 1102, policyNumber: 11113, date:"2022-04-10", time:"11:30 AM", title:"Dr.", firstName: "first3", lastName: "last3", dob: "1989-10-21", description:"Storm"},
        {claimNumber: 1103, policyNumber: 11113, date:"2022-06-02", time:"04:32 PM", title:"Dr.", firstName: "first3", lastName: "last3", dob: "1989-10-21", description:"Car Accident"},
        {claimNumber: 1104, policyNumber: 11114, date:"2022-01-07", time:"09:21 AM", title:"Mrs.", firstName: "first4", lastName: "last4", dob: "1987-02-09", description:"Storm"},
        {claimNumber: 1105, policyNumber: 11115, date:"2021-12-12", time:"05:15 PM", title:"Mrs.", firstName: "first4", lastName: "last4", dob: "1987-02-09", description:"Car Accident"},
        {claimNumber: 1106, policyNumber: 11111, date:"2022-08-20", time:"06:06 AM", title:"Mr.", firstName: "first1", lastName: "last1", dob: "1999-01-01", description:"Car Accident"},
        {claimNumber: 1107, policyNumber: 11112, date:"2022-11-11", time:"05:30 PM", title:"Ms.", firstName: "first2", lastName: "last2", dob: "1998-12-12", description:"Robbery"},
        {claimNumber: 1108, policyNumber: 11114, date:"2021-11-12", time:"01:21 PM", title:"Mrs.", firstName: "first4", lastName: "last4", dob: "1987-02-09", description:"Robbery"},
        {claimNumber: 1109, policyNumber: 11113, date:"2022-07-04", time:"07:45 PM", title:"Dr.", firstName: "first3", lastName: "last3", dob: "1989-10-21", description:"Fire"},
        {claimNumber: 1110, policyNumber: 11111, date:"2022-09-03", time:"02:00", title:"Mr.", firstName: "first1", lastName: "last1", dob: "1999-01-01", description:"Storm"}
    ]
}

const headers = new Headers({"Accept" : "application/json"})

export const getAllClaimssFetchVersion = () => { 
    return fetch ("http://localhost:8080/api/claims", 
         {
            method: "GET",
            headers : headers            
        }
    )
}

export const getAllClaimsAxiosVersion  = () => {
    return axios({url : "http://localhost:8080/api/claim",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForPolicyNumber  = (policyNumber) => {
    console.log("getallclaimsforpolicynumber")
    return axios({url : "http://localhost:8080/api/claim?policyNumber="+policyNumber,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForClaimNumber  = (claimNumber) => {
    return axios({url : "http://localhost:8080/api/claim?number="+claimNumber,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getPolicyNumbers = ()  => {
    console.log("getpolicyNumbers")
    return axios({url : "http://localhost:8080/api/policyNumber",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}
    
export const addNewClaim = (claim) => {
    return axios({url : "http://localhost:8080/api/claim",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}
