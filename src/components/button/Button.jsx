
const Button = ({ link , text  }) => {
  return (
    <a className='btn' href={link} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
  )
}

export default Button