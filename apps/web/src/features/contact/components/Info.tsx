import React from 'react'
import ContactInfo from './ContactInfo'
import SendAMessage from './SendAMessage'

const Info = () => {
  return (
    <section id="contact" className='flex flex-col md:flex-row gap-20 pt-20 pb-25 px-15'>
        <ContactInfo/>
        <SendAMessage/>
    </section>
  )
}

export default Info