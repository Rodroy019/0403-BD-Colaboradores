import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

function Alerta (props) {
  return (
    <>
      <Alert key={props.variant} variant={props.variant}>
        {props.descripcion}
      </Alert>
    </>
  )
}

export default Alerta

Alerta.propTypes = {
  variant: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
}
