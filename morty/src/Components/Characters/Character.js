import React from 'react'

/*
passing down a prop called item as an argument 

*/

export const Character = ({item}) => {

    const {name,status,LastKnownLocation,Firstseenin} = item

  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
      <td>{LastKnownLocation}</td>
      <td>{Firstseenin}</td>
    </tr>
  )
}
