import '../../css/button.css'
import '../../css/editor.css'
import TextEditButton from "./TextEditButton";
import TitleForm from "../atom/TitleForm";

function onClickDefault() {
    return;
}

export default function TextEditor({
    editorClass="",  
    ButtonComponent=TextEditButton, 
    onClick=onClickDefault, 
    text="",
    setText=((value:string)=>{}),
    FormComponent=TitleForm,
    setIsCancel=((value: boolean)=>{}),
    isActive=false
}) {
    return (
        <div className={editorClass}>
            <FormComponent text={text} setText={setText} isActive={isActive}/>
            <div className="buttonArea">
                <ButtonComponent onClick={onClick} setIsCancel={setIsCancel}/>
            </div>
        </div>
    );
}
