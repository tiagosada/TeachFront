import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useToggle } from 'react-use'
import CheckPresence from '../../ui/Checkbox'
import { Student } from '/api'

type RowProps = {
  student: Student
}
type TableProps = {
  students: Student[]
}

// CallTable
const Row = ({ student }: RowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      <td style={{ display: 'flex', margin: '4px' }}>
        <label style={{ margin: '4px' }}>Presença</label>
      </td>
      <td>
        
      </td>
    </tr>
  )
}

export const ClassCallTableStudent = ({ students }: TableProps) => {
  // const [presences, setPresences] = useState<Presence>()

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
            <th className="w-25">Chamada</th>
            <th className="w-25">Falta Justificada</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <Row student={item} key={item.registration} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ClassCallTableStudent
