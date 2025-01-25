"use client";

import React, { useState, useEffect } from 'react';

const DocumentPage = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch documents from your backend API
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/documents'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Uploaded Documents</h1>
      <ul>
        {documents.map((doc, index) => (
          <li key={index} className="mb-2">
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentPage;