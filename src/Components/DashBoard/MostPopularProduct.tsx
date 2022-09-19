import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { preProcessFile } from 'typescript';

const MostPopularProduct: React.FC = () => {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        fetch('mostpopularproduct.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    const percent = []

    return (
        <div className='w-1/2 shadow'>
            <Card>
                {/* Most popular header */}
                <div className='mb-4 flex justify-between'>
                    <h4 className='text-[15px] font-semibold'>Most Popular Product</h4>
                    <span>:</span>
                </div>

                {/* Products main section */}
                {
                    products?.map(pro => <>
                        <div className='mt-2 flex items-center justify-between'>
                            <div className='flex'>
                                <h6 className='border m-1 mr-2 py-1 px-2 rounded'>{pro.category}</h6>
                                <div>
                                    <h4 className='m-0 font-semibold'>{pro.model}</h4>
                                    { pro.percent > 0 ? <h6 className='m-0 text-black mt-0 text-[11px]'>{pro.percent }% Increase</h6> : <h6 className='text-red-500 m-0 text-[11px]'>{ pro.percent}% Increase</h6> }
                                </div>
                            </div>
                            <h5 className='text-red-500 text-[13px]'>{pro.value}</h5>
                        </div>
                        <hr />

                    </>)
                }
                <p className='text-blue-600 mt-4 mb-0 font-semibold text-[11px]'>Show more</p>

            </Card>
        </div>
    );
};

export default MostPopularProduct;