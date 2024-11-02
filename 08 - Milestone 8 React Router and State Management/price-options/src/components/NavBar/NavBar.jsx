import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile/:id' },
    ];

    const [open, setOpen] = useState(true);

    return (
        <nav className="w-11/12 mx-auto mt-6">
            <div onClick={() => setOpen(!open)} className="md:hidden mt-4">
                {
                    open === true ? <FaBarsStaggered /> : <RxCross1 />
                }

            </div>
            <ul className={`md:flex justify-between absolute md:static ${!open ? 'top-14' : '-top-48'}`}>
                {
                    routes.map(route => (
                        <li className="" key={route.id}><a href={route.path}>{route.name}</a></li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;