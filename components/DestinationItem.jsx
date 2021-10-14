import React from 'react';
import Image from 'next/image';

const DestinationItem = ({ destination }) => {
    return (
        <div className='grid grid-cols-3 bg-white rounded-lg shadow-lg sm:grid-cols-4 md:grid-cols-3'>
            <img
                src={destination.imageUrl}
                alt={destination.imageAlt}
                className='col-span-1 sm:col-span-1 md:col-span-1 h-full object-cover object-center'
            />
            <div className='col-span-2 p-4 sm:col-span-3 md:col-span-2'>
                <h1 className='text-lg font-semibold text-gray-800'>
                    {destination.city}
                </h1>
                <p className='text-md text-gray-500'>{`$${destination.averagePrice} / night average`}</p>
                <p className='text-sm text-indigo-500 font-bold mt-4'>{`Explore ${destination.propertyCount} properties`}</p>
            </div>
        </div>
    );
};

export default DestinationItem;
