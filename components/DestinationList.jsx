import { useState, useEffect } from 'react';
import DestinationItem from './DestinationItem';

const DestinationList = ({ destinations }) => {
    console.log('RENDER', destinations);
    return (
        <div className='py-6 px-8 text-gray-800'>
            <h1 className='text-xl font-medium'>Popular destinations</h1>
            <p className='text-lg mt-2 '>
                A selection of great work-friendly cities with lots to see and
                explore.
            </p>
            <div className='grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3'>
                {destinations &&
                    destinations.map((destination) => (
                        <DestinationItem
                            key={destination.city}
                            destination={destination}
                        />
                    ))}
            </div>
        </div>
    );
};

export default DestinationList;
