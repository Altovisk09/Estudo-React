const TemplateExpressions = ()=>{
    const objeto = {
        nome: "João",
        profissao: "Web Developer",
        idade: 21,
    }

    return (
        <div>
            <h1>Olá meu nome é {objeto.nome}</h1>
            <h3>Atuo como {objeto.profissao}</h3>
            <h3>Possuo {objeto.idade} anos</h3>
        </div>
    )
}

export default TemplateExpressions;