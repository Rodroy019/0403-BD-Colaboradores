import Listado from './Components/Listado'
import Formulario from './Components/Formulario'
import { useState } from 'react'

function App () {
  const [listaColaboradores, setListaColaboradores] = useState([])

  return (
    <>
      <div className='container'>
        <Listado listaColaboradores={listaColaboradores} />
        <Formulario listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores} />
      </div>
    </>
  )
}

export default App
