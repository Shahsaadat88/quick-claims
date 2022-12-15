import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddClaim from './components/AddClaim/AddClaim';
import ClaimMenu from './components/ClaimMenu';
import ClaimSearch from './components/ClaimSearch';
import FindClaimPage from './components/Claims/FindClaimPage';
import ClaimTable from './components/Claims/ClaimTable';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <ClaimMenu />
      <Routes>
        <Route path="/add" element = {<AddClaim />} />
        <Route path="/find" element = {
          <FindClaimPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/find/:claimNumber" element = {
          <FindClaimPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/" element = { <h1>Welcome to the Claims Page</h1>}/>
        <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
