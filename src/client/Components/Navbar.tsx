import * as React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.SFC<IAppProps> = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg text-white navbar-dark bg-dark">
                <Link className="navbar-brand mr-5" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link mr-3" to="/Films"><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/People">Peeps</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

interface IAppProps {

}

export default Navbar