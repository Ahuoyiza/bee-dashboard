import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, List, ListItem, Text, Grid, GridItem, VStack, HStack, Divider } from '@chakra-ui/react';
import PaymentButton from './PaymentButton';
import FeedbackForm from './FeedbackForm';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Dummy data for customers and transactions ife API call fails
  const dummyCustomers = [
    { id: 'cust1', name: 'John Doe', email: 'john@example.com', customerDID: 'did:example:123456789' },
    { id: 'cust2', name: 'Jane Smith', email: 'jane@example.com', customerDID: 'did:example:987654321' },
    { id: 'cust3', name: 'Mike Johnson', email: 'mike@example.com', customerDID: 'did:example:567890123' }
  ];

  const dummyTransactions = [
    { id: 'txn1', customerId: 'cust1', amount: 100, status: 'completed' },
    { id: 'txn2', customerId: 'cust2', amount: 200, status: 'pending' },
    { id: 'txn3', customerId: 'cust3', amount: 300, status: 'failed' }
  ];

  // Fetch customers 
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers, using dummy data:', error);
      setCustomers(dummyCustomers);  
    }
  };

  // Fetch transactions 
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
      <Box p={8} bg="gray.100" minHeight="100vh">
        <Heading as="h1" size="xl" textAlign="center" mb={10} color="teal.600">
          Bee Payment Dashboard
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          {/* Customers Section */}
          <GridItem>
            <Box bg="white" boxShadow="md" borderRadius="md" p={6}>
              <Heading as="h2" size="lg" mb={4} color="teal.500">
                Customers
              </Heading>
              <VStack align="stretch" spacing={4}>
                {customers.map(customer => (
                  <Box key={customer.id} p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
                    <Text fontWeight="bold" color="teal.700">
                      {customer.name} ({customer.email})
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      DID: {customer.customerDID}
                    </Text>
                    <PaymentButton customerId={customer.id} amount={100} currency="USD" />
                  </Box>
                ))}
              </VStack>
            </Box>
          </GridItem>

          {/* Transactions Section */}
          <GridItem>
            <Box bg="white" boxShadow="md" borderRadius="md" p={6}>
              <Heading as="h2" size="lg" mb={4} color="teal.500">
                Transactions
              </Heading>
              <VStack align="stretch" spacing={4}>
                {transactions.map(transaction => (
                  <Box key={transaction.id} p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" color="teal.700">
                        Transaction ID: {transaction.id}
                      </Text>
                      <Text color="gray.600">
                        Status: {transaction.status}
                      </Text>
                    </HStack>
                    <Divider my={2} />
                    <Text>
                      Amount: ${transaction.amount}
                    </Text>
                    <FeedbackForm transactionId={transaction.id} />
                  </Box>
                ))}
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
