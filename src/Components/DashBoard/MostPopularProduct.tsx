import React, { useState, useEffect } from 'react';
import Icon from '../../Assets/Icon.png'

const MostPopularProduct  = () => {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        fetch('mostpopularproduct.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    return (
        <div className='mb-4 dark:bg-[#15202B] p-4 md:p-7 dark:border-0 border rounded md:mb-0 md:w-1/2 shadow'>
                {/* Most popular header */}
                <div className='mb-4 flex justify-between'>
                    <h4 className='text-[19px] font-semibold dark:text-white'>Most Popular Product</h4>
                    <span> <img height={2} width={3} src={Icon} alt='' /></span>
                </div>

                {/* Products main section */}
                {
                    products?.map(pro => <>
                        <div className='mt-2 flex items-center justify-between'>
                            <div className='flex'>
                                <h6 className='border m-1 mr-2 py-1 px-2 rounded dark:text-white'>{pro.category}</h6>
                                <div>
                                    <h4 className='m-0 font-semibold dark:text-white'>{pro.model}</h4>
                                    { pro.percent > 0 ? <h6 className='m-0 text-black mt-0 text-[11px] font-normal dark:text-white'>{pro.percent }% Increase</h6> : <h6 className='text-red-500 m-0 text-[11px] font-normal'>{ pro.percent}% Increase</h6> }
                                </div>
                            </div>
                            <h5 className='text-red-500 text-[13px] '>{pro.value}</h5>
                        </div>
                        <hr />

                    </>)
                }
                <p className='text-blue-600 mt-4 mb-0 font-semibold text-[11px]'>Show more</p>
        </div>
    );
};

export default MostPopularProduct;