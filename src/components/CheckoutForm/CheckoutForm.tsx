import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Form } from 'antd';

const CheckoutForm: React.FC = () => {
    
    const stripe = useStripe();
    const elements = useElements();

    return (
        
        <Form>
            <PaymentElement/>
           
        </Form>
    )
}

export default CheckoutForm