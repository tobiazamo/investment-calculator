export function InputElement({label, value, onChange}) {
    return (
        <>
            <p>
                <label>{label}</label>
                <input type={"number"} value={value} onChange={onChange} required />
            </p>
        </>
    )
}