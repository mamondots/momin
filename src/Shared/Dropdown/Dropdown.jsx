import { Link } from 'react-router-dom';
import './Dropdown.css'
const Dropdown = () => {
    return (
        <div className="dropdown">
             <ul className='text-sm space-y-2'>
                <li className='hover:text-[#0A2258] duration-300'><Link to='/subjects'><a href="">Journals by Subjects</a></Link></li>
                <li className='hover:text-[#0A2258] duration-300'><Link to='/compltedlist'><a href="">Complete List of Journals</a></Link></li>
             </ul>
        </div>
    );
};

export default Dropdown;