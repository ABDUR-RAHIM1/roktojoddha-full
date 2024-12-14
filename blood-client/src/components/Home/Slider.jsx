import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SliderCard from './SliderCard';
import useFetch from '../../hooks/usefetch';

export default function Slider() {
    const [showBanner, setShowBanner] = useState(true);

    const API = `/slider/sliders`;
    const { isLoading, data } = useFetch(API);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading || (data && data.length === 0)) {
                setShowBanner(true);
            } else {
                setShowBanner(false);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [isLoading, data]);

    return (
        <div className="w-full relative">
            {isLoading || (data && data.length === 0) ? (
                <div className='w-full h-[85vh] bg-black flex items-center justify-between'>
                    <SliderCard />
                </div>
            ) : (
                <Fade>
                    {data && data.map((fadeImage, index) => (
                        <div
                            key={index}
                            className='w-full h-[85vh] z-[-1] relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover md:object-fill lg:object-cover'
                                src={fadeImage.profilePic}
                                alt={`slide-${index}`}
                            />
                        </div>
                    ))}
                </Fade>
            )}

            <div className={` ${showBanner ? "scale-1" : "scale-0"} duration-500 w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-[1] flex items-center justify-start px-10`}>
                <SliderCard />
            </div>
        </div>
    );
}
