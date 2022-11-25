import data from "./PolicyDetail.json

function List(props) 
 {                           
    const filterData = data.filter((eachEntry) => {
        if (props.input === ""){
            return eachEntry;
        }
        else
        {
            return eachEntry.text.toLowerCase().includes(props.input)
        }
    })
    return
    (
        <ul>
            {filterData.map((item) => (
                <li key={item.policy}>{item.detail}</li>
            ))}
        </ul>
    )
     
}

    const filterData = data.filter(eachEntry) => 
    export default List