// Os eventos são essenciais no front-end, Em várias situções por exemplo enviar formulário

const Events = () => {


    const handleMyEvents = (e) => {
        console.log(e);
        console.log("Ativou o Evento");

    }
    const renderSomething = (x) => {
        if (x) {
            return <h1>Rederizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique Aqui </button>
            </div>

            <div>
                <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
                <button onClick={() => {
                    if (true) {
                        console.log('Isso não deveria existir');
                    }
                }}>Clique aqui outra vez</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events