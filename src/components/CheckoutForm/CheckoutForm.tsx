import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Form, Modal } from 'antd';

interface CheckoutFormProps {
  isModalOpen: boolean;
  onCancel: any;
}


const CheckoutForm: React.FC<CheckoutFormProps> = ({isModalOpen, onCancel}) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => onCancel}
          className="[&>div]:!p-0 w-full sm:!w-full md:!w-full lg:!w-[700px] p
      -10"
      closable={false}
      footer={""}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
      <Form>
        <PaymentElement />
      </Form>
    </Modal>
  );
};

export default CheckoutForm