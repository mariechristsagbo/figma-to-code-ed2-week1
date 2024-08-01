export default function CallToAction() {
    return (
        <section className="w-full text-white font-semibold my-8 px-2 lg:px-0">
            <div className="border rounded-3xl bg-calltoaction bg-cover relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative flex flex-col items-center space-y-5 my-8 py-11">
                    <h1 className="sm:text-6xl text-3xl text-center px-5">Build your NFT profile</h1>
                    <p className="sm:text-lg text-md text-center">Join almost 10k NFT profiles on Digit !</p>
                    <button className="bg-white text-black rounded-full px-6 py-2.5 hover:bg-opacity-80">Sign up now</button>
                </div>
            </div>
        </section>

    );
}