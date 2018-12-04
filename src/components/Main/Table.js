import React from 'react'
import styled from 'styled-components'

const TableData = styled.table`
  width: 100%;
  margin: 2em;
  table-layout: fixed;
  font-size: 1.4em;
  text-align: left;
  border-radius: 6px 4px 9px 4px/110px 95px 115px 5px;
  border:solid 4px #41403E;

  tr:first-child {
    background-color: #ccc;
  }

  tr:nth-child(even) {
    background-color: #ebebeb;
  }

  th {
    padding: .4em;
  }

  td {
    padding: .4em;
  }

  button {
    background-color: none;
  }
`

const Table = ({openModal}) => (
  <TableData>
    <tbody>
      <tr>
        <th>Repository</th>
        <th>Description</th>
        <th>Language</th>
        <th>Tags</th>
        <th> </th>
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
          <button onClick={openModal}>edit</button>
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
