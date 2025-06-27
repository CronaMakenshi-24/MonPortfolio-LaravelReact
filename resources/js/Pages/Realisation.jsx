import CarouselRealisation from "../Components/CarouselRealisation";

function Realisation() {
    return (
        <div className='max-2xl:my-20 mt-5'>
            <div className='mx-5 '>
                <h1 className="text-red-400 text-2xl 2xl:text-5xl  text-center ">Mes Réalisations</h1>
                <CarouselRealisation/>
            </div>
        </div>
    );
}

export default Realisation;