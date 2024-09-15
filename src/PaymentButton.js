import React from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

const PaymentButton = ({ customerId, amount, currency }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:4000/initiate-payment', {
        customerId,
        amount,
        currency
      });
      console.log('Payment initiated:', response.data);
      // You could show a success message, update transaction history, etc.
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <Button colorScheme="teal" onClick={handlePayment}>
      Pay {amount} {currency}
    </Button>
  );
};

export default PaymentButton;
