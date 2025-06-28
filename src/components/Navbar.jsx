import React, { useContext, useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { authContext } from '../context/auth-context'
import { nav_logo, nav_flights, nav_hotel, nav_train, nav_cabs, nav_bus, nav_holiday} from "../assets";



const Navbar = () => {

  const {authModal, setAuthModal, currentUser, setCurrentUser} = useContext(authContext);
  const navigate = useNavigate();
  const [servicetype, setServicetype] = useState('flights')



  const handleLogo = () => {
    setServicetype('flights');
    navigate("/");
  }

  return (
    <div>
     <div className={styles.navbar}>
        <div>
            <img onClick={handleLogo} className={styles.nav_logo} src={nav_logo} alt="nav-logo" />
        </div>
        <div className={styles.services}>
               
                <div onClick={() => setServicetype('flights')} className={`${servicetype === 'flights' ? styles.service_selected : '' }`}>
                  <Link to="/"><img src={nav_flights} alt="flights" /><span>Flights</span></Link>
                </div>

                <div onClick={() => setServicetype('hotel')} className={`${servicetype === 'hotel' ? styles.service_selected : '' }`}>
                  <Link to="/hotels"><img src={nav_hotel} alt="hotel" /><span>Hotels</span></Link>
                </div>

                <div onClick={() => setServicetype('train')} className={`${servicetype === 'train' ? styles.service_selected : '' }`}>
                  <Link to="/trains"><img src={nav_train} alt="train" /><span>Trains</span></Link>
                </div>

                <div onClick={() => setServicetype('cabs')} className={`${servicetype === 'cabs' ? styles.service_selected : '' }`}>
                  <Link to="/cabs"><img src={nav_cabs} alt="cabs" /><span>Cabs</span></Link>
                </div>

                <div onClick={() => setServicetype('bus')} className={`${servicetype === 'bus' ? styles.service_selected : '' }`}>
                  <Link to="/bus"><img src={nav_bus} alt="bus" /><span>Bus</span></Link>
                </div>

                <div onClick={() => setServicetype('holiday')} className={`${servicetype === 'holiday' ? styles.service_selected : '' }`}>
                  <Link to="/holiday"><img src={nav_holiday} alt="holiday" /><span>Holiday</span></Link>
                </div>
        </div>
            { currentUser ? (
              <div className={styles.profile_box}><p>Hello, {currentUser.name}</p><MdLogout onClick={() => setCurrentUser(null)}/></div>
            ) :
            <button className={styles.nav_button} onClick={() => setAuthModal("login")}><FaUser /> Log In / Signup</button>
            }
     </div>
       <div>
       {authModal === "login" && <Login />}
       {authModal === "signup" && <Signup />}
       </div>
     
    {/* <div className={styles.navbar_bottom}>
     </div> */}
    </div>
  )
}

export default Navbar