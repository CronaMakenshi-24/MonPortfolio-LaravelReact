import {useForm, usePage} from "@inertiajs/inertia-react";
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {useState} from "react";

export default function Formulaire(props) {
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const {flash} = usePage().props
    const [open, setOpen] = useState(true);

    const {reset, data, setData, post, processing, errors} = useForm({
        name: "",
        email: "",
        message: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        if (!isCaptchaValid) {
            alert("Veuillez valider le Captcha");
            return;
        }
        post('/Contact')
        reset()
    }

    return (
        <form onSubmit={handleSubmit} enctype="multipart/form-data"
              className="mt-8 mb-2  sm:w-full ">
            {flash.success && (
                <div id="alert-3"
                     className="flex items-center  justify-center p-4 mb-4 text-green-800 rounded-lg  bg-transparent "
                     role="alert">
                    <svg className="flex-shrink-0 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-2xl font-medium">
                        {flash.success}
                    </div>
                </div>
            )}
            <div className="text-2xl lg:text-5xl font-body text-red-400">
                Contact
            </div>
            <div className="mt-1  text-blue-300 font-normal">
                Vous pouvez me contacter ici.
            </div>
            <div className="relative z-0 w-full mb-6 group mt-5">
                <input type="text" id="name" name="name" value={data.name}
                       onChange={e => setData('name', e.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-white border bg-transparent border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-900 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50 peer"
                       placeholder=" "/>
                {errors.name &&
                    <div role="alert">
                        <div className="border border-t-0 border-red-400  bg-transparent px-4 py-3 text-red-700">
                            <p>{errors.name}</p>
                        </div>
                    </div>
                }
                <label htmlFor="floating_first_name"
                       className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 inset-0 top-1 -z-10 origin-[0] peer-focus:inset-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6">Votre
                    nom et prénom</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input id="email" name="email" value={data.email} onChange={e => setData('email', e.target.value)}
                       type="email"
                       className="block py-2.5 px-0 w-full text-sm text-white border bg-transparent  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-900 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50 peer"
                       placeholder=" "/>
                {errors.email &&
                    <div role="alert">
                        <div className="border border-t-0 border-red-400  bg-transparent px-4 py-3 text-red-700">
                            <p>{errors.email}</p>
                        </div>
                    </div>
                }
                <label htmlFor="floating_email"
                       className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 inset-0 scale-75 top-1 -z-10 origin-[0] peer-focus:inset-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6">E-Mail</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                    <textarea id="message" name="message" value={data.message}
                              onChange={e => setData('message', e.target.value)} rows="4"
                              className="block py-2.5 px-0 w-full text-sm text-white border bg-transparent border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-900 hover:border-blue-900 hover:shadow-md hover:shadow-cyan-900/50 peer"
                              placeholder=" Vous pouvez écrire..."></textarea>
                {errors.message &&
                    <div role="alert">
                        <div className="border border-t-0 border-red-400  bg-transparent px-4 py-3 text-red-700">
                            <p>{errors.message}</p>
                        </div>
                    </div>
                }
                <label htmlFor="floating_last_name"
                       className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300  inset-x-0  transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:inset-x-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6">Votre
                    message</label>
            </div>
            <div className="flex justify-center">
                <HCaptcha
                    size="compact"
                    sitekey={import.meta.env.VITE_YOUR_SITE_KEY}
                    onVerify={(token, ekey) => setIsCaptchaValid(true)}
                />
            </div>
            <button type="submit" disabled={processing}
                    className="mt-6 mx-auto border border-white text-white font-body w-32 bg-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                {processing ? "Message entrain de s'envoyer" : "Envoyer"} </button>
        </form>
    );
}