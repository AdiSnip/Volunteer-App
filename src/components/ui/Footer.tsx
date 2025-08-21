import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  'Product': [
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  'Resources': [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Help Center', href: '/help' },
  ],
  'Company': [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '/social/facebook.svg' },
  { name: 'Twitter', href: '#', icon: '/social/twitter.svg' },
  { name: 'Instagram', href: '#', icon: '/social/instagram.svg' },
  { name: 'LinkedIn', href: '#', icon: '/social/linkedin.svg' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Images/logo.svg" alt="Volunteer App logo" width={40} height={40} className="rounded-sm bg-white p-1" />
              <span className="text-lg font-semibold text-white">Volunteer App</span>
            </Link>
            <p className="text-sm text-gray-400">
              Connecting volunteers with opportunities to make a difference.
            </p>
            <div className="flex space-x-6">
              {/* You'll need to add your own social icons to the public folder */}
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <Image src={item.icon} alt={item.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.Product.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.Resources.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.Company.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Volunteer App, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
