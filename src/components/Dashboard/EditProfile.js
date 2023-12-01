import { GeneralContext } from "@/context/TabMenu";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfile = () => {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isUserDataLoading, setUserDataLoading] = useState(false);
  const notify = (status) => toast(status);
  const get_user_id = () => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      return localStorage.getItem("user_id");
    }
  };


  const uploadImage = async ( file) => {
    // alert('jhvjhvjhv')
    try {
      const formData = new FormData();
      formData.append('key', "7b2df886bbb1704f6ffd66486cd13fdb");
      formData.append('image', file);
  
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('result'+JSON.stringify(result))
      console.log('url:=> '+result.data.url)
      setSelectedImage(result.data.url)
      return result;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  
  const updateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users/" +
        localStorage.getItem("user_id"),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            presentAddress,
            permanentAddress,
            zipCode,
            city,
            country,
            'image':selectedImage
          }),
        }
      );
      if (response.ok) {
        const { success, data } = await response.json();
        if (success) {
          setLoading(false);
          notify("User Updated!!");
        } else {
          notify("Failed To update Profile!!");
        }
      } else {
        setLoading(false);
        notify("Failed To update user!!");
        console.log(response);
      }
    } catch (er) {
      setLoading(false);
      notify("Error!!" + er);
    }
  };
  const getCurrentUserDetails = async () => {
    // e.preventDefault();
    setUserDataLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users/" +
        localStorage.getItem("user_id"),
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { success, data } = await response.json();
        if (success) {
          setUserDataLoading(false);
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setEmail(data.email);
          setPhone(data.phone);
          setPresentAddress(data.presentAddress);
          setPermanentAddress(data.permanentAddress);
          setZipCode(data.zipCode);
          setCity(data.city);
          setCountry(data.country);
          setSelectedImage(data.image);
          // notify("User got!!");
        } else {
          // notify("Failed To get Profile!!");
        }
      } else {
        setUserDataLoading(false);
        notify("Failed To get user!!");
        console.log(response);
      }
    } catch (er) {
      setUserDataLoading(false);
      notify("Error!!" + er);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Use the file for further processing, e.g., uploading to a server or updating state
      // setSelectedImage(file);
      uploadImage(file);
      // If you want to preview the selected image, you can use FileReader
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        // Use imageUrl for previewing the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = () => {
    // Implement logic for editing/updating the image (e.g., uploading to a server)

    // For demonstration purposes, log the selected image
    console.log("Selected Image:", selectedImage);
  };
  // Fetch user data and update form state (simulated with useEffect)
  useEffect(() => {
    // Simulated fetch
    // setFirstName('John');
    // setLastName('Doe');
    // setEmail('john@example.com');
    // setPhone('123-456-7890');
    // setPermanentAddress('123 Main St');
    // setPresentAddress('123 Main St');
    // setZipCode('12345');
    // setCity('Cityville');
    // setCountry('Countryland');
    getCurrentUserDetails();
  }, []); // Empty dependency array to run the effect once on mount

  setTimeout(() => {
    setLoading(false);
    console.log("Action complete!");
  }, 4000); // Simulating a 4-second action, adjust as needed

  // Handle form submission
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Perform the logic to save the updated profile data
    console.log("Form submitted:", {
      firstName,
      email,
      phone,
      presentAddress,
      zipCode,
      city,
      country,
    });
  };
  const imgBBKey = "7b2df886bbb1704f6ffd66486cd13fdb";
  return (
    <>
      {isUserDataLoading && <BeatLoader className="flex items-center justify-center text-center"  color="#005A9C" size={16} />}
    {!isUserDataLoading && ( <div className="grid grid-cols-4">
        {/* Left Column */}
        <div className="col-span-1 text-center flex flex-col items-center justify-center rounded-md">
          {/* Display selected image or default text */}
          {selectedImage ? (
            // <img
            //   src={URL.createObjectURL(selectedImage)}
            //   alt="Selected"
            //   className="w-full h-full rounded-md object-cover"
            // />
            <img
              src={selectedImage}
              alt="Selected"
              className="w-200 h-200 rounded-md object-cover"
            />
          ) : (
            "Image"
          )}
          {/* Hidden file input for image upload */}
          <input
            id="uploadImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            // style={{ display: 'none' }}
          />

          {/* Button to trigger image upload */}
          <h4
            className="text-center cursor-pointer py-2"
            onClick={handleEditImage}
          >
            Edit Image
          </h4>
        </div>

        {/* Right Column */}
        <div className="col-span-3">
          <ToastContainer />
          <form onSubmit={updateUser} className="w-full max-w-lg mx-auto py-4">
            {/* First Name*/}
            <h3 className="text-center text-2xl pt-2 pb-4">Edit Profile</h3>

            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Permanent Address
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
                <label
                  htmlFor="presentAddress"
                  className="block text-sm font-medium text-gray-600"
                >
                  Present Address
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
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600"
                >
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
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
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
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Save {isLoading && <BeatLoader color="#ffffff" size={8} />}
            </button>
          </form>
        </div>
      </div>
      )} 
    </>
  );
};

export default EditProfile;
