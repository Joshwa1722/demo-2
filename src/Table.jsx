import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function TableData() {

  const [data, setData] = useState([])

  useEffect(() => {
    getApiData()
  }, [])

  const getApiData = async () => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    //   setData(res.data)
    // })
    const apiData = await axios('https://jsonplaceholder.typicode.com/users')
    setData(apiData.data)
  }

  return (
    <>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableData
