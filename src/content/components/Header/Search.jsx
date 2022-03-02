// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
// ================================
// REDUCERS
import {overPageClose,searchSubmit} from '../../redux/reducers/overPageSlice';
// ================================
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// ================================

const Search = () => {

    const [ searchValue, setSearchValue ] = useState(''); // CREATE LOCAL STATE 
    const dispatch = useDispatch(); // DISPATCH

    // SAVE SEARCH VALUE IN LOCAL STATE
    const HandleSearchValue = e => {
      let value = e.target.value;
      setSearchValue(value);
    }
    // PASS LOCAL STATE VALUE TO STATE IN STORE
    const searchSubmitValue = e => {
      e.preventDefault();
      dispatch( searchSubmit({value:searchValue}) )
    }
    // CLOSE OVERPAGE SEARCH
    const HandleSearchClose = () => {
      dispatch( overPageClose() )
    }

    return(
      <div className='search'>
        <div className='container'>
            {/* CLOSE BUTTON */}
            <span className='close-icon' onClick={HandleSearchClose}>
                <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
            </span>
            {/* FORM SEARCH */}
            <form onSubmit={searchSubmitValue}>
              <input
                  id='search_id'
                  type='text'
                  className='input'
                  placeholder='Type Text here ...'
                  onChange={HandleSearchValue}
              />
            </form>

        </div>
      </div>
    )
  };
  export default Search;