import React from 'react';

// Props type 
type ProductInfo = {
    productName: string;
    productDate: string;
    productAuthor: string;
}

const SingleProduct = ({ productName, productDate, productAuthor }: ProductInfo) => {
    return (
        <div className='mt-3 flex justify-between'>
            <div>
                <img src="" alt="" />
                <div>
                    <h5 className='m-0 font-semibold'>{productName}</h5>
                    <h6 className='m-0 text-[11px]'>{productDate} <span> - {productAuthor}</span></h6>
                </div>
            </div>
            <button className='text-blue-600'>Details</button>
        </div>
    );
};

export default SingleProduct;