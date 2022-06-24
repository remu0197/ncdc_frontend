import '../../css/button.css'
import {ReactComponent as Edit} from '../../../img/icon/edit.svg';

export default function ImageButton({ 
  isVisible=true,
  onClick=(()=>{}),
  text="Button",
  className="button",
  ImageComponent=Edit, 
}) {
  return (
    <button className={className} onClick={() => onClick()} style={{visibility: isVisible ? 'visible' : 'hidden'}}>
      <div>
        <ImageComponent className="image"/>
      </div>
      <div className='button_font'>
        {text}
      </div> 
    </button>
  )
}
