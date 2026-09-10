import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <hr className='mt-20 text-[#d5d7d8]' />
            <div className='mt-15 container mx-auto flex justify-between'>
                <div className='flex flex-col'>
                    <img className='h-10 w-[160px]' src={Logo} alt="" />
                    <p className='text-[#64748B] mt-3'>Curated tools, technologies, and resources for developers building <br></br>
                        modern software.</p>
                    <ul className='flex items-center gap-5 mt-7'>
                        <li className='text-[#475569]'>Github</li>
                        <li className='text-[#475569]'>Twiter</li>
                        <li className='text-[#475569]'>LinkedIn</li>
                    </ul>
                </div>
                <div className='flex justify-between gap-50'>
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
            <hr className='mt-15 text-[#d5d7d8] conatainer mx-auto' />
            <div className='flex justify-between container mx-auto my-10'>
                <p className='text-[#94A3B8] text-sm'>© 2026 Dev Stack. All rights reserved.</p>
                <ul className='flex justify-between gap-6'>
                    <li className='text-[#94A3B8] text-sm'>Privacy</li>
                    <li className='text-[#94A3B8] text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;