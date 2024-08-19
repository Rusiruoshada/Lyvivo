import React from 'react';
import { Breadcrumb } from 'antd';
import { FaFax } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { RiPhoneFill } from 'react-icons/ri';
import ContactPageForm from './ContactPageForm.tsx';

const ContactUs = () => {
  return (
    <div>
      <div className='flex relative'>
        <Breadcrumb className='absolute text-white' />
        <img
          src='images/contact page/contact page.png'
          alt='contact page banner'
          className='h-52  '
        />
        <h2 className='absolute mx-10 top-16 text-white'>Your Feedback</h2>
      </div>
      <div className='mx-10 my-4'>
        <h3 className='text-2xl'>Here to Help!</h3>
        <p>
          Your feedback and enquiry is important to us, so we will endeavour to
          respond to you at our earliest. Your feedback will help us
          continuously improve ourselves to make it better for you and our other
          valued Customers.
        </p>
        <p>
          In the meantime if your enquiry is urgent and you require immediate
          assistance, our Customer Care team is here to assist you (Refer below
          for other ways to contact us)
        </p>
        <div className='lg:grid flex flex-col grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7  text-white gird-rows-4 sm:grid-rows-4 md:grid-rows-4 lg:grid-rows-1 gap-1 [&_p]:m-0 '>
          <div className='bg-green-600  col-span-3 flex lg:flex-row flex-col gap-4 p-3 lg:justify-evenly rounded-tr-[50px] lg:!rounded-bl-[50px] lg:!rounded-tr-none shadow-md'>
            <h1 className='font-bold text-[48px] items-center justify-center flex m-0'>
              Lyvivo
            </h1>
            <div className='flex flex-col justify-center text-center lg:!text-start'>
              <p className='m-0'>Jaykay Marketing Services Pvt Ltd</p>
              <p className='m-0'>No:148, Vauxhall Street,</p>
              <p className='m-0'>Colombo 2, Sri Lanka.</p>
            </div>
          </div>
          <div className='bg-green-600 flex justify-center items-center flex-col gap-3 p-3'>
            <div className='rounded-full bg-white text-2xl w-fit shadow-md p-2 '>
              <RiPhoneFill className='text-green-600' />
            </div>
            <p className='text-[12px]'>+94 11 230 3500</p>
          </div>
          <div className='bg-green-600  flex justify-center items-center flex-col gap-3 p-3 col-span-2'>
            <div className='rounded-full bg-white text-2xl w-fit shadow-md p-2 '>
              <MdMail className='text-green-600' />
            </div>
            <p className='text-[14px] lg:text-[14px]'>
              lyvivocustomercare.jms@lyvivo.com
            </p>
          </div>
          <div className='bg-green-600  flex justify-center items-center flex-col gap-3 p-3 rounded-bl-[50px] lg:!rounded-tr-[50px] lg:!rounded-bl-none'>
            <div className='rounded-full bg-white text-2xl w-fit shadow-md p-2 '>
              <FaFax className='text-green-600' />
            </div>
            <p className='text-wrap text-[12px]'>+94 11 230 3500</p>
          </div>
        </div>
        <div className='my-3'>
            <ContactPageForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
