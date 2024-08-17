import { Breadcrumb } from 'antd';
import React from 'react'
import { RiPhoneFill } from 'react-icons/ri';

const ContactUs = () => {
  return (
    <div>
        <div className='flex relative'>
            <Breadcrumb className='absolute text-white' />
            <img src="images/contact page/contact page.png" alt="contact page banner" />
            <h2 className='absolute mx-10 top-16 text-white'>Your Feedback</h2>
        </div>
        <div className='mx-10 my-4'>
            <h3 className='text-2xl'>Here to Help!</h3>
            <p>Your feedback and enquiry is important to us, so we will endeavour to respond to you at our earliest. Your feedback will help us continuously improve ourselves to make it better for you and our other valued Customers.
            </p>
            <p>In the meantime if your enquiry is urgent and you require immediate assistance, our Customer Care team is here to assist you (Refer below for other ways to contact us)
            </p>
            <div className='grid grid-cols-7 text-white grid-rows-1 gap-1'>
                <div className='bg-green-600  col-span-3 flex flex-row gap-4 p-3 justify-between rounded-bl-[50px] shadow-md'>
                    <h1 className='font-bold text-[48px]'>Lyvivo</h1>
                    <div className=''>
                        <p>Jaykay Marketing Services Pvt Ltd</p>
                        <p>No:148, Vauxhall Street,</p>
                        <p>Colombo 2, Sri Lanka.</p>
                    </div>
                </div>
                <div className='bg-green-600 flex justify-center align-middle flex-col gap-3 p-3'>
                    <div className='rounded-full bg-white text-2xl w-fit shadow-md p-2 '><RiPhoneFill className='text-green-600' /></div>
                    <p>+94 11 230 3500</p>
                </div>
                <div className='bg-green-600 col-span-2'></div>
                <div className='bg-green-600 rounded-tr-[50px]'></div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;