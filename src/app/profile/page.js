'use client'
import { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
const ProfileForm = () => {
    const [loading, setLoading] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Fetch user data and update form state (simulated with useEffect)
  useEffect(() => {
    // Simulated fetch
    setFullName('John Doe');
    setEmail('john@example.com');
    setPhone('123-456-7890');
    setAddress('123 Main St');
    setZipCode('12345');
    setCity('Cityville');
    setCountry('Countryland');
  }, []); // Empty dependency array to run the effect once on mount
  setTimeout(() => {
    setLoading(false);
    console.log('Action complete!');
  }, 4000); // Simulating a 4-second action, adjust as needed

  // Handle form submission
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Perform the logic to save the updated profile data
    console.log('Form submitted:', {
      fullName,
      email,
      phone,
      address,
      zipCode,
      city,
      country,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] max-w-lg mx-auto my-4 py-4">
      {/* Full Name */}
      <h3 className='text-center text-2xl py-2'>Edit Profile</h3>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Zip Code & City (Single Row) */}
      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-600">
          Country
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Save Button */}
      <button type="submit" disabled={loading} className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700">
      Save {loading && (<BeatLoader color="#ffffff" size={8} />)}
      </button>
    </form>
  );
};

export default ProfileForm;
