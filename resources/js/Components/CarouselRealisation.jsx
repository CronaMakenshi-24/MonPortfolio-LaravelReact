import {realisationsList} from "../datas/realisationsList.jsx";
import {Button, Carousel} from 'flowbite-react';

export default function CarouselRealisation() {
    return (
        <Carousel className="my-5" slideInterval={50000}>
            {realisationsList.map(realisationsList =>
                <div className="relative flex justify-center h-full w-full">
                    <img
                        width={realisationsList.width}
                        height={realisationsList.height}
                        alt={realisationsList.name}
                        src={realisationsList.image}
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
                        <div className="w-3/4 text-center md:w-3/4">
                            <div
                                className="mb-4 font-title text-white text-3xl md:text-4xl lg:text-5xl"
                            >
                            <span
                                className="text-blue-900">&lt;
                            </span>
                                {realisationsList.name}
                                <span
                                    className="text-blue-900">&gt;
                           </span>
                            </div>
                            <div
                                className="mb-12 opacity-80 text-white text-xl"
                            >
                                {realisationsList.programme}
                            </div>
                            <div className="flex justify-center gap-2">
                                <Button color="gray">
                                    <a href={realisationsList.github} target="_blank">GITHUB</a>
                                </Button>
                                {realisationsList.site ? (
                                    <Button color="gray">
                                        <a href={realisationsList.site} target="_blank">SITE</a>
                                    </Button>) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>
    )
}









