import Neuneu404 from "../assets/Neuneu_404.gif"
import {Link} from "react-router-dom";

export default function error404() {
    return (
        <div className='flex justify-center flex-col max-md:my-5 mx-auto md:w-1/3 text-white'>
            <div className="text-center  mb-5 text-3xl">
                <h1>ERREUR 404 : Page Non Trouvée</h1>
            </div>
            <div className="text-md">
                <p>
                    Nous sommes désolé mais la page que vous cherchez n'est pas ou plus
                    disponible. Nous vous suggérons de vous rendre sur
                    <Link to="/" className="text-blue-800 hover:text-red-900"> la page d'accueil </Link>
                    du site ou d'effectuer une nouvelle recherche</p>
            </div>
            <div className="mx-auto mt-5">
                <p><img className="" src={Neuneu404} alt="error404"/></p>
            </div>
        </div>
    );
}
