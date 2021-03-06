import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../ui/Buttons'
import { LoginInput } from './styles'
import { login } from '/api'

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ username, password })
      .then(() => history.push('/home'))
      .catch(() => alert('Login inválido'))
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <LoginInput
          type='text'
          placeholder='Login'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <LoginInput
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button color='primary'>{'Login'}</Button>
    </form>
  )
}
export default Form
