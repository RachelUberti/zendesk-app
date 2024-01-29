import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CustomerView from './pages/CustomerView'
import SearchView from './pages/SearchView'
import { calculateWindowHeight, getCrn } from './utils/zendesk'
import { fetchCustomerByCrn } from './utils/crm'
import { Company } from './types/company'
import Header, { Tab } from './components/Header'
import '@zendeskgarden/css-bedrock'
import './App.scss'

const App = () => {
  const [tab, setTab] = useState<Tab>(Tab.Customer) 
  const [customer, setCustomer] = useState<Company | undefined>()
  
  useEffect(() => {
    calculateWindowHeight()
  })
  
  useEffect(() => {
    getCustomerWithCrn()
  }, [])

  const handleTabChange = (tab: Tab) => {
    setTab(tab);
  }

  const getCustomerWithCrn = async () => {
    const crn = await getCrn()
    if (crn) {
      const customerCrn = await fetchCustomerByCrn(crn)
      setCustomer(customerCrn)
    }
  }

  return (
    <>
      <Header tab={tab} handleTabChange={handleTabChange} />
      {tab === Tab.Customer && customer && ( <CustomerView customer={customer} /> )}
      {tab === Tab.Search && ( <SearchView /> )}
      {tab === Tab.Upload && ( <></> )}
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))