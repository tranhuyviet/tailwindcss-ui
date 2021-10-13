import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tailwindcss</title>
                <meta name='description' content='Tailwind css ui template' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='min-h-screen bg-gray-300'>
                <div className='w-full lg:grid lg:grid-cols-2 bg-gray-300 2xl:grid-cols-5'>
                    <div className='px-8 py-12 sm:max-w-lg mx-auto lg:px-12 lg:py-24 lg:max-w-full bg-gray-100 xl:mr-0 2xl:col-span-2'>
                        <img
                            src='/images/logo.svg'
                            alt='logo'
                            className='h-10'
                        />
                        <img
                            src='/images/beach-work.jpg'
                            alt='woman at the beach'
                            className=' rounded-lg shadow-xl mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden'
                        />
                        <h1 className='mt-4 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl'>
                            You can work from anywhere.
                            <br />{' '}
                            <span className='text-indigo-500'>
                                Take advantage of it.
                            </span>
                        </h1>
                        <p className='text-gray-600 mt-2 sm:mt-4 sm:text-xl'>
                            Workcation helps you find work-friendly rentals in
                            beautiful locations so you can enjoy some nice
                            weather even when you're not on vacation.
                        </p>
                        <div className='mt-4 sm:mt-6 sm:text-base space-x-1'>
                            <a className='btn btn-primary' href='#'>
                                Book your escape
                            </a>
                            <a className='btn btn-secondary' href='#'>
                                Lear more
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:block relative 2xl:col-span-3'>
                        <img
                            src='/images/beach-work.jpg'
                            alt='woman at the beach'
                            className='absolute inset-0 w-full h-full object-center object-cover'
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
