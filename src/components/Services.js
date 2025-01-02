import React from 'react';

const Services = () => {
    return (
        <div className="bg-blue-50 min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Services</h1>
                <ul className="list-disc list-inside text-lg text-blue-700">
                    <li>Financial Assistance</li>
                    <li>Savings and Loans</li>
                    <li>Agricultural Support</li>
                    <li>Educational Programs</li>
                    <li>Community Development Projects</li>
                </ul>
            </div>
        </div>
    );
};

export default Services;