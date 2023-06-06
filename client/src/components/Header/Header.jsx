import '../../styles/Header.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { HiSearch } from 'react-icons/hi'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CartLogo from '../../assets/cart-logo.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-section">
                <img src={CartLogo} alt="" draggable="false" />
                <span>NongNghiepSach</span>
            </div>
            <div className="list-section">
                <div className="item">
                    <span>Categories</span>
                    <IoIosArrowDown />
                </div>
                <div className="item">Deals</div>
                <div className="item">What's New</div>
                <div className="item">Delivery</div>
            </div>
            <div className="user-section">
                <div className="search-section">
                    <input type="text" placeholder="Search Product" />
                    <div className="icon">
                        <HiSearch size={20} />
                    </div>
                </div>
                <Link to="/login">
                    <div className="account-section">
                        <div className="icon">
                            <FiUser size={26} />
                        </div>
                        <span>Account</span>
                    </div>
                </Link>
                <div className="cart-section">
                    <div className="icon">
                        <FiShoppingCart size={26} />
                    </div>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Header
