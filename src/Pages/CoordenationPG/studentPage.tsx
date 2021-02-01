import React, { useState } from 'react'

import { DivTableRight } from '../../components/DivBox'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu, NavCoordStudentBottom } from '../../components/NavBars'
import ClassTable from '../../components/Tables'
import { NavTeacherList } from '../../components/NavBars/NavCoord'
import Modal from '/components/Modal'
import ProfileInfo from '/components/ProfileInfo'

export const MainPage = () => {

  const [showModal, setShowModal] = useState(false)


  return(
    <main>
      <header role="banner">
        <div style={{ padding: '0px 1px 50px 0px' }}>
          <Navbarmenu />
        </div>
        <div>
          <LoginTitle>Infem 204</LoginTitle>
        </div>
        <div>
          <Search color='secondary' placeholder='Search...' />
        </div>
        <DivTableRight color='primary'>
          <NavTeacherList color='secondary' />
          <ClassTable>
            <tr>
              <th className="w-25">Matrícula</th>
              <th className="w-100"> Nome</th>
              <th className="w-25">Notas/Boletim</th>
              <th className="w-25">Faltas</th>
            </tr>
            <tbody>
              <tr>
                <td>4544356651</td>
                <td><a onClick={() => setShowModal(true)}>Enzo Gabriel JR</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>

              <tr>
                <td>5444151142</td>
                <td><a href="/studentprofile">Tiago Sá da Costa</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5411542515</td>
                <td><a href="/studentprofile">Iago Bernardo Grah</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1544541151</td>
                <td><a href="/studentprofile">Ana </a></td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5544544484</td>
                <td><a href="/studentprofile">Maria </a></td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5211245514</td>
                <td><a href="/studentprofile">João </a></td>
                <td>9,0</td>
                <td>1</td>
              </tr>
            </tbody>
          </ClassTable>
          <Modal open={showModal}  onClose={() => setShowModal(false)}>
            <ProfileInfo/>
          </Modal>
          <NavCoordStudentBottom />
        </DivTableRight>
      </header>
    </main>
  )
}
export default MainPage
