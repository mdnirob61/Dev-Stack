import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <hr className='mt-20 text-[#d5d7d8]' />
            <div className='mt-15 container mx-auto px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row justify-between gap-10'>
                <div className='flex flex-col'>
                    <img className='h-10 w-[160px]' src={Logo} alt="Dev Stack" />
                    <p className='text-[#64748B] mt-3 max-w-md'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className='flex items-center gap-5 mt-7'>
                        <a className='font-semibold text-[#475569]' href='https://github.com/'>Github</a>
                        <a className='font-semibold text-[#475569]' href='https://x.com/'>Twitter</a>
                        <a className='font-semibold text-[#475569]' href='https://www.linkedin.com/'>LinkedIn</a>
                    </div>

                </div>
                <div className='flex flex-wrap justify-between gap-10 lg:gap-45'>
                    <div>
                        <h2 className='font-semibold mb-4 text-xl'>PRODUCT</h2>
                        <ul>
                            <li className='text-[#475569]'>Home</li>
                            <li className='text-[#475569] pt-2'>Technologies</li>
                            <li className='text-[#475569] pt-2'>Projects</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-semibold mb-4 text-xl'>COMPANY</h2>
                        <ul>
                            <li className='text-[#475569]'>About</li>
                            <li className='text-[#475569] pt-2'>Contact</li>
                            <li className='text-[#475569] pt-2'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-semibold mb-4 text-xl'>LEGAL</h2>
                        <ul>
                            <li className='text-[#475569]'>Privacy Policy</li>
                            <li className='text-[#475569] pt-2'>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='mt-15 text-[#d5d7d8]' />
            <div className='container mx-auto px-5 sm:px-8 lg:px-10 my-10 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <p className='text-[#94A3B8] text-sm'>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex justify-between gap-6'>
                    <a className='text-[#94A3B8] text-sm' href=''>Privacy</a>
                    <a className='text-[#94A3B8] text-sm' href=''>Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;