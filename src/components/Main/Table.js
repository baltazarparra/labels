import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TableData = styled.table`
  display: block;
  max-width: 90%;
  margin: 3em 2em;
  table-layout: fixed;
  font-size: 1.4em;
  text-align: left;
  border-radius: 6px 4px 9px 4px/110px 95px 115px 5px;
  border:solid 4px #41403E;
  overflow-x: scroll;

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
    color: #0000cc;
    font-size: 1em;
    background: none;
    border: 0;
    text-decoration: underline;
    &:focus {
      outline: 0;
    }
  }
`

const Table = ({starredList, openModal}) => (
  <TableData>
    <tbody>
      <tr>
        <th>Repository</th>
        <th>Description</th>
        <th>Language</th>
        <th>Tags</th>
        <th></th>
      </tr>
      {starredList.map((repo, index) => (
        <tr key={index}>
          <td>
            <a href={repo.link}>{repo.name}</a>
          </td>
          <td>{repo.description}</td>
          <td>{repo.language}</td>
          <td>{repo.tags}</td>
          <td>
            <button onClick={openModal} title={repo.name} value={index}>edit</button>
          </td>
        </tr>
      ))}
    </tbody>
  </TableData>
)

Table.Proptypes = {
  openModal: PropTypes.func.isRequired,
  starredList: PropTypes.array.isRequired
}

export default Table
