import React,  {useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import Result from './Result';



const QUERY_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
        name
        native
        capital
        emoji
        currency
        languages {
        code
        name
        }
    }
  }
`;

function SearchBar() {
    const [value, setValue] = useState("");
    const [countryData, setCountryData] = useState("null");
    const gqlCode = useQuery(QUERY_COUNTRY, {
        variables: {code: value}
    }
    );


    function handleChange(e) {
        setValue(e.target.value.toUpperCase())
    }

    function handleClick() {
        setCountryData(gqlCode.data.country);
        console.log(countryData);
    }
    

    return (
        <>
        <div className='search-bar'>
             <input type='text' 
                  placeholder='Enter country code' 
                  maxLength='2' 
                  minLength='2'  
                  onChange={handleChange}/>
             <input type="submit" onClick={handleClick} />
           
        </div>
            <Result country={countryData} />
     </>
    )


}

export default SearchBar;
