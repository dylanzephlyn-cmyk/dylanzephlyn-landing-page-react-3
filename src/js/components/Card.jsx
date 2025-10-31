

export const Card = (famousperson) => {

    return (
        <div className="container-fluid p-auto">
    <div className="card" style={{width: '18rem'}}>
            <h3 className="card-header">{famousperson.name}</h3>
        <img style={{height: '15em'}} src={famousperson.url}alt="..."/>
        <div className="card-body">
            <h5 className="card-text">{famousperson.role}</h5>
            <p className="card-text">{famousperson.info}</p>
            <h5 className="card-text">{famousperson.rating}</h5>
        </div>
    </div>
        </div>


    )
}