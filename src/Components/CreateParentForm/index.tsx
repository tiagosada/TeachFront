import React, { FormEvent, useState } from 'react'
import { CreateButton, Title } from './styles'
import { Label as InputLabel } from '../../ui/Label'
import { register } from '/api'
import Input from '/ui/Input'

type Props = {
  title: string
  buttonText: string
}
type Inputs = {
  type: string
  title: string
  value: string
  holder?: string
  set: React.Dispatch<React.SetStateAction<string>>
}

const CreateParentForm = ({ title, buttonText }: Props) => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [birthdate, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [registration, setRegistration] = useState('')

  const inputs: Inputs[] = [
    {
      type: 'text',
      title: 'name',
      value: name,
      holder: 'nome',
      set: setName
    },
    {
      type: 'text',
      title: 'CPF',
      value: cpf,
      holder: '00011100011',
      set: setCpf
    },
    {
      type: 'number',
      title: 'phonenumber',
      value: phonenumber,
      set: setPhonenumber
    },
    {
      type: 'date',
      title: 'birthdate',
      value: birthdate,
      set: setBirth
    },
    {
      type: 'text',
      title: 'email',
      value: email,
      holder: 'meuemail@email.com',
      set: setEmail
    },
    {
      type: 'text',
      title: 'matrícula',
      value: registration,
      holder: 'Matricula',
      set: setRegistration
    }
  ]

  const user = { name, cpf, phonenumber, birthdate, registration, email, role: 'Parent' }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(user)
      .then(() => alert('Parent Created'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <div>
        {inputs.map((item, index) =>
          (
              <section key={index}>
                <InputLabel>{item.title}</InputLabel>
                <Input
                  type={item.type}
                  name={item.title}
                  placeholder={item.holder}
                  value={item.value}
                  onChange={e => item.set(e.target.value)}
                />
              </section>
          )
        )}
      </div>
      <CreateButton type="submit">{buttonText}</CreateButton>
    </form>
  )
}

export default CreateParentForm