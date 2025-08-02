import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
   <>
   <Header />
   <div className='container mt-5'>
    <div className='p-5 bg-light-dark rounded-3 text-center'>
        <h1 className='text-light-blue'>Stock Prediction Portal</h1>
        <p className='text-light-blue lead'>This stock prediction portal is a platform for predicting the future price of a stock. It uses machine learning algorithms to predict the future price of a stock. It forecasts future stock prices based on historical data and other relevant factors such as 100-day and 200-day moving averages, essential indicators for technical analysis, widely used by investors and traders to make informed decisions.</p>
        <Button text='Login' class='btn-outline-info' />
    </div>
   </div>
    <Footer />
   </>
  )
}

export default Main