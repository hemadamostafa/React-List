import PropTypes from 'prop-types'
import Button from './Button'


const header = (probs) => {

    const onClick = () => {
        console.log("Hello World")
    }
    
    return (
        <header className='header'>
            <h1>{probs.title}</h1>
            <Button onClick={onClick} color="green" text="add" />
        </header>
  )
}

Headers.PropTypes = {
    title:PropTypes.string.isRequired
}

Headers.defaultProbs = {
    title:"Task Tracker",
}

/*
const HeadingStyle = {
    color:"red",backgroundColor:"black"
}*/

export default header