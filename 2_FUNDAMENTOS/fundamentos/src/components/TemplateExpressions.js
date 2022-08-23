// TemplateExpressions: Serve para interpolar dados no template ou executar javascript

const TemplateExpressions = () => {

    const name = 'Wesley'
    const data = {
        age: 31,
        job: 'Programador',
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>

        </div>
    )
}

export default TemplateExpressions