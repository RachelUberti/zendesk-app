import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import CustomerView from './pages/CustomerView'
import SearchView from './pages/SearchView'
import { calculateWindowHeight } from './utils/zendesk'

const App = () => {
  const [tab, setTab] = useState("customer") 

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
    console.log('ouch')
    calculateWindowHeight()
  })
  
  const handleTabChange = (tab) => {
    setTab(tab);
  }

  return (
    <>
      <Header />
      <button onClick={() => handleTabChange("search")}>Search</button>
      <button onClick={() => handleTabChange("customer")}>Customer</button>
      {tab === "customer" && ( <CustomerView /> )}
      {tab === "search" && ( <SearchView /> )}
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))