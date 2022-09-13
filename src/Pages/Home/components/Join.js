
const Join = () => {
    return (
        <section className="container mx-auto mb-20  mt-12 ">
            <div className="  py-20 rounded-lg shadow-xl ">
                <div className="wrapper-join flex-col justify-between  text-center  ">
                    <div className="mb-10">
                        <p className='text-2xl text-[#4E4B66] font-normal'>Be the vanguard of the</p>
                        <p className='text-5xl text-[#5F2EEA] font-bold'>Moviegoers</p>
                    </div>
                    <div className='flex-center items-center mb-10'>
                        <div className="w-3/12  mr-4 ">
                            <input className='border-[0.5px] py-2 w-full  pr-8 pl-2 outline-none rounded-md' type={'email'} placeholder="Type your email" />
                        </div>
                        <div>
                            <button className='bg-[#5F2EEA] w-[120px] h-[43px] rounded-sm text-sm font-semibold text-white '>Join Now</button>
                        </div>
                    </div>
                    <div className='text-sm font-normal tracking-wider	 text-[#6E7191]'>
                        <p>By joining you as a Tickitz member.</p>
                        <p>we will always send you the latest updates via email.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Join