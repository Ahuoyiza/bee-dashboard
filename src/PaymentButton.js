import React from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

const PaymentButton = ({ customerId, amount, currency }) => {
  const handlePayment = async () => {
    try {
      const transactionFee = 0.02 * amount; // 2% transaction fee
      const totalAmount = amount + transactionFee;
      const response = await axios.post('http://localhost:4000/initiate-payment', {
        customerId,
        amount,
        currency
      });
      console.log(`Payment initiated: Total amount (including fee): ${totalAmount}`, response.data);
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <Button colorScheme="teal" onClick={handlePayment}>
      Pay {amount} {currency} (plus fee)
    </Button>
  );
};

export default PaymentButton;
