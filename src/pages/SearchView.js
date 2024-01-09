import React, { useState, useEffect } from 'react';
import { customerListData } from '../utils/data';
import { calculateWindowHeight } from '../utils/zendesk';

// TODO: Import and use lodash's debounce feature

const SearchView = () => {
  // useState will re-render this component when setSearchTerm is used which means 
  // searchTerm will now be a new value, and the filteredCustomers map will render
  // the filtered list of customers based on the searchTerm. The ('') after useState
  // is the default value of searchTerm on render, so an empty string in this case
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect is always ran on render if you do not specify a dependency, e.g.: 
  //
  // useEffect(() => {
  //   console.log('hello!')
  // })
  //
  // Notice the lack of an item at the end of the function, e.g. no [].
  //
  // When you add a depdendency, like we've done below, the function will only run if the 
  // value of searchTerm has changed. Using dependencies is super important as you can easily
  // get stuck in an infinite loop rendering if you have another useEffect which modifies the 
  // dependencies value again, forcing another re-render.
  //
  // useEffect is heavily relied on to do logic when the component renders
  useEffect(() => {
    calculateWindowHeight()
  }, [searchTerm]);

  // Function that runs when the rendered input changes, which will use useState
  // to update the searchTerm variable, and force a reload of the component
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the customer list based on the search term. We are only searching
  // by name here, in future we should be able to search by name or CRN
  const filteredCustomers = customerListData.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
    {filteredCustomers.map((customer, index) => (
      <div key={index}>
        <p>Name: {customer.name}</p>
        <p>CRN: {customer.crn}</p>
      </div>
    ))}
  </div>
  )
}

export default SearchView