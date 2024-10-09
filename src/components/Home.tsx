
const Home = () => {
    return (
        <div className="relative flex flex-col items-center h-screen bg-center bg-cover" style={{ backgroundImage: 'url(/imgbg.png)' }}>
            <header className="absolute top-0 flex justify-center w-full p-5 mx-auto mxa mycontainer">
                <div className="flex items-center justify-between w-full max-w-container">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-16"
                    />
                    <nav className="flex items-center space-x-6 text-white ffnav">
                        <a href="#about" className="hidden md:block hover:text-yellow-400">About us</a>
                        <a href="#services" className="hidden md:block hover:text-yellow-400">Services</a>
                        <a href="#players" className="hidden md:block hover:text-yellow-400">Players portfolio</a>
                        <a href="#bulletin" className="hidden md:block hover:text-yellow-400">Bulletin</a>
                        <a href="#contact" className="hidden md:block hover:text-yellow-400">Contact</a>
                    </nav>
                    <div className="flex items-center bg-[#6c6c6c97] rounded-full gap-1 p-2">
                        <img width={30} src="https://media.istockphoto.com/id/185228721/photo/old-british-flag-union-jack.jpg?s=612x612&w=0&k=20&c=wAhRV_YTdJlZRq4JGHebovy3CY-6-jRH3k4Vumisllk=" alt="" />
                        <img src="/Shape.svg" alt="" />
                    </div>
                </div>
            </header>

            <div className="flex flex-col items-center justify-center h-full text-center mycontainer">
                <div className="w-full max-w-container">
                    <div>
                        <h1 className="font-bold text-yellow-400 ffJOKS">JOKS SOCCER ACADEMY</h1>
                    </div>
                    <p className="text-white ffTRANS">TRANSFORMING LIVES THROUGH</p>
                    <p className="ffFOOT text-border ">FOOTBALL AND EDUCATION!</p>

                    <button className="mt-6 text-black bg-yellow-400 rounded-full ffABOUT hover:bg-yellow-500">About us</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
