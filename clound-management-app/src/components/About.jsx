
const About = () => {
    return ( 
        <div name='about' className="py-[200px] md:py-32 w-full">
            <div className="max-w-[1240] mx-auto">

                <div className="text-center">
                    <h2 className="text-5xl fomt-bold">Trusted by developers across the world</h2>
                    <p className="text-3xl py-6 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo labore quo adipisci illum amet qui?
                    </p>
                </div>

                    <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-indigo-600 text-6xl font-bold">100%</p>
                            <p className ='text-gray-400'>Completetion</p>
                        </div>

                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-indigo-600 text-6xl font-bold">24/7</p>
                            <p className ='text-gray-400'>Delivery</p>
                        </div>
                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-indigo-600 text-6xl font-bold">100K</p>
                            <p className ='text-gray-500 mt-2'>Transaction</p>
                        </div>
                    </div>

            </div>

        </div>
     );
}
 
export default About;