import React from "react"
import Row from "../components/Row"
import './CustomerView.scss'

const CustomerView = ({ customer }) => {

  return (
    <div className="customer-view">
      <Row name="CRN" value={customer.crn} bold />
      <Row name="Company Name" value={customer.name} bold />
      <Row name="Address" value={customer.address} bold />
      <Row name="City" value={customer.city} bold />
      <Row name="State" value={customer.state} bold />
      <Row name="Country" value={customer.country} bold />
      <Row name="Product" value={customer.product} bold />
      <Row name="Reseller" value={customer.reseller} url={customer.reseller_link} bold />
    </div>
  )
}

export default CustomerView