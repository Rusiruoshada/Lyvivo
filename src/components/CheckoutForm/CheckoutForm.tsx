import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Button, Form, Modal } from "antd";

interface CheckoutFormProps {
  isModalOpen: boolean;
  onCancel: any;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  isModalOpen,
  onCancel,
}) => {

  const [form] = Form.useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useState<any>('')

  const onFinish = async (event:any) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/api/checkout`, // create a page for show all cart product show that perches
        },
      });
      if (error) setIsMessage(error.message);
      
    } catch (error) {
      console.log(isMessage);
      console.log(error);
      setIsMessage(error.message);
    }

    setIsProcessing(false);
  };

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
      <Form
        id="payment-form"
        onFinish={onFinish}
        form={form}
        name="checkoutForm"
      >
        <PaymentElement />
        <Button
          disabled={isProcessing || !stripe}
          type="primary"
          className="bg-[var(--primaryColor)] mt-3 w-full"
          htmlType="submit"
          onClick={onFinish}
        >
          {isProcessing ? "Processing ..." : "Pay Now"}
        </Button>
      </Form>
    </Modal>
  );
};

export default CheckoutForm;
