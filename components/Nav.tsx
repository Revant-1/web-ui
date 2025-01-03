import Link from 'next/link';
import React from 'react';
import { BarChart2, MessageSquare, FileText, Settings, User } from 'lucide-react';

const Nav = () => {
  const navItems = [
    { href: '/', icon: BarChart2, label: 'Dashboard' },
    { href: '/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/documents', icon: FileText, label: 'Documents' },
    { href: '/settings', icon: Settings, label: 'Settings' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="w-16 bg-white border-r flex flex-col items-center py-6 space-y-8">
      {navItems.map(({ href, icon: Icon, label }, index) => (
        <Link key={index} href={href} className="group flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-lime-200 transition">
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-black" aria-label={label} />
          </div>
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
