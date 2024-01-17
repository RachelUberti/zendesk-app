import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Header from './components/Header'
import CustomerView from './pages/CustomerView'
import SearchView from './pages/SearchView'
import { calculateWindowHeight, getCrn } from './utils/zendesk'
import './App.scss'

const App = () => {
  const [tab, setTab] = useState("customer") 
  const [customer, setCustomer] = useState()
  
  useEffect(() => {
    calculateWindowHeight()
  })
  
  useEffect(() => {
    getCustomerWithCrn()
  }, [])

  const handleTabChange = (tab) => {
    setTab(tab);
  }

  const getCustomerWithCrn = async () => {
    const crn = await getCrn()
    if (crn) {
      // TODO: Move this to a new file in ./utils/hubspot.js
      const res = await axios.get(`http://localhost:8888/api/crn?crn=${crn}`)
      setCustomer(res.data)
    }
  }

  return (
    <>
      <Header />
      <button onClick={() => handleTabChange("search")}>Search</button>
      <button onClick={() => handleTabChange("customer")}>Customer</button>
      {tab === "customer" && customer && ( <CustomerView customer={customer} /> )}
      {tab === "search" && ( <SearchView /> )}
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))