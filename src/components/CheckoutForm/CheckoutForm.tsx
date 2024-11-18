import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Form, Modal } from 'antd';

interface CheckoutFormProps{
    isOpen: boolean;

}


const CheckoutForm: React.FC<CheckoutFormProps> = (isOpen) => {
    
    const stripe = useStripe();
    const elements = useElements();

    return (
    <Modal
      open={isOpen}
      onCancel={() => onCancel({ register: false })}
      className="[&>div]:!p-0 w-full sm:!w-full md:!w-full lg:!w-[1200px]"
      closable={false}
      footer={""}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
        <Form>
            <PaymentElement/>
           
        </Form>
    </Modal>
    )
}

export default CheckoutForm