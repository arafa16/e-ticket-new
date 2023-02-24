import React, {useState, useEffect, useRef} from 'react'
import { BiUser, BiMenu } from "react-icons/bi";
import Logo from '../../attributs/logo.png';
import BigMenu from './BigMenu';
import UserMenu from './UserMenu';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LogOut, reset} from "../../features/authSlice";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [menuUser, setMenuUser] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/');
    }

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleMenuUser = () => {
        setMenuUser(!menuUser)
    }

    const menuRef = useRef();
    const menuUserRef = useRef();

    useEffect(()=>{
        const handleMenu = (event) => {
            if(!menuRef.current.contains(event.target)){
                setMenu(false)
            }
        }

        const handleMenuUser = (event) => {
            if(!menuUserRef.current.contains(event.target)){
                setMenuUser(false)
            }
        }

        document.addEventListener("mousedown", handleMenu);
        document.addEventListener("mousedown", handleMenuUser);

        return ()=>{
            document.removeEventListener("mousedown", handleMenu);
            document.removeEventListener("mousedown", handleMenuUser);
        }
    });

    return (
        <div className='fixed z-50 w-full h-10 bg-white flex justify-between items-center px-8 shadow-xl'>
            <div className='flex justify-start gap-10 items-center'>
                <div>
                    <img className='h-8' src={Logo} alt="img" />
                </div>
                <div>
                    <BiMenu className={`text-[16pt] cursor-pointer`} onClick={()=>handleMenu()} />
                    <div ref={menuRef} className={`absolute z-20 mt-4  ${!menu ? 'hidden' : ''}`}>
                        <BigMenu/>
                    </div>
                </div>
            </div>
            <div>
                
                <BiUser className={`text-[16pt] cursor-pointer`} onClick={()=>handleMenuUser()} />
                <div ref={menuUserRef} className={`absolute z-10 mt-4 right-10 ${!menuUser ? 'hidden' : ''}`}>
                    <UserMenu logout={handleLogout} />
                </div>
            </div>
        </div>
    );
}

export default Navbar