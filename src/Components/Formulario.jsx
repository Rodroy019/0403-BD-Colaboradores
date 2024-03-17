import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Alerta from './Alerta'
import { BaseColaboradores } from '../assets/js/BaseColaboradores'

const Formulario = (props) => {
  const [form, setForm] = useState({ nombre: '', correo: '', edad: '', cargo: '', telefono: '' })
  const [alerta, setAlerta] = useState(null)
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  function enviarFormulario (e) {
    e.preventDefault()
    if (form.nombre === '' || form.correo === '' || form.edad === '' || form.cargo === '' || form.telefono === '') {
      setAlerta(<Alerta variant='warning' descripcion='Por favor, completa todos los campos antes de continuar.' />)
      return
    }
    const nuevoColaborador = { id: listaColaboradores.length + 1, nombre: form.nombre, correo: form.correo, edad: form.edad, cargo: form.cargo, telefono: form.telefono }
    const listaActualizada = [...listaColaboradores, nuevoColaborador]
    setListaColaboradores(listaActualizada)
    props.agregarColaborador(nuevoColaborador)
    setForm({ nombre: '', correo: '', edad: '', cargo: '', telefono: '' })
    setAlerta(<Alerta variant='success' descripcion='¡El Colaborador a sido Agregado exitosamente!' />)
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
    <>
      <div className='componentes'>
        <form onSubmit={enviarFormulario}>
          <h2>Agregar Colaborador</h2>
          <input
            type='text'
            placeholder='Nombre'
            value={form.nombre}
            onChange={e => {
              setForm({
                ...form,
                nombre: e.target.value
              })
            }}
          />
          <input
            type='email'
            placeholder='Correo'
            value={form.correo}
            onChange={e => {
              setForm({
                ...form,
                correo: e.target.value
              })
            }}
          />
          <input
            type='number'
            placeholder='Edad'
            value={form.edad}
            onChange={e => {
              setForm({
                ...form,
                edad: e.target.value
              })
            }}
          />
          <input
            type='text'
            placeholder='Cargo'
            value={form.cargo}
            onChange={e => {
              setForm({
                ...form,
                cargo: e.target.value
              })
            }}
          />
          <input
            type='text'
            placeholder='Telefono'
            value={form.telefono}
            onChange={e => {
              setForm({
                ...form,
                telefono: e.target.value
              })
            }}
          />
          <Button variant='info' type='submit'>Agregar Colaborador</Button>
          {alerta}
        </form>
      </div>
    </>
  )
}

export default Formulario
