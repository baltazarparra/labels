import db from './firebase'

const database = {
  listenUserNode: (user) => {
    return db.ref(`/${user}/`).once('value')
  },
  listenRepoNode: (user) => {
    return db.ref(`/${user}/starred`).once('value')
  },
  setRepoNode: (user, list) => {
    return db.ref(`/${user}/starred`).set(list)
  },
  updateTagsNode: (user, index, list) => {
    return db.ref(`/${user}/starred/${index}`).update({
      tags: list
    })
  }
}

export default database
