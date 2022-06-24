import ImageButton from '../atom/ImageButton';
import LogoImage from '../atom/LogoImage';
import TextList from './MenuItemList';
import { ReactComponent as Edit } from '../../../img/icon/edit.svg';
import { ReactComponent as Done } from '../../../img/icon/done.svg';
import { ReactComponent as Add } from '../../../img/icon/+.svg';


export default function SideMenu({
    items=[],
    checkCurrentEdit=((menuName:string) =>{return false}),
    setCurrentEdit=((menuName:string)=>{}),
    setIsLoaded=((value:boolean)=>{}),
    selectItem=((index:number)=>{}),
    activeItemIndex=-1
}) {
    const menuName = "Side"

    function onClick() {
        if(checkCurrentEdit(menuName)) {
            setCurrentEdit("")
        } else {
            setCurrentEdit(menuName)
        }
    }

    const postRequestParam = {
        title: "タイトル",
        body: "コンテンツ"
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postRequestParam)
    }

    function addItem() {
        fetch("http://localhost:3000/content", requestOptions)
        setIsLoaded(false)
    }

    return (
        <>
            <LogoImage />
            <TextList 
                items={items}
                activeItemIndex={activeItemIndex}
                selectItem={selectItem}
                setIsLoaded={setIsLoaded}
            />
            <div className='footer itemEdit'>
                <ImageButton 
                    text='Add'  
                    isVisible={checkCurrentEdit(menuName)} 
                    ImageComponent={Add} 
                    className="frameButton"
                    onClick={addItem}
                />
                <ImageButton
                    text={checkCurrentEdit(menuName) ? 'Done' : 'Edit'} 
                    onClick={onClick} 
                    ImageComponent={checkCurrentEdit(menuName) ? Done : Edit}
                />
            </div>
        </>
    );
}