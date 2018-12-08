import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);

  form {
    display: flex;
    flex-direction: column;
    padding: .4em 1em;
    background-color: white;
    border-radius: 6px 4px 9px 4px/110px 95px 115px 5px;
    border:solid 4px #41403E;
    font-size: 1.4em;
    max-width: 90%;
  }

  input {
    display: block;
    width: 400px;
    max-width: 100%;
    border-radius: 6px 4px 9px 4px/110px 95px 115px 5px;
    border:solid 2px #41403E;
    margin: .4em 0;
    height: 30px;
    font-size: 1em;
    &:focus {
      outline: 0;
    }
  }

  span {
    margin: 0 auto;
  }

  button:first-child {
    background-color: #95bcf2;
  }

  button {
    margin: .4em 0;
    padding: .4rem 1rem;
    font-size: 1rem;
    border-radius: 6px 4px 9px 4px/110px 95px 115px 5px;
    border:solid 2px #41403E;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
    }
  }
`

const Modal = ({closeModal, repoInfo, saveTags, getTags}) => (
  <ModalWrapper>
    <form onSubmit={saveTags}>
      <label>
        edit tag for repositories {repoInfo.name}
        <input autoFocus onChange={getTags} />
      </label>
      <span>
        <button type="submit" onClick={saveTags}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </span>
    </form>
  </ModalWrapper>
)

Modal.Proptypes = {
  closeModal: PropTypes.func.isRequired,
  repoInfo: PropTypes.array.isRequired,
  saveTags: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired
}

export default Modal
