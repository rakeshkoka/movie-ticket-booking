import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-gray-800 h-16">
            <nav className="mx-24">
                <div className="container mx-auto flex justify-between items-center p-0">

                    <div className="flex justify-start items-center w-full" >
                        {/* logo */}
                        <div className="text-text-highlight text-lg me-4 font-semibold">
                            <Link to="/" >
                                <img style={{ width: '115px', height: '70px' }} src="../../../public/images/nav photo no bg.png" alt="" />
                            </Link>
                        </div>

                        {/* Search Box */}

                        <div className="input-group flex items-center w-full max-w-xl">
                            <input
                                type="text"
                                className="form-control w-full px-3 py-2 text-text-light bg-gray-800 border border-gray-600 rounded-l focus:outline-none focus:border-accent-red placeholder:text-text-light"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                                aria-describedby="button-addon2" />

                            <button
                                className="btn bg-accent-red text-text-highlight px-4 py-2 rounded-r hover:bg-red-600"
                                type="button"
                                id="button-addon2">Search</button>
                        </div>
                    </div>


                    {/* buttons */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/login" className="text-text-highlight bg-accent-blue hover:bg-blue-600 px-4 py-2 rounded">
                            Login
                        </Link>
                        <Link to="/register" className="text-text-highlight bg-accent-red hover:bg-red-600 px-4 py-2 rounded">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
