

export const Navbar = (sections) => {

    return (
        <nav className="navbar" style={{backgroundColor: 'black'}}>
            <div className="container-fluid">
                <h1 className="navbar-brand" style={{color: 'white'}}>{sections.name}</h1>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
