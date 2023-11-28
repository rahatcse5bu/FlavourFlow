import { GeneralContext } from '@/context/General';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

const EditProfile = () => {
  const [loading, setLoading] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Fetch user data and update form state (simulated with useEffect)
  useEffect(() => {
    // Simulated fetch
    setFirstName('John');
    setLastName('Doe');
    setEmail('john@example.com');
    setPhone('123-456-7890');
    setPermanentAddress('123 Main St');
    setPresentAddress('123 Main St');
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
      firstName,
      email,
      phone,
      presentAddress,
      zipCode,
      city,
      country,
    });
  };

  return (
    <>
      <div className='grid grid-cols-4'>
        {/* Left Column */}
        <div className='col-span-1 text-center flex flex-col items-center justify-center rounded-md'>
        <div className='w-40 h-40 bg-gray-400 rounded-md flex items-center justify-center'>
          Image
        </div>
        <h4 className='text-center py-2'>Edit Image</h4>
        </div>

        {/* Right Column */}
        <div className='col-span-3'>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto py-4">
            {/* First Name*/}
            <h3 className='text-center text-2xl pt-2 pb-4'>Edit Profile</h3>

            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
 
           {/* Email & Phone (Single Row) */}
           <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
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
              <div className="w-1/2 ml-2">
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
            </div>


            {/* Permanent Address & Present (Single Row) */}
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
               Permanent  Address
              </label>
              <input
                type="text"
                id="permanentAddress"
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="w-1/2 mr-2">
              <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-600">
               Present  Address
              </label>
              <input
                type="text"
                id="presentAddress"
                value={presentAddress}
                onChange={(e) => setPresentAddress(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default EditProfile;
