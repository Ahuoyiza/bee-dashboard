import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import PaymentButton from './PaymentButton';  
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Dummy data
  const dummyCustomers = [
    { id: 'cust1', name: 'John Doe', email: 'john@example.com' },
    { id: 'cust2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: 'cust3', name: 'Mike Johnson', email: 'mike@example.com' }
  ];

  const dummyTransactions = [
    { id: 'txn1', customerId: 'cust1', amount: 100, status: 'completed' },
    { id: 'txn2', customerId: 'cust2', amount: 200, status: 'pending' },
    { id: 'txn3', customerId: 'cust3', amount: 300, status: 'failed' }
  ];

 
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers');  // Replace with your live URL
      setCustomers(response.data);  
    } catch (error) {
      console.error('Error fetching customers, using dummy data:', error);
      setCustomers(dummyCustomers);  
    }
  };

  // Fetch transactions from the backend or use dummy data on failure
  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:4000/transactions');  
      setTransactions(response.data);  
    } catch (error) {
      console.error('Error fetching transactions, using dummy data:', error);
      setTransactions(dummyTransactions);  
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchTransactions();
  }, []);

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading as="h1" size="xl" mb={5}>
          Bee Payment Dashboard
        </Heading>

        <Box mb={5}>
          <Heading as="h2" size="md">
            Customers
          </Heading>
          <List spacing={3}>
            {customers.map(customer => (
              <ListItem key={customer.id}>
                <Text>{customer.name} ({customer.email})</Text>
                {/* Render PaymentButton for each customer */}
                <PaymentButton customerId={customer.id} amount={100} currency="USD" />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Transactions
          </Heading>
          <List spacing={3}>
            {transactions.map(transaction => (
              <ListItem key={transaction.id}>
                <Text>
                  Customer ID: {transaction.customerId}, Amount: {transaction.amount}, Status: {transaction.status}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
