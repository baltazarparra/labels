import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Loading from './Main/Loading'
import Table from './Main/Table'
import Modal from './Main/Modal'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const AppContent = ({loading, loaded, taging, handleSearch, openModal, closeModal}) => (
  <Wraper>
    <Header />
    {!loading && <Main handleSearch={handleSearch} />}
    {loading && !loaded && <Loading />}
    {loaded && <Table openModal={openModal} />}
    {taging && <Modal closeModal={closeModal} />}
  </Wraper>
)

AppContent.Proptypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired
}

export default AppContent
