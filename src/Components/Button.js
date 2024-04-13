import PropTypes from 'prop-types'


const Button = ({color ,text, onClick}) => {

  return (
    <button onClick={onClick} className='btn btn-dark' style={{backgroundColor : color,}}>{text}</button>
  )
}

Button.defaultProbs = {
    text : "nothing",
    color : "black"
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired
}

export default Button