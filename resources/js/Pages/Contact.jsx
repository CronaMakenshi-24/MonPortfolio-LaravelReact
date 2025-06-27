import Formulaire from "../Components/Formulaire";

function Contact() {
    return (
        <div className="text-center max-lg:my-36 max-2xl:my-96 max-sm:my-10 flex mx-auto max-lg:h-screen items-center">
            <div className="mx-auto lg:w-[600px]">
                <Formulaire/>
                <h2 className="my-5"><a className="text-blue-300 text-2xl"
                                        href="https://github.com/ChronaMakenshi" target="_blank">
                    <span className="text-white">&lt;</span>Mon GitHub<span className="text-white">&gt;</span></a></h2>
                <h2 className=""><a className="text-blue-300 text-2xl"
                                    href="https://www.linkedin.com/in/christophe-mestdagh-3a6002217/" target="_blank">
                    <span className="text-white">&lt;</span>Mon LinkedIn<span className="text-white">&gt;</span></a>
                </h2>
            </div>
        </div>
    );
}

export default Contact;