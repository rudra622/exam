import React from 'react'
import { useSelector } from 'react-redux'

function Buyproduct() {
    const {Product} =useSelector(state => state.productReducer)
  return (
    <>
    <div className="container">
                <h1 className='text-center m-5'>Buy Product</h1>
                <div className="row">
                    {
                        Product.map((pros) => {
                            return (

                                <div className='col-4 shadow mb-3'>
                                    <div className="box-main">
                                        <div className='t-shirt-img'>
                                            <img src="img/slider2.jpg" className='w-100' alt="" />
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <h4 className='shirt-text'>{pros.title}</h4>
                                            <p className='price-text'>price :
                                                <span>{pros.price}</span>
                                            </p>
                                        </div>
                                        <p className='date'>{pros.date}</p>
                                        <p className='details'>{pros.details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default Buyproduct