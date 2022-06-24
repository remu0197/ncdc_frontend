export default function TitleForm({
    text="",
    setText=((value:string)=>{}),
    isActive=false
}) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
    return (
        <input
            className={"title title_font textForm title_font"}
            value={text}
            onChange={handleChange}
            disabled={!isActive}
        />
    )
}