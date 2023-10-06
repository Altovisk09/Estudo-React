const Events = ()=>{
    const handleEvent=(e)=>{
        console.log('Evento Acionado', e)
    }

    const renderSomenthing = (x)=>{
        if(x){
            return <h1>Renderizado caso X = True</h1>
        }else{
            return <h1>Renderizado caso X = False</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleEvent}>Enviar</button>
            </div>
            <div>
                <button onClick={()=>console.log('Não recomendado, mas se for simples da para usar')}>Função inline</button>
            </div>
            <div>
                {renderSomenthing(true)}
            </div>
        </div>
    )
}

export default Events;