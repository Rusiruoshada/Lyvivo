import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Button, Form, Modal } from 'antd';

interface CheckoutFormProps {
  isModalOpen: boolean;
  onCancel: any;
}


const CheckoutForm: React.FC<CheckoutFormProps> = ({isModalOpen, onCancel}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event:any) => {
    event.preventDefault(); 

  }


  return (
    <Modal
      open={isModalOpen}
      onCancel={() => onCancel()}
      className="[&>div]:!p-0 w-full sm:!w-full md:!w-full lg:!w-[700px] p
      -10"
      closable={false}
      footer={""}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
      <Form id="payment-form" onSubmitCapture={handleSubmit}>
        <PaymentElement />
        <Button  type='primary' className='bg-[var(--primaryColor)] mt-3 w-full' >Pay Now</Button>
      </Form>
    </Modal>
  );
};

export default CheckoutForm