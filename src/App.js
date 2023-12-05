import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import CustomerView from './pages/CustomerView'
import SearchView from './pages/SearchView'

const App = () => {
  const [tab, setTab] = useState("customer") 
  
  const handleTabChange = () => {
    tab === "customer" ? setTab("search") : setTab("customer")
  }

  return (
    <>
      <Header />
      <button onClick={() => handleTabChange()}>{tab}</button>
      {tab === "customer" && ( <CustomerView /> )}
      {tab === "search" && ( <SearchView /> )}
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))