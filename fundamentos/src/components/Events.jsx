const Events = ()=>{
    const handleEvent=(e)=>{
        console.log('Evento Acionado', e)
    }
    return (
        <div>
            <div>
                <button onClick={handleEvent}>Enviar</button>
            </div>
        </div>
    )
}

export default Events;