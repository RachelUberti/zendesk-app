import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { calculateWindowHeight } from '../utils/zendesk';
import './SearchView.scss'

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    calculateWindowHeight()
  });

  const searchCustomers = async (event) => {
    if (event.key === 'Enter' && searchTerm) {
      const res = await axios.get('http://localhost:8888/api/customer-list')
      const filteredCustomers = res.data.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredCustomers)
    }
  }

  return (
    <div className='search'>
      <div className='search__field'>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={searchCustomers}
          className='search__input'
            />
      </div>
    {searchResults.map((customer, index) => (
      <div className='search__row' key={index}>
        <p className='search__row__paragraph'>Name: {customer.name}</p>
        <p className='search__row__paragraph'>CRN: {customer.crn}</p>
      </div>
    ))}
  </div>
  )
}

export default SearchView