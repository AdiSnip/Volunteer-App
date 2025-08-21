'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const backgroundImages = [
  '/Images/back1.jpeg',
  '/Images/back2.jpeg',
  '/Images/back3.jpeg',
  '/Images/back4.jpeg',
];

const Page = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-[-1]"
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Volunteers working together"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="block">Make a Difference in</span>
            <span className="block text-blue-400">Your Community</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-gray-200 sm:text-lg md:mt-6 md:max-w-2xl">
            Join a network of volunteers and organizations dedicated to creating positive change. Find opportunities,
            track your impact, and connect with like-minded people.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-block rounded-full bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-md transition-transform duration-150 hover:scale-105 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Page;