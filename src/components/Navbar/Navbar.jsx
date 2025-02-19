

const Navbar = () => {
    return (
        <div className="mt-5 mb-12">
            <label className="input input-bordered flex items-center bg-slate-100 gap-2 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                <input type="text" className="grow text-xl" placeholder="Hair cleaning" />
                <div className="py-2">
                <span className="btn bg-black hover:text-black text-white text-xl">Search Service</span>
                </div>
            </label>
        </div>
    );
};

export default Navbar;