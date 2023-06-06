import '../styles/Home.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { FiFilter } from 'react-icons/fi'
import Header from '../components/Header/Header'
import ProductCard from '../components/Card/ProductCard'
import Banner from '../assets/banner.jpeg'

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="body-section">
                <div className="banner-section">
                    <img src={Banner} alt="" draggable="false" />
                </div>
                <div className="option-section">
                    <div className="right-section">
                        <div className="list-item">
                            <span>Price</span>
                            <div className="icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="list-item">
                            <span>Review</span>
                            <div className="icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="list-item">
                            <span>Location</span>
                            <div className="icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="list-item">
                            <span>Offer</span>
                            <div className="icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="list-item">
                            <span>All Filters</span>
                            <div className="icon">
                                <FiFilter />
                            </div>
                        </div>
                    </div>
                    <div className="left-section">
                        <div className="sort">
                            <span>Sort by</span>
                            <div className="icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-section">
                    <span>Recommended For You!</span>
                    <div className="product-grid">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
