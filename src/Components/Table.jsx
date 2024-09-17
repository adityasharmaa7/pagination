import React from 'react'
import './Table.css'
function Table({dataToDisplay}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                </tr>
            </thead>
            <tbody>
                {dataToDisplay.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
