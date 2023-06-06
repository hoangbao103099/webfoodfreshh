import { useState } from 'react'
import '../../styles/ProductCard.scss'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'

const ProductCard = () => {
    const [heart, setHeart] = useState(false)

    const handleSetHeart = () => {
        setHeart(!heart)
    }

    return (
        <div className="card-container">
            <div className="card-image">
                <img
                    src="https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844"
                    alt=""
                    draggable="false"
                />
                <div className="icon" onClick={() => handleSetHeart()}>
                    {heart ? <AiFillHeart size={18} color="EF4653" /> : <AiOutlineHeart size={18} />}
                </div>
            </div>
            <div className="card-detail">
                <div className="intro">
                    <div className="name">IPhone 14 Pro Max</div>
                    <div className="price">
                        <span>$</span>
                        <span>999.00</span>
                    </div>
                </div>
                <div className="detail">
                    <span>Lorem ipsum dolor, sit amet</span>
                </div>
                <div className="review">
                    <div className="icon">
                        <AiFillStar size={15} color="yellow" />
                        <AiFillStar size={15} color="yellow" />
                        <AiFillStar size={15} color="yellow" />
                        <AiFillStar size={15} color="yellow" />
                        <AiFillStar size={15} color="yellow" />
                    </div>
                    <span>(121)</span>
                </div>
                <div className="add-btn">Add to Cart</div>
            </div>
        </div>
    )
}

export default ProductCard
