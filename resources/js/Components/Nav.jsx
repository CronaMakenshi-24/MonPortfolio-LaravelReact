import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function Nav() {
    const navList = (
        <ul className="max-2xl:flex max-2xl:items-center max-2xl:justify-center 2xl:mt-60 2xl:font-semibold uppercase">
            <li>
                <Link to="/"
                      className="block lg:inline-block text-white 2xl:text-4xl md:text-2xl hover:text-blue-300 mr-4">
                    À propos
                </Link>
            </li>
            <li>
                <Link to="/Realisation"
                      className="block lg:inline-block my-8 text-white 2xl:text-4xl md:text-2xl hover:text-blue-300 mr-4">
                    Réalisations
                </Link>
            </li>
            <li>
                <Link to="/Contact"
                      className="block lg:inline-block text-white 2xl:text-4xl md:text-2xl hover:text-blue-300">
                    Contact
                </Link>
            </li>
        </ul>
    );

    return (
        <motion.div
            initial={{x: -550}}
            animate={{x: 0}}
            transition={{
                type: "spring",
                stiffness: 480,
                damping: 200
            }}
        >
            <nav
                className="bg-neutral-950  2xl:w-96 rounded-none border 2xl:h-screen border-2 border-white">
                <div className="text-center">
                    {navList}
                </div>
                <div>
                    <h6 className='max-2xl:hidden absolute bottom-1 text-white inset-x-4'>
                        Christophe Mestdagh - Copyright 2025
                    </h6>
                </div>
            </nav>
        </ motion.div>
    );
}

