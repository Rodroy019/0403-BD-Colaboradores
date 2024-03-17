import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alerta from './Alerta'
import React, { useState, useEffect } from 'react'
import { BaseColaboradores } from '../assets/js/BaseColaboradores'
import Formulario from './Formulario'

function Listado () {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [alerta, setAlerta] = useState(null)
  const [buscar, setBuscar] = useState('')
  const eliminarColaborador = (id) => {
    setListaColaboradores(listaColaboradores.filter(colaborador => colaborador.id !== id))
    setAlerta(<Alerta variant='danger' descripcion='¡El Colaborador a sido Eliminado exitosamente!' />)
  }
  const buscarColaborador = (event) => {
    setBuscar(event.target.value)
  }
  const agregarColaborador = (nuevoColaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
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
      <input type='text' placeholder='Buscar por Nombre' onChange={buscarColaborador} />
      <hr />
      <Table striped bordered responsive size='sm'>
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
          {listaColaboradores
            .filter((colaborador) => colaborador.nombre.toLowerCase().includes(buscar.toLowerCase()))
            .map((colaborador) => (
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
      <Formulario agregarColaborador={agregarColaborador} />
      {alerta}
    </div>
  )
}

export default Listado
