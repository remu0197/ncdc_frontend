import '../../css/block.css'
import MenuItem from '../atom/MenuItem';

export default function TextList({
	items=[],
	activeItemIndex=-1,
	selectItem=((index:number)=>{}),
	setIsLoaded=((value:boolean)=>{})
}) {
	function onClickItem(index=-1){
    	selectItem(index-1);
  	}

  	return (
    	<div className='listView'>
      		{items.map((item, index) => (
        	<MenuItem 
          		title={item["title"]} 
          		index={item["id"]}
          		setActive={onClickItem}
          		isActive={activeItemIndex == item["id"]-1}
          		setIsLoaded={setIsLoaded}
        	/>
      		))}
    	</div>
  	); 
}
