import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Fetch customers from the backend
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers'); // Use your backend's port
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  // Fetch transactions from the backend
  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:4000/transactions'); // Use your backend's port
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchTransactions();
    const interval = setInterval(() => {
      fetchCustomers();
      fetchTransactions();
    }, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
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
                <Text>Customer ID: {transaction.customerId}, Amount: {transaction.amount}, Status: {transaction.status}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
