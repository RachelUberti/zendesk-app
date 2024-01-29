import './Header.scss'

interface Header {
  tab: string,
  handleTabChange: (tab: Tab) => void
}

export enum Tab {
  Customer = "customer",
  Search = "search",
  Upload = "upload",
}

const Header = ({tab, handleTabChange}: Header) => {
  return (
    <div className="app-header">
      <button 
        className={tab === "search" ? "search-tab active" : "search-tab"}
        onClick={() => handleTabChange(Tab.Search)
      }>
        Search
      </button>  
      <button 
        className={tab === "customer" ? "customer-tab active" : "customer-tab"}
        onClick={() => handleTabChange(Tab.Customer)
      }>
        Customer
      </button>
      <button 
        className={tab === "upload" ? "upload-tab active" : "upload-tab"}
        onClick={() => handleTabChange(Tab.Upload)
      }>
        Uploads
      </button>
    </div>
  )
}

export default Header