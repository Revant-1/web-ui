import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, User, Heart, Upload, Plus, LucideIcon } from "lucide-react";
import Nav from "@/components/Nav";
import Image from "next/image";

interface MetricCardProps {
  value: string;
  unit: string;
  label: string;
  color: string;
  icon: LucideIcon;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, unit, label, color, icon: Icon }) => (
  <Card className={`p-4 ${color} text-white rounded-xl`}>
    <div className="flex justify-between items-start">
      <div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm opacity-90">{label}</div>
        <div className="text-xs opacity-75">{unit}</div>
      </div>
      <Icon className="w-6 h-6" />
    </div>
  </Card>
);

const DashboardView = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Nav />

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-gray-500">Welcome back</div>
              <h1 className="text-2xl font-bold">Arun</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">MediSage</div>
              <div className="w-10 h-10 bg-lime-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Doctor Illustration */}
            <div className="col-span-3">
              <Image
                src="/path-to-your-image/placeholder.png"
                alt="Doctor illustration"
                width={300}
                height={300}
                className="w-full"
              />
            </div>

            {/* Right Column - Charts and Metrics */}
            <div className="col-span-9 space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <MetricCard value="65" unit="bpm" label="Heart Rate" color="bg-red-400" icon={Heart} />
                <MetricCard value="120" unit="mmHg" label="Blood Pressure" color="bg-cyan-400" icon={Plus} />
                <MetricCard value="91" unit="%" label="SpO2" color="bg-blue-500" icon={User} />
                <MetricCard value="189" unit="mg/dL" label="Cholesterol levels" color="bg-orange-400" icon={Heart} />
              </div>

              {/* AI Chatbot */}
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Wellness AI Chatbot</h3>
                    <p className="bg-lime-200 p-4 rounded-lg text-sm">
                      Ask me anything about your medical reports or health tips—I&apos;m here to make your life easier and healthier! 😊
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Type something" className="flex-1" />
                  <Button className="bg-black">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Upload Section */}
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Upload className="w-6 h-6" />
                    <div>
                      <h3 className="font-bold">
                        Gain deeper insights and precision in understanding your health
                      </h3>
                      <p className="text-sm text-gray-500">
                        Analyze your reports effortlessly and stay ahead of any risks by uploading them
                        regularly for the most accurate and up-to-date analysis!
                      </p>
                    </div>
                  </div>
                  <Button className="bg-black">Upload now</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
