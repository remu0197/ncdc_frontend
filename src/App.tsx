import './App.css';
import SideMenu from './views/components/block/SideMenu';
import Footer from './views/components/atom/Footer';
import Editor from './views/components/block/Editor';
import { useEffect, useState } from 'react';


function App() {
	var [items, setItems] = useState([])
  	const [activeItemIndex, setActiveItemIndex] = useState(-1)
  	const [currentEdit, setCurrentEdit] = useState("")
  	const [isLoaded, setIsLoaded] = useState(false)
  	const [titleText, setTitleText] = useState("")
  	const [bodyText, setBodyText] = useState("")

  	function checkCurrentEdit(menuName:string) {
    	return currentEdit == menuName;
  	}

  	function selectItem(index:number){
    	setActiveItemIndex(index)

    	if(currentEdit != "Side") {
      		setCurrentEdit("")
    	}

    	items.map((item) => {
      	if(item["id"] == index+1) {
        	setTitleText(item["title"])
        	setBodyText(item["body"])
      	}
    	})
  	}

  	//初回レンダー時に実行
  	useEffect(() => {
    	fetch("http://localhost:3000/content") //api
    	.then(res => res.json()) 
    	.then(json => {
        	setItems(json);
      	});

    	setIsLoaded(true)
  	}, [isLoaded])

  	return (
    	<div className='content'>
      		<div className='side'>
        		<SideMenu 
          			items={items}
          			checkCurrentEdit={checkCurrentEdit}
          			setCurrentEdit={setCurrentEdit}
          			setIsLoaded={setIsLoaded}
          			selectItem={selectItem}
          			activeItemIndex={activeItemIndex}
        		/>
      		</div>
      		<div className='editor'>
        		<Editor
          			titleText={titleText}
          			bodyText={bodyText}
          			setTitleText={setTitleText}
          			setBodyText={setBodyText}
          			checkCurrentEdit={checkCurrentEdit}
          			setCurrentEdit={setCurrentEdit}
          			index={activeItemIndex+1}
          			setIsLoaded={setIsLoaded}
        		/>
        		<Footer/>
      		</div>
    	</div>
  	);
}

export default App;
