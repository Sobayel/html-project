import moment from 'moment';
import photo from '../../assets/book.png';

const Home = () => {
    return (
        <div>
            {/* First Cart */}
            <div className='grid grid-cols-7 bg-slate-200 rounded-2xl mb-5'>
            {/* first section */}
            <div className='flex flex-col col-span-3 rounded-xl p-5'>
                <div className='flex gap-6'>
                    <img className='w-16 h-16 rounded-lg' src={photo} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>History Book</h2>
                        <p className='text-xl font-semibold'>history books across different periods</p>
                    </div>
                </div>
                <div>
                    <p className='mt-4'>Guns, Germs, and Steel: The Fates of Human Societies by Jared Diamond - This Pulitzer Prize-winning book explores the factors that led to the dominance of certain civilizations throughout history.The Rise and Fall of the Third Reich: A History of Nazi Germany by William provides a comprehensive account of Nazi Germany, from rise to power to the end of World War II.</p>
                </div>
            </div>
            {/* middle section */}
            <div className='bg-slate-100 my-3 ml-3 col-span-2 rounded-xl p-4'>
                <div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1  text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* last section */}
            <div className='col-span-2 rounded-xl ml-3 p-4'>
                <div className='flex items-center justify-end'>
                <button className="btn bg-black text-white hover:text-black">Book an appointment</button>
                </div>
            </div>
        </div>
        {/* second cart */}
            <div className='grid grid-cols-7 bg-slate-200 rounded-2xl mb-5'>
            {/* first section */}
            <div className='flex flex-col col-span-3 rounded-xl p-5'>
                <div className='flex gap-6'>
                    <img className='w-16 h-16 rounded-lg' src={photo} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>History Book</h2>
                        <p className='text-xl font-semibold'>history books across different periods</p>
                    </div>
                </div>
                <div>
                    <p className='mt-4'>Guns, Germs, and Steel: The Fates of Human Societies by Jared Diamond - This Pulitzer Prize-winning book explores the factors that led to the dominance of certain civilizations throughout history.The Rise and Fall of the Third Reich: A History of Nazi Germany by William provides a comprehensive account of Nazi Germany, from rise to power to the end of World War II.</p>
                </div>
            </div>
            {/* middle section */}
            <div className='bg-slate-100 my-3 ml-3 col-span-2 rounded-xl p-4'>
                <div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1  text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* last section */}
            <div className='col-span-2 rounded-xl ml-3 p-4'>
                <div className='flex items-center justify-end'>
                <button className="btn bg-black text-white hover:text-black">Book an appointment</button>
                </div>
            </div>
        </div>
        {/* third cart */}
            <div className='grid grid-cols-7 bg-slate-200 rounded-2xl mb-5'>
            {/* first section */}
            <div className='flex flex-col col-span-3 rounded-xl p-5'>
                <div className='flex gap-6'>
                    <img className='w-16 h-16 rounded-lg' src={photo} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>History Book</h2>
                        <p className='text-xl font-semibold'>history books across different periods</p>
                    </div>
                </div>
                <div>
                    <p className='mt-4'>Guns, Germs, and Steel: The Fates of Human Societies by Jared Diamond - This Pulitzer Prize-winning book explores the factors that led to the dominance of certain civilizations throughout history.The Rise and Fall of the Third Reich: A History of Nazi Germany by William provides a comprehensive account of Nazi Germany, from rise to power to the end of World War II.</p>
                </div>
            </div>
            {/* middle section */}
            <div className='bg-slate-100 my-3 ml-3 col-span-2 rounded-xl p-4'>
                <div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1  text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* last section */}
            <div className='col-span-2 rounded-xl ml-3 p-4'>
                <div className='flex items-center justify-end'>
                <button className="btn bg-black text-white hover:text-black">Book an appointment</button>
                </div>
            </div>
        </div>
        {/* forth cart */}
            <div className='grid grid-cols-7 bg-slate-200 rounded-2xl mb-12'>
            {/* first section */}
            <div className='flex flex-col col-span-3 rounded-xl p-5'>
                <div className='flex gap-6'>
                    <img className='w-16 h-16 rounded-lg' src={photo} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>History Book</h2>
                        <p className='text-xl font-semibold'>history books across different periods</p>
                    </div>
                </div>
                <div>
                    <p className='mt-4'>Guns, Germs, and Steel: The Fates of Human Societies by Jared Diamond - This Pulitzer Prize-winning book explores the factors that led to the dominance of certain civilizations throughout history.The Rise and Fall of the Third Reich: A History of Nazi Germany by William provides a comprehensive account of Nazi Germany, from rise to power to the end of World War II.</p>
                </div>
            </div>
            {/* middle section */}
            <div className='bg-slate-100 my-3 ml-3 col-span-2 rounded-xl p-4'>
                <div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1  text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4 mb-2">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text"  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                    <div className="navbar bg-base-100 rounded-lg h-4">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex-1 text-center justify-center">
                            <a className=" btn-ghost text-xl font-semibold">{moment().format('h:mm a')}</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* last section */}
            <div className='col-span-2 rounded-xl ml-3 p-4'>
                <div className='flex items-center justify-end'>
                <button className="btn bg-black text-white hover:text-black">Book an appointment</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;