import React, { useState, useEffect } from 'react';
import { getData } from '../services/requests';
import '../styles/historic.css';

export default function Historic() {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getData('/messages');
        const sortedMessages = response
          .map((message) => ({
            content: message.content,
            from: message.from === 'User' ? 'User' : 'Bot',
            userId: message.userId,
            time: new Date(message.published).toLocaleString(),
          }))
          .sort((a, b) => new Date(a.time) - new Date(b.time));
        setConversation(sortedMessages);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMessages();
  }, []);

  const exportToCSV = () => {
    const groupedMessages = conversation.reduce((groups, message) => {
      if (!groups[message.userId]) {
        groups[message.userId] = [];
      }
      groups[message.userId].push(message);
      return groups;
    }, {});

    const csvContent = Object.keys(groupedMessages)
      .map((userId) => {
        const userMessages = groupedMessages[userId];
        const userConversation = [
          `Conversation userId ${userId} - ${userMessages[0].time}`,
          ...userMessages.map(
            (message) => `${message.from} - ${message.content},${message.time}`
          ),
        ];
        return userConversation.join('\n');
      })
      .join('\n\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'conversation_export.csv');
    link.click();
  };

  return (
    <div className="historic-container">
      <h1 className="historic-title">Export Conversation History</h1>
      <button className="export-button" onClick={exportToCSV}>
        Export to CSV
      </button>
    </div>
  );
}
