import { Company } from "../types/company";
import { Button } from '@zendeskgarden/react-buttons';
import './CustomerView.scss'

interface CustomerView {
  customer: Company
}

const CustomerView = ({ customer }: CustomerView) => {
  return (
    <div className="customer-view">
      <div className="subscription-status">
        {customer.subscription_end_date > new Date() 
          ? <p className="active">SUBSCRIPTION ACTIVE</p> 
          : <p className="inactive">SUBSCRIPTION INACTIVE</p>
        }
      </div>
      <div className="header">
        <p><b>{customer.crn}</b></p>
        <p>{customer.name}</p>
      </div>
      <p className="row"><b>Address:</b> {customer.address}</p>
      <p className="row"><b>City:</b> {customer.city}</p>
      <p className="row"><b>State:</b> {customer.state}</p>
      <p className="row"><b>Country:</b> {customer.country}</p>
      <p className="row"><b>Product:</b> {customer.product}</p>
      <p className="row"><b>Reseller:</b> <a href={customer.reseller_link}>{customer.reseller}</a></p>
      <p className="row"><b>Subscription End Date:</b> {new Date(customer.subscription_end_date).toLocaleDateString()}</p>
      <div className="buttons">
        <Button isPrimary size='small'>Open in HubSpot</Button>
      </div>
    </div>
  )
}

export default CustomerView