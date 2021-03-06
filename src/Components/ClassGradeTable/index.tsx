import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from '../../ui/Buttons'
import Sider from '../../ui/Sider'
import { Student } from '/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type RowProps = {
  student: Student
}
type Grade = {
  name: string
}
type TableProps = {
  students: Student[]
}

// Temporary mock
const gradeslist: Grade[] = [
  {
    name: 'Prova Surpresa'
  },
  {
    name: 'Redação sobre Kant'
  }
]

const RowGrades = ({ student }: RowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      {gradeslist.map(item => (
        <td key={item.name}><input type="number" style={{ marginTop: '8px' }} /></td>))}
    </tr>
  )
}

const ClassGradeTable = ({ students }: TableProps) => {
  const [showSider, setShowSider] = useState(false)
  const [newGrade, setNewgrade] = useState('')
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="w-25" >Matricula</th>
              <th className="w-100">Nome</th>
              {gradeslist.map((item, index) => (
                <th className="w-25" key={index}>{item.name}</th>
              ))}
              <th>
                <FontAwesomeIcon
                  icon={faPlus}
                  color='black'
                  onClick={() => setShowSider(true)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map(item => (
              <RowGrades student={item} key={item.registration} />
            ))}
          </tbody>
        </Table>
        <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
          <input
            type='text'
            name='gradeName'
            placeholder='Nova Avaliação'
            value={newGrade}
            onChange={e => setNewgrade(e.target.value)}
          />
          <Button type="button" color="primary" onClick={() => setShowSider(true)}>Adicionar Avaliação</Button>
        </Sider>
      </div>
    </>
  )
}
export default ClassGradeTable
