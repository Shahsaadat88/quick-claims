const claimRow = (props) => {

    return (
        <tr>
            <td>{props.policyNumber}</td>
            <td>{props.C}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>{props.title}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.dob}</td>
            <td>{props.description}</td>
        </tr>
    )
}

export default claimRow;