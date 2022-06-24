export default function BodyForm({
    text="",
    setText=((value:string)=>{}),
    isActive=false
}) {
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
    }
    return (
        <textarea 
            className={"body body_font textForm body_font"}
            value={text}
            onChange={handleChange}
            disabled={!isActive}
        />
    )
}