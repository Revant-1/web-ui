"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare, User } from 'lucide-react';
import Nav from '@/components/Nav';

const MediSage = () => {
  const [inputValue, setInputValue] = useState('');


  const FeatureCard = ({ title, children }) => (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          {children}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className=" bg-white p-4 border-r">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
           
            <span className="text-xl font-semibold">MediSage</span>
          </div> 
           <Nav />
        
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-lime-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold">MediSage</h1>
            </div>
            <p className="text-gray-600 italic">
              "Your Personal Health Companion: Analyze, Predict, and Guide for Better Wellbeing"
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard title="Example">
              <div className="space-y-4">
                <p className="p-3 bg-gray-50 rounded-lg">
                  "Here's my MRI report, can you review it and provide insights?"
                </p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  "Can you compare my blood test from 6 months ago with the recent one?"
                </p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  "I have nausea, fatigue, and loss of appetite. Could this be a sign of something serious?"
                </p>
              </div>
            </FeatureCard>

            <FeatureCard title="Capabilities">
              <div className="space-y-4">
                <p className="p-3 bg-gray-50 rounded-lg">
                  Can analyze and summarize medical reports (blood tests, X-rays, MRIs, etc.)
                </p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  Provide lifestyle and diet advice to improve health
                </p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  Compare current and previous medical reports to track health changes
                </p>
              </div>
            </FeatureCard>
          </div>

          {/* Chat input */}
          <div className="fixed bottom-0 left-64 right-0 p-4 bg-white border-t">
            <div className="max-w-4xl mx-auto flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something"
                className="flex-1"
              />
              <Button variant="default" className="bg-black">
                <MessageSquare className="w-4 h-40" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediSage;