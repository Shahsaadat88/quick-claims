import ClaimSearch from "../ClaimSearch";
import ClaimTable from "./ClaimTable";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindClaimPage = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.policyNumber !== props.searchTerm) {
        props.setSearchTerm(params.policyNumber);
    }
} , [params.policyNumber]);

return (
    <>
        <Search setSearchTerm={props.setSearchTerm} />
        <ClaimTable searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindClaimPage;