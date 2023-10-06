const Challenge = () => {
    const a = 10;
    const b = 5;

    return (
        <div>
            <p>A: {a}<br/>B: {b}</p>
            <button onClick={() => console.log(a + b)}>Resultado da soma dos numeros acima</button>
        </div>
    )
}

export default Challenge;
