
import './link.scss';

const Button = ({ link , text , icon }) => {
  return (
    <a className='btn' href={link} target="_blank" rel="noopener noreferrer" >
        {icon}
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </a>
  )
}

export default Button