
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const [infoUpdate, setInfoUpdate] = useState()

  const baseUrl = `https://users-crud-backend-dev-xfap.3.us-1.fl0.io`
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)
  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div className='container'>
      <div className="container__header">
        <h1 className='container__h1'>Users</h1>
        <button className='container__button' onClick={handleOpenForm}><img className='container__img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXElEQVRIS2NkoDFgpLH5DKMWEAxhkoLoPxCATGQEAoImQxUQrRCkftQCgsE6dIII5lKCXkJTgC11YU1FNLcAl8uHThyM+gA5BAZXWURqvgCXvORoIkXPqAUEQwsAVoQ4Gad6WJkAAAAASUVORK5CYII="/>Create new user</button>
      </div>
      <FormUser className='container__FormUser'
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='container__div'>
        {
          users?.map(user => (
            <UserCard className='container__UserCard'
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
