const Button = ({ link , text , icon , btnType , refer}) => {

 
  return (
    <a className={`btn ${btnType}`} href={link} target="_blank" rel="noopener noreferrer" aria-label={text} ref={refer}>
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