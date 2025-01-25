"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { BarChart2, MessageSquare, FileText, Settings, User, Menu } from 'lucide-react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', icon: BarChart2, label: 'Dashboard' },
    { href: '/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/document', icon: FileText, label: 'Documents' },
    { href: '/setting', icon: Settings, label: 'Settings' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div>
      {/* Mobile menu toggle */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-lime-200 rounded-full shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 h-screen w-16 bg-white border-r flex flex-col items-center py-6 space-y-8 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-16'
        } md:translate-x-0 md:static md:w-16`}
      >
        {navItems.map(({ href, icon: Icon, label }, index) => (
          <Link key={index} href={href} className="group flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-lime-200 transition">
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-black" aria-label={label} />
            </div>
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Nav;
