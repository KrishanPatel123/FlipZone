import React from 'react'
import './Header.css';
import img from './img.jpeg';
export default function Header() {
    return (
        <div>
            <div className='App-header'>
            <div className='r'>
                   <img src={img} alt="img" className='img-h' />
                </div>
                <div className='head'>
                    Hello
                </div>
                <div className='head2'>
                    <i class="fa-solid fa-location-dot" />&nbsp;Select your address
                    &nbsp;
                    <i class="fa-solid fa-magnifying-glass" />
                    <input type="text" name="name" className='input' placeholder='Search For Everythings' />
                </div>
            </div>
            <div className='subheader'>
                <div className='subhead'>Best Sellers</div>
                <div className='subhead'>Mobile</div>
                <div className='subhead'>Today's Deals</div>
                <div className='subhead'>Fashaion</div>
                <div className='subhead'>Computer</div>
                <div className='subhead'>Laptop</div>
                <div className='subhead'>Toy's</div>
                <div className='subhead'>Book</div>
                <div className='subhead'>Coupons</div>
                <div className='subhead'>Games</div>
                <div className='subhead'>Flipzon Pay</div>
                <div className='subhead'>Prime</div>
            </div >
            <div className='conternar-products'>
                <div className='image-conterbar'>
                </div>
                <div className='detials'>
                    <samp>Shirts</samp>
                    <div className='title'>
                    </div>
                </div>
            </div>
        </div>


    )

}

