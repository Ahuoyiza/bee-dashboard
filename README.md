# Bee Dashboard

## Overview

The **Bee Dashboard** is a frontend interface built with React.js that allows businesses to test and integrate the Bee payment processor. It provides a clean UI for viewing customers, initiating payments, tracking transactions, and submitting feedback on services.

This dashboard is an essential part of the Bee ecosystem, enabling developers and businesses to experience how Bee can be used as a payment processing tool in real-world applications.

---

## Features

- **Customer Management**: View registered customers and their details.
- **Payment Initiation**: Initiate payments, calculate transaction fees, and see real-time processing.
- **Transaction Tracking**: Track transaction statuses for all customers.
- **Feedback System**: Submit and view customer feedback for transactions.

---

## Setup

To set up the Bee Dashboard locally, follow the steps below.

### Step 1: Clone the Repository

First, clone the Bee Dashboard submodule from the main Bee payment processor project.

```
git clone https://github.com/your-repo/bee-dashboard.git
```

### Step 2: Install Dependencies

Navigate into the `bee-dashboard` folder and install all the required dependencies.

```
cd bee-dashboard
npm install
```

### Step 3: Running the Dashboard

Start the Bee Dashboard locally to begin testing.

```
npm start
```

This will open the dashboard on `http://localhost:3000`.

---

## Integration with Bee Payment Processor

The Bee Dashboard is designed to work seamlessly with the Bee Payment Processor. The main purpose of this dashboard is to:

1. Allow businesses to **test** how Bee integrates into their payment flows.
2. Provide a **user-friendly interface** to manage customer payments, feedback, and transaction tracking.

Ensure that the Bee backend (server) is running so the dashboard can interact with the payment API.

---

## Key Components

- **Customer List**: Displays a list of registered customers with their DID (Decentralized Identifiers) and Verifiable Credentials (VCs).
- **Payment Button**: Simulate initiating a payment, complete with transaction fee calculation.
- **Transaction List**: View and track the status of all ongoing and completed transactions.
- **Feedback Form**: Customers can submit feedback for each transaction, and it is stored and displayed on the dashboard.

---

## Limitations

- **No Real Transactions**: Since this project operates in a sandbox environment, no real currency is exchanged.
- **In-Memory Data**: Data, such as customers and transactions, is stored in memory, making it unsustainable for large-scale production.

---

## Future Enhancements

- **Persistent Database**: Upgrade to a real database (e.g., MongoDB) to store customer and transaction data.
- **Enhanced UI**: Add more visual features and improve the dashboard's overall UX.
- **Real Currency Support**: Integrate with real financial institutions (PFIs) to support live transactions.

---
