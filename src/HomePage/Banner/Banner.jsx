import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-24'>
            <div className="banner-bg banner-bg xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-20">
                <h2 className='text-white font-bold py-2 text-xl uppercase'>Westren Education Group</h2>
                <p className='text-[#ffffffb2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, distinctio. <br></br>Tenetur pariatur mollitia optio non quae porro,
                    similique doloribus a repudiandae, <br></br>dolores consectetur cum nobis voluptatum!
                    Tempore nobis animi libero.
                </p>

                <div className='my-4 pt-4 text-base font-medium space-x-3'>
                    <Link to='/subjects'>
                        <button className='px-4 py-2 bg-[#950007] hover:bg-[#04205A] duration-300  text-white rounded'>Browse Journals</button>
                    </Link>
                    <Link to='/about'>
                        <button className='px-4 py-2 border text-white rounded hover:bg-[#950007] duration-300'>Read More</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;