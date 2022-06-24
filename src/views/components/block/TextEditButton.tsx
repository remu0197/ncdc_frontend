import '../../css/button.css'
import EditButton from "../atom/ImageButton";

function onClickDefault() {
    return;
}

export default function TextEditButton({
    onClick=onClickDefault,
    setIsCancel=((value:boolean)=>{})
}) {
    return (
        <div className='buttonArea'>
            <EditButton onClick={onClick} text="Edit"/>
        </div>
    );
}