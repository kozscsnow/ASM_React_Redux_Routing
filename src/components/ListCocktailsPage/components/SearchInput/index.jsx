import React, { useState } from 'react';
import '../../../../App.css';
import './SearchInput.css';

function SearchInput(props) {
  console.log('render Search Input');
  const [inputValue, setInputValue] = useState('');

  const { onInputValueChange } = props;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (!onInputValueChange) return;
    onInputValueChange(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="searchInput">Find the Drink</label>
          <input
            type="text"
            className="form-control"
            name="searchInput"
            id="searchInput"
            value={inputValue}
            placeholder="Margarita"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
