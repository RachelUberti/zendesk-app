import React from "react"
import Row from "../components/Row"
import './CustomerView.scss'

const customerData = {
  name: "Rachel's Chip Shop",
  address: "123 Chippie Lane",
  city: "Red Rock",
  state: "Eggs",
  country: "Egg Country",
  product: "MF",
  // Reseller needs to link to a HubSpot page
  reseller: "Big Kahuna",
  reseller_link: "/hubspot/link/"
}

const CustomerView = () => {

  return (
    <div className="customer-view">
      <Row name="Company Name" value={customerData.name} bold />
      <Row name="Address" value={customerData.address} bold />
      <Row name="City" value={customerData.city} bold />
      <Row name="State" value={customerData.state} bold />
      <Row name="Country" value={customerData.country} bold />
      <Row name="Product" value={customerData.product} bold />
      <Row name="Reseller" value={customerData.reseller} url={customerData.reseller_link} bold />
    </div>
  )
}

export default CustomerView