import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    
      <div className='container'>
          <div className='p-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>Stock Prediction Portal</h1>
              <p className='text-light lead'>The "filler" text we know today has been altered over the years (in fact "Lorem" isn't actually a Latin word. It is suggested that the reason that the text starts with "Lorem" is because there was a page break spanning the word "Do-lorem". If you a re looking for a translation of the text, it's meaningless. The original text talks about the pain and love involved in the pursuit of pleasure or something like that.</p>
              <Button text= 'Login' class= 'btn-outline-info' url="/login"/>
          </div>

      </div>
    
    </>
  )
}

export default Main