import {ReactComponent as Delete} from '../../../img/icon/delete.svg'

export default function MenuItem({
	title="",
	index=-1,
	setActive=((index:number)=>{}),
	isActive=false,
	setIsLoaded=((value: boolean)=>{})
}) {

	function onClick(){
		setActive(index=index);
  	}

	const requestOptions = {
    	method: 'DELETE',
 	}

  	function deleteItem() {
    	if(index > 0) {
      		fetch("http://localhost:3000/content/" + index, requestOptions)
      		setIsLoaded(false)
    	}
  	}

  	return (
    	<div className={isActive ? 'menuItem menuItemActive body_font' : 'menuItem'} onClick={onClick}>
      		{title}
      		<div className='image grayButton'  onClick={deleteItem}>
        		<Delete style={{visibility: {isActive} ? 'visible' : 'hidden'}}/>
      		</div>
    	</div>
  	)
}
