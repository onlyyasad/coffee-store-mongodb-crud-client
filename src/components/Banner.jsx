

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/MCZgLf3/3.png")` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-rancho font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn normal-case text-xl rounded-none bg-[#E3B577] text-[#242222] hover:bg-opacity-0 hover:text-white hover:border hover:border-white font-rancho">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;