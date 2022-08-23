const Chellenge = () => {
    const a = 5
    const b = 100

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <div>
                <button onClick={() => console.log(a + b)}>Clique para somar 5 + 100</button>
            </div>
        </div>
    )
}

export default Chellenge