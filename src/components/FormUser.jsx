import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../styles/FormUser.css'

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])

  const submit = data => {
    if (infoUpdate) {
      // Update
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      // Create
      createUser('/users', data)
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div className={`modal__FormUser ${closeForm && 'close'}`} onClick={handleCloseForm}>
      <form className={`form ${closeForm && 'close'}`} onSubmit={handleSubmit(submit)} onClick={e => e.stopPropagation()}>
        <buttom className="form__close" onClick={handleCloseForm} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA0UlEQVRIS+1UwQ3DIAyMN+go7QbpCNmgI3SjZoRukBUySjagdxKpWmQDFkL5JBKKBObOd7aRofMnnfGHk6Do8LEWhRAeIjJbaeL8grMRMW8rxlRAcFx6Ya0AuKUAEXzB/hVrskhyBMxuB/gjScBXxN1BsGkqsjVIgajEA07CYpEVQN6jLdnMdzVFAgYmJNyqAq9SYBFohXfXQAFn5l+LakhcRWa3RAK1u1wKct2idVfToGl93jxo0f8n/rM1RE1PhSXZu181B17Q3/iToOhed4s+SZJmGeb9OTIAAAAASUVORK5CYII=" /></buttom>
        <h1 className='form__h1'>Create user</h1>
        <div className='form__div'>
          <input className='form__input' {...register('first_name')} type="text" id="first_name" required />
          <label className='form__label' htmlFor="first_name">First name</label>
        </div>
        <div className='form__div'>
          <input className='form__input' {...register('last_name')} type="text" id="last_name" required />
          <label className='form__label' htmlFor="last_name">Last name</label>
        </div>
        <div className='form__div'>
          <input className='form__input' {...register('email')} type="email" id="email" required />
          <label className='form__label' htmlFor="email">Email</label>
        </div>
        <div className='form__div'>
          <input className='form__input' {...register('password')} type="password" id="password" required />
          <label className='form__label' htmlFor="password">Password</label>
        </div>
        <div className='form__div'>
          <input className='form__input' {...register('birthday')} type="date" id="birthday" required />
          <label className='form__label birthday' htmlFor="birthday">Birthday</label>
        </div>
        <button className='form__button'>{infoUpdate ? 'Update' : 'Create'}</button>
      </form>
    </div>
  )
}

export default FormUser