import EditButton from "../atom/ImageButton";
import {ReactComponent as Save} from "../../../img/icon/save.svg";
import {ReactComponent as Cancel} from "../../../img/icon/cancel.svg";

function onClickDefault() {
    return;
}

export default function SaveConfirmButtons({
    onClick=onClickDefault,
    setIsCancel=((value:boolean)=>{})
}) {
    function onClickCancel() {
        setIsCancel(true)
    }

    return (
        <div className='buttonArea'>
            <EditButton 
                className="smallButton grayButton" 
                onClick={onClickCancel}
                ImageComponent={Cancel}
                text="Cancel"
            />
            <EditButton 
                className="smallButton button" 
                onClick={onClick}
                ImageComponent={Save}
                text="Save"
            />
        </div>
    );
}