import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                    <p className="text-xl text-gray-600">
                        Building financial security through cooperation
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-6">
                        To promote the economic wellbeing of our members through sustainable cooperative practices, providing accessible financial services, and fostering a culture of saving and mutual support within the OOUTH community.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-600 mb-6">
                        To be the leading healthcare cooperative society in Ogun State, exemplifying excellence in member service, financial stability, and community impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white shadow rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Low-interest loans for members</li>
                            <li>• Competitive savings products</li>
                            <li>• Investment opportunities</li>
                            <li>• Emergency financial assistance</li>
                            <li>• Financial advisory services</li>
                            <li>• Annual dividends distribution</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Member Benefits</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Access to affordable credit facilities</li>
                            <li>• Competitive returns on savings</li>
                            <li>• Financial security through mutual support</li>
                            <li>• Regular financial education workshops</li>
                            <li>• Participation in decision-making</li>
                            <li>• Access to special welfare packages</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-8 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                    <div className="text-gray-600">
                        <p className="mb-2">Location: OOUTH Complex, Sagamu, Ogun State</p>
                        <p className="mb-2">Email: [email address]</p>
                        <p className="mb-2">Phone: [phone number]</p>
                        <p>Operating Hours: [hours]</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;