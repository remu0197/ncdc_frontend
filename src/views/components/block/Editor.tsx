import '../../css/button.css'
import TextEditor from './TextEditor';
import TextEditButton from './TextEditButton';
import SaveConfirmButtons from './SaveConfirmButtons';
import TitleForm from '../atom/TitleForm';
import BodyForm from '../atom/BodyForm';
import { useEffect, useState } from 'react';

export default function TextViewer({
    titleText="",
    bodyText="",
    setTitleText=((value:string)=>{}),
    setBodyText=((value:string)=>{}),
    checkCurrentEdit=((menuName:string)=>{return false}),
    setCurrentEdit=((menuName:string)=>{}),
    index=-1,
    setIsLoaded=((value:boolean)=>{})
}) {
    const [menuNameTitle, menuNameBody] = ["Title", "Body"]

    const [isCancel, setIsCancel] = useState(false)

    useEffect(() => {
        if(isCancel) {
            setCurrentEdit("")
            setIsCancel(false)
        }
    }, [isCancel])
    
    function onClick(menuName: string){
        if(index > 0) {
            setCurrentEdit(menuName)
        }
    }

    function onClickEditTitle() {
        onClick(menuNameTitle)
    }

    const onClickEditBody = () => {
        onClick(menuNameBody)
    }

    function saveInputData() {
        var requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: titleText,
                body: bodyText
            })
        }

        if(index > 0) {
            fetch("http://localhost:3000/content/" + index, requestOptions)
            setIsLoaded(false)
        }

        setCurrentEdit("")
    }

    return (
        <>
            <div className='viewer'>
                <TextEditor
                    editorClass='titleEditor' 
                    ButtonComponent={checkCurrentEdit(menuNameTitle) ? SaveConfirmButtons : TextEditButton}
                    onClick={checkCurrentEdit(menuNameTitle) ? saveInputData : onClickEditTitle}
                    text={titleText}
                    setText={setTitleText}
                    FormComponent={TitleForm}
                    setIsCancel={setIsCancel}
                    isActive={checkCurrentEdit(menuNameTitle)}
                />
                <TextEditor 
                    editorClass='bodyEditor' 
                    ButtonComponent={checkCurrentEdit(menuNameBody) ?  SaveConfirmButtons : TextEditButton}
                    onClick={checkCurrentEdit(menuNameBody) ? saveInputData: onClickEditBody}
                    text={bodyText}
                    setText={setBodyText}
                    FormComponent={BodyForm}
                    setIsCancel={setIsCancel}
                    isActive={checkCurrentEdit(menuNameBody)}
                />
            </div>
        </>
    );
}