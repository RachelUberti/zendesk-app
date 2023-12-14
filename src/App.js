import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Tabs from "./components/Tabs";

const App = () => {
  const tabData = [
        { label: "Customer Details" },
        { label: "Search" },
  ];
  return (
    <>
      <Header />
      <Tabs tabs={tabData} />
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))