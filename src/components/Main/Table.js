import React from 'react'
import styled from 'styled-components'

const TableData = styled.table`
  tr:first-child {
    background-color: #ccc;
  }
  tr:nth-child(even) {
    background-color: #ebebeb;
  }
  th {
    padding: .4em;
  }
`

const Table = () => (
  <TableData>
    <tbody>
      <tr>
        <th>Repository</th>
        <th>Description</th>
        <th>Language</th>
        <th>Tags</th>
        <th></th>
      </tr>
      <tr>
        <td>
          <a href="/">jest</a>
        </td>
        <td>Delighful Javascripting Testing.</td>
        <td>Javascript</td>
        <td></td>
        <td>
          <a href="/">edit</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/">jest</a>
        </td>
        <td>Delighful Javascripting Testing.</td>
        <td>Javascript</td>
        <td></td>
        <td>
          <a href="/">edit</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/">jest</a>
        </td>
        <td>Delighful Javascripting Testing.</td>
        <td>Javascript</td>
        <td></td>
        <td>
          <a href="/">edit</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/">jest</a>
        </td>
        <td>Delighful Javascripting Testing.</td>
        <td>Javascript</td>
        <td></td>
        <td>
          <a href="/">edit</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/">jest</a>
        </td>
        <td>Delighful Javascripting Testing.</td>
        <td>Javascript</td>
        <td></td>
        <td>
          <a href="/">edit</a>
        </td>
      </tr>
    </tbody>
  </TableData>
)

export default Table
