const Events = ()=>{
    const handleEvent=(e)=>{
        console.log('Evento Acionado', e)
    }
    return (
        <div>
            <div>
                <button onClick={handleEvent}>Enviar</button>
            </div>
            <div>
                <button onClick={()=>console.log('Não recomendado, mas se for simples da para usar')}>Função inline</button>
            </div>
        </div>
    )
}

export default Events;