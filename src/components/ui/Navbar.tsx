'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://docs.pingping.io', label: 'Docs', isExternal: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" aria-label="Home" className="flex-shrink-0">
            <Image src="/Images/logo.svg" height={40} width={40} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.isExternal ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={`font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900 ${pathname === link.href ? 'text-blue-600' : ''}`}>
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Login/Signup Buttons */}
        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <Link href="/login" className="inline-flex items-center rounded-md px-4 py-2 text-base font-medium text-blue-600 transition-colors duration-150 p-1 hover:text-blue-500 focus:outline-none">
            Login
          </Link>
          <Link href="/signup" className="inline-flex items-center rounded-md border border-transparent bg-blue-600  text-base font-medium text-white shadow-sm transition-colors duration-150 hover:bg-blue-500 focus:outline-none p-1 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="-mr-2 flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="Open main menu"
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              {/* Mobile Logo */}
              <Link href="/" aria-label="Home">
                <Image src="https://www.svgrepo.com/show/491978/gas-costs.svg" height={40} width={40} alt="Logo" />
              </Link>
              {/* Mobile Close Button */}
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  aria-label="Close main menu"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link) =>
                link.isExternal ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900">
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="space-y-2 border-t border-gray-200 px-5 py-4">
              <Link href="/signup" className="block w-full rounded-md bg-blue-600 px-5 py-3 text-center font-medium text-white shadow-md hover:bg-blue-700">
                Get started
              </Link>
              <p className="text-center text-base font-medium text-gray-500">
                Existing user?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
