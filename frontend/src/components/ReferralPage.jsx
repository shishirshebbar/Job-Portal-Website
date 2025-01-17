import React from 'react';
import Navbar from './structure/Navbar';
import Footer from './structure/Footer';

const ReferralPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-400 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="text-center mb-12 text-white">
          <h1 className="text-5xl font-extrabold text-shadow-lg">Referral Program</h1>
          <p className="mt-4 text-lg font-semibold opacity-80">
            Leverage your network and help others land their dream jobs while earning rewards for every successful referral!
          </p>
        </header>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-center text-gray-600">
                Create an account on our platform to get started with referring others.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Referral Link</h3>
              <p className="text-center text-gray-600">
                Once you're signed up, you can share your referral link with friends, family, and colleagues.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-center text-gray-600">
                For each successful referral, you'll earn rewards such as discounts or exclusive perks!
              </p>
            </div>
          </div>
        </section>

        {/* Why Refer? Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Why Refer?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Help Your Network</h3>
              <p className="text-center text-gray-600 mb-4">By referring others, you help your friends and family find great job opportunities.</p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p className="text-center text-gray-600 mb-4">For each successful referral, you'll get exclusive perks, rewards, or discounts.</p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Build Community</h3>
              <p className="text-center text-gray-600 mb-4">By referring others, you join a community of people helping each other grow their careers.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4 text-center">Success Stories</h2>
          <div className="flex justify-center gap-8">
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4">"Thanks to the referral program, I helped my friend land their dream job, and I got a great reward!"</p>
              <p className="font-semibold text-center">ABC</p>
              <p className="text-center text-gray-500">Recruiter</p>
            </div>
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4">"I referred my colleague, and together we both enjoyed rewards from the platform! It's a win-win!"</p>
              <p className="font-semibold text-center">ABC</p>
              <p className="text-center text-gray-500">Software Engineer</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h3 className="text-2xl text-white font-bold mb-4">Ready to Start Referring?</h3>
          <p className="text-white mb-6">Sign up today and start earning rewards for each successful referral!</p>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 transition-all duration-300 focus:outline-none">
            Start Referring Now
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReferralPage;
