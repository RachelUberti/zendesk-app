import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import CustomerView from './pages/CustomerView'
import SearchView from './pages/SearchView'
import { calculateWindowHeight, getCrn } from './utils/zendesk'
import './App.scss'

const customerData = {
  crn: 'C-222222',
  name: "Rachel's Chip Shop",
  address: "123 Chippie Lane",
  city: "Red Rock",
  state: "Eggs",
  country: "Egg Country",
  product: "MF",
  reseller: "Big Kahuna",
  reseller_link: "/hubspot/link/"
}

const App = () => {
  const [tab, setTab] = useState("customer") 
  const [crn, setCrn] = useState()
  // Only run this if tab state changes as its a dependency
  // useEffect(() => {
  //   console.log('ouch')
  //   calculateWindowHeight()
  // }, [tab])

  // Only run this ONCE, on render, for as long as App is visible this will not run again
  // useEffect(() => {
  //   console.log('ouch')
  //   calculateWindowHeight()
  // }, [])
  
  useEffect(() => {
    calculateWindowHeight()
  })
  
  useEffect(() => {
    getCrn().then(async (crn) => setCrn(crn))
  }, [])

  const handleTabChange = (tab) => {
    setTab(tab);
  }

  return (
    <>
      <Header />
      <button onClick={() => handleTabChange("search")}>Search</button>
      <button onClick={() => handleTabChange("customer")}>Customer</button>
      {tab === "customer" && ( <CustomerView customer={customerData} /> )}
      {tab === "search" && ( <SearchView /> )}
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))