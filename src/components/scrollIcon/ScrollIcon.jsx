
import scrollIcon from '../../images/scrollIcon.png'

const ScrollIcon = ({  forwardRef  }) => {
  return (
    <img src={scrollIcon} className='scrollIcon' alt="scroll icon"  ref={forwardRef}/>
  );
};

export default ScrollIcon;
