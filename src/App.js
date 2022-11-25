import List from "./Components/List"
import './App.css';
import { useState } from "react";
import TextField from "@mui/material/TextField";

function App() {
  const [inputPolicy, setInputPolicy] = useState("");
  let inputPolicyValue = (entryValue) =>{
    var entryValueLowerCase = entryValue.target.value.toLowerCase();
    statsetInputPolicy(entryValueLowerCase);
  }
  return (
    <div className="App-header">
      <h1>Policy Search</h1>
      <p>Please type in your 4 digit policy starting with 123</p>
        <div className="Policy-Search">
          <TextField policy="outlined-basic" onchange = {inputPolicyValue} Variant="outlined" fullWidth lable="Search" />
        </div>
        <List input={inputPolicy}/>
    </div>
  );
}

export default App;
