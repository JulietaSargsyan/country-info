import React from 'react';




function Result(props) {
    if(!props.country) {
        return <p className='error-msg'>Country doesn't exist!!!!</p>
    } else if(props.country === "null") {
        return <p></p>
    } else {
            return (
                

                <div className='result-container'>
                   <table>
                       <tbody>
                       <tr>
                           <th>name:</th>
                           <td>{props.country.name}</td>
                       </tr>
                       <tr>
                           <th>native:</th>
                           <td>{props.country.native}</td>
                       </tr>
                       <tr>
                           <th>capital:</th>
                           <td>{props.country.capital}</td>
                       </tr>
                       <tr>
                           <th>emoji:</th>
                           <td>{props.country.emoji}</td>
                       </tr>
                       <tr>
                           <th>currency:</th>
                           <td>{props.country.currency}</td>
                       </tr>
                       
                       </tbody>
                   </table>
                    
                </div>
            )
    }

        }





export default Result;

