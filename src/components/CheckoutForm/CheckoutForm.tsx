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
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useState<any>('')

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/`
      }
    })

    if (error) {
      setIsMessage(error);
    }

    setIsProcessing(false)
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
      <Form id="payment-form" onSubmitCapture={handleSubmit}>
        <PaymentElement />
        <Button
          disabled={isProcessing}
          type="primary"
          className="bg-[var(--primaryColor)] mt-3 w-full"
        >
          {isProcessing ? "Processing ..." : "Pay Now"}
        </Button>
      </Form>
    </Modal>
  );
};

export default CheckoutForm;
