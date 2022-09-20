import React from 'react';
import Frame from '../../Assets/frame.png'

// Props type 
type ProductInfo = {
    productName: string;
    productDate: string;
    productAuthor: string;
}

const SingleProduct = ({ productName, productDate, productAuthor }: ProductInfo) => {
    return (
        <div className='mt-3 flex justify-between mb-1'>
            <div className='flex items-center'>
                <img className='mr-3' src={Frame} width={40} height={25} alt="" />
                <div>
                    <h5 className='m-0 font-semibold'>{productName}</h5>
                    <h6 className='m-0 text-[11px] font-normal'>{productDate} <span> - {productAuthor}</span></h6>
                </div>
            </div>
            <button className='text-blue-600'>Details</button>
        </div>
    );
};

export default SingleProduct;