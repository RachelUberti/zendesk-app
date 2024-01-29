import { useState, useEffect } from 'react';
import { calculateWindowHeight } from '../utils/zendesk';
import { Field, MediaInput } from '@zendeskgarden/react-forms'
import { fetchCustomersBySearch } from '../utils/crm';
import { Company } from '../types/company';
import './SearchView.scss'

const darude = require('../assets/sandstorm.mp3')
const audio = new Audio(darude.default)

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Company[] | undefined>(undefined);
  const [darudeMode, setDarudeMode] = useState<boolean>(false);

  useEffect(() => {
    calculateWindowHeight()
  });

  // Long-running PaperCut joke for internally-built tools.
  // Please leave this easter egg be.
  useEffect(() => {
    if (searchTerm === 'darude' && !darudeMode) {
      setDarudeMode(true)
      audio.play()
    }
    return () => { 
      audio.pause() 
    }
  }, [searchTerm])

  const searchCustomers = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm) {
      const customerList = await fetchCustomersBySearch(searchTerm)
      setSearchResults(customerList)
    }
  }

  return (
    <div className='search'>
      <div className={!darudeMode ? 'search-field' : 'search-field darude-mode'}>
        <Field>
          <MediaInput
            isCompact 
            placeholder={'Search by name or CRN...'}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={searchCustomers}
            value={searchTerm}
            start={<img src="https://static.thenounproject.com/png/101791-200.png" />} 
          />
        </Field>
      </div>
      {searchResults && (
        <div className='search-results'>
          {searchResults.map((customer, index) => (
            <div className='search-row' key={index}>
              <p className='search-row-details'>{customer.name}</p>
              <p className='search-row-details'>{customer.crn}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchView