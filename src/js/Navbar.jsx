

export const Navbar = () => {

    return (
        <nav className="navbar bg-success">
            <div className="container-fluid">
                <h1 className="navbar-brand">Poke-Center</h1>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="PokeDex" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


