import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'terminal', icon: <FaCreditCard />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'connect', icon: <FaCreditCard />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'libraries', icon: <FaBook />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'help', icon: <FaBook />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'billing', icon: <FaBook />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { label: 'customers', icon: <FaBriefcase />, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ],
  },
];

export default sublinks;
