import React, { useState } from 'react';
import { Button, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';

const FeedbackForm = ({ transactionId }) => {
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmitFeedback = async () => {
    try {
      const response = await axios.post('http://localhost:4000/submit-feedback', {
        transactionId,
        rating,
        comments
      });
      console.log('Feedback submitted:', response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <Input
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleSubmitFeedback}>
        Submit Feedback
      </Button>
    </div>
  );
};

export default FeedbackForm;
