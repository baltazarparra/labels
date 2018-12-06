import React from 'react'
import Header from './Header/Header'
import SearchTag from './Header/SearchTag'
import Main from './Main/Main'
import Loading from './Main/Loading'
import Table from './Main/Table'
import Modal from './Main/Modal'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

const AppContent = ({
    loading,
    loaded,
    taging,
    username,
    userNotFound,
    starredList,
    getUsername,
    handleSearch,
    openModal,
    closeModal,
    repoInfo,
    saveTags,
    getTags}) => (
  <Wraper>
    <Header />
    {!loading && !loaded &&
    <Main
      username={username}
      userNotFound={userNotFound}
      getUsername={getUsername}
      handleSearch={handleSearch}
    />}
    {loading && !loaded && <Loading />}
    {loaded && <Table starredList={starredList} openModal={openModal} />}
    {loaded && <SearchTag />}
    {taging && <Modal closeModal={closeModal} repoInfo={repoInfo} saveTags={saveTags} getTags={getTags} />}
  </Wraper>
)

AppContent.Proptypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  taging: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  userNotFound: PropTypes.bool.isRequired,
  getUsername: PropTypes.func.isRequired,
  starredList: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  repoInfo: PropTypes.object.isRequired,
  saveTags: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired
}

export default AppContent
