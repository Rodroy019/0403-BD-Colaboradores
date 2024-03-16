import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alerta from './Alerta'
import { useState, useEffect } from 'react'
import { BaseColaboradores } from '../assets/js/BaseColaboradores'

function Listado () {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [alerta, setAlerta] = useState(null)
  function eliminarColaborador (id) {
    const nuevaLista = listaColaboradores.filter(colaborador => colaborador.id !== id)
    setListaColaboradores(nuevaLista)
    setAlerta(<Alerta variant='danger' descripcion='Colaborador eliminado exitosamente' />)
  }
  useEffect(() => {
    let timeout
    if (alerta) {
      timeout = setTimeout(() => {
        setAlerta(null)
      }, 5000)
    }
    return () => clearTimeout(timeout)
  }, [alerta])

  return (
    <div className='componentes'>
      <Table bordered responsive size='sm'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {listaColaboradores.map(colaborador => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td><Button variant='danger' onClick={() => eliminarColaborador(colaborador.id)}>x</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      {alerta}
    </div>

  )
}

export default Listado
