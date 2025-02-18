"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('ONNTFL').then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Wealthsimple Referral - Start Investing Today</title>
        <meta
          name="description"
          content="Join Wealthsimple using my referral link and get a cash bonus when you sign up and fund your account. Start investing easily and affordably."
        />
        <meta
          name="keywords"
          content="Wealthsimple, Wealthsimple referral, investing, cash bonus, sign up"
        />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Start Investing with Wealthsimple
          </h1>
          <p className="text-lg mb-8">
            Join Wealthsimple using my referral link and get a <strong>$25 cash bonus</strong> when you sign up and fund your account.
          </p>
          <a
            href="https://www.wealthsimple.com/invite/ONNTFL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Get Your $25 Bonus
          </a>
          <div className="mt-6">
            <p className="text-lg mb-2">Or use referral code:</p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                value="ONNTFL"
                readOnly
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleCopyClick}
                className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition duration-300"
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Wealthsimple?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/icons/low-fees.png" // Replace with your own icon
                alt="Low Fees"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
              <p className="text-gray-600">
                Wealthsimple offers some of the lowest fees in the industry, helping you keep more of your money.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/icons/easy-to-use.png" // Replace with your own icon
                alt="Easy to Use"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Their intuitive platform makes investing simple, even for beginners.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/icons/socially-responsible.png" // Replace with your own icon
                alt="Socially Responsible"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Socially Responsible</h3>
              <p className="text-gray-600">
                Invest in portfolios that align with your values, like clean energy and gender diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Investing?
          </h2>
          <p className="text-lg mb-8">
            Sign up for Wealthsimple today using my referral link and get a <strong>$25 cash bonus</strong> when you fund your account.
          </p>
          <a
            href="https://www.wealthsimple.com/invite/ONNTFL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Get Your $25 Bonus
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Wealthsimple Referral. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Disclaimer: This website is not affiliated with Wealthsimple. I may earn a commission if you sign up using my referral link.
          </p>
        </div>
      </footer>
    </div>
  );
}