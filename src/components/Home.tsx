
const Home = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/imgbg.png)' }}>
            {/* Логотип и меню */}
            <header className="absolute top-0 w-full flex justify-center p-5">
                <div className="max-w-container w-full flex justify-between items-center">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-16"
                    />
                    <nav className="flex space-x-6 text-white items-center">
                        <a href="#about" className="hidden md:block hover:text-yellow-400">About us</a>
                        <a href="#services" className="hidden md:block hover:text-yellow-400">Services</a>
                        <a href="#players" className="hidden md:block hover:text-yellow-400">Players portfolio</a>
                        <a href="#bulletin" className="hidden md:block hover:text-yellow-400">Bulletin</a>
                        <a href="#contact" className="hidden md:block hover:text-yellow-400">Contact</a>
                        <div className="flex items-center bg-[#6c6c6c97] rounded-full gap-1 p-2">
                            <img width={30} src="https://media.istockphoto.com/id/185228721/photo/old-british-flag-union-jack.jpg?s=612x612&w=0&k=20&c=wAhRV_YTdJlZRq4JGHebovy3CY-6-jRH3k4Vumisllk=" alt="" />
                           <img src="/Shape.svg" alt="" />
                        </div>
                    </nav>
                </div>
            </header>

            {/* Главный текст */}
            <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="max-w-container w-full">
                    <h1 className="text-[25px] md:text-[35px] lg:text-[50px] font-bold text-yellow-400">JOKS SOCCER ACADEMY</h1>
                    <p className="text-[35px] md:text-[45px] text-white lg:text-[75px] mt-4 tracking-tight" style={{ letterSpacing: '-4px' }}>TRANSFORMING LIVES THROUGH</p>
                    <p className="text-[30px] md:text-[40px] text-border lg:text-[75px]">FOOTBALL AND EDUCATION!</p>

                    <button className="mt-6 px-8 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500">About us</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
