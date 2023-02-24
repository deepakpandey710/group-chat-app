import {Component, useState} from 'react';
import './App.css';
import {Tab, Table} from 'react-bootstrap'
function App(){
  const students=[
    {name:"deepak",email:"deepak@test.com",contact:"888"},
    {name:"siddhu",email:"sddgek@test.com",contact:"248"},
    {name:"ritik",email:"dzdfs@test.com",contact:"348"}
  ]
  return(
    <div className='App'>
      <h1>Map function working</h1>
      <Table border='1' striped variant="dark">
      
        <tbody>
        <tr>
          <td>name</td>
          <td>email</td>
          <td>contact</td>
        </tr>
        {
          students.map((item,i)=>
            <tr key={i}>
              <td >{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  )
}

export default App;

