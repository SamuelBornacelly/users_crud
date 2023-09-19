import React from 'react'

const UserCard = ({ user, deleteUser, setInfoUpdate, setCloseForm }) => {

  const handleDelete = () => {
    deleteUser('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    setCloseForm(false)
  }

// <h3 className='article__h3'>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>

  return (
    <div className="container__UserCard">
      <article className='article'>
        <h3 className='article__h3'>{` ${user.first_name} ${user.last_name}`}</h3>
        <ul className='article__ul'>
          <li className='article__li'><span className='article__span span1'>Email </span><span className='article__span'>{user.email}</span></li>
          <li className='article__li'><span className='article__span span1'>Birthday </span><span className='article__span'><img className='article__img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABg0lEQVRIS+1WQU7CUBCdgUDqDm6AN5AbwA0wsUbrhiO4E3QBXRjrCm8gbIqxJnID6gnkBnoDu6wldJyf0gKl3wi0bvRvmnb+f2/em5mfImS8MGN8kBIcndzUMIc9AKwAkA0w0y3zaiISUrXrA4B8h2M1EUPyB4/Dy1FSsokEAXjumQ+XFofQyft+1VU+nYKnjPk7kyxFyT9MIkkkUDWDwaGBCHdewdUZkJVAEwhsQnpBQM4eJtOiWy9OlQ4RnLMaxzIvynEVEoLbD5E9A5RH/a7TaHZLBW/vLVCEjniST/Wnh7YdxBTeD2CZrTU8mYLXwIJZNfT9+MzoBZnyYiXWsFVfqofY/84E+1IF88Ldx73duMuEjUS6UCfORgrUU2PMb9wVqaxIzYJAM0jmY0jJxd94z68ScJdAJRWDuIW54NWVGswnVxR5NxIuMiANLLPdXyH4ic/f1UAWW5uDbUCCeUhugH+CqOn+lkW7DFw0YKF3a1209cDFBkxKkNJVEcFk/lfxBdo3+BnHmR0UAAAAAElFTkSuQmCC"/>{user.birthday}</span></li>
        </ul>
        <div className="article__buttons">
          <button className='article__button delete' onClick={handleDelete}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAuklEQVRIS2NkoDFgpLH5DHgt+P//vwHQAfOBGERjAweAgo2MjIwgGisgZMF+oC4HAr58ALRAkVwL/oM0Ag3A6hCgD/HKg/Xicx0hAwjJY1gA00BpxCP7GMUHNLcA5nJivI7sS3zqyY48qlqA7kJCfGTLifIBIQMpDqJRCzDyFalBMhoHBIsmioOIkA3kWHAfaKgCIYPR5C8AS1FDdD24cjKoFgNVlcRaAqoyFwItWECUBSS6HK9ymrcqANyozhkMW8PVAAAAAElFTkSuQmCC"/></button>
          <button className='article__button edit' onClick={handleEdit}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABFUlEQVRIS7WVgQ2CMBBF6QaOwAgyghvIBrqJTqIb4AbqBLKBjuAG+D8pSVtbuHLQpDFp6nt3xx2YYuVlVuYXakHXdRsEucUujTHXMGCVwMIvgO4tuMXvDqLvIJotCOAEczGTFoJKJYjAawAZ9d1KjkO5sjNIlcVGPJTrDMGJZ1mCsbKA9bHPwnsOYoGgLAyY8BrRU9YvkSAGJyR17rbqpEADn8xACx8VLAFPCpaCRwVLwlOCxunnvuUk3eJ2TrKLAOK75GXHvtLC/zKA4IBDjvsN8FoTeXTQACSckgc2p5EZ9W9IbG9CUyUJz71Bg+CNC2VwaTY8ViLWnwJCnywVM3E/INLIoyXK/bPk/uS7SAIZu7O64Acq7rIZlvpADQAAAABJRU5ErkJggg=="/></button>
        </div>
      </article>
    </div>
  )
}

export default UserCard