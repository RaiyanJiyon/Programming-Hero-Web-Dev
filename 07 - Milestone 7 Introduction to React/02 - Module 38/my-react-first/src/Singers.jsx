export default function Singers({name, city}) {
    const styles = {
        border: '2px solid hotpink',
        padding: '5px',
        marginTop: '10px'
    }
    return (
        <div style={styles}>
            <h5>Singer Name: {name}</h5>
            <p>Singer City: {city}</p>
        </div>
    )
}