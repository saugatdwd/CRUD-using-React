import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { addUser } from "../../services/localStorage";
import { useLocation } from "react-router-dom";


let userId = location.pathname.split("/").pop();
const data =
JSON.parse(localStorage.getItem("@users"))?.find(
  (user) => user.id === userId
) ?? {
  name: "",
  email: "",
  phoneNumber: "",
  dob: "",
  city: "",
  district: "",
  province: "",
  country: "Nepal",
  profilePicture: "",
};

const CreateUser = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const { inputValues, handleInputChange, resetForm, clearSingleValue } = useForm({...data});
  console.log(data, 'data');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{7,}$/;
    return re.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!inputValues.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!inputValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(inputValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!inputValues.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(inputValues.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    console.log(inputValues, "inputValues");

    if (Object.keys(newErrors).length === 0) {
      addUser(inputValues);
      resetForm();
      navigate("/displayuser");
    } else {
      setErrors(newErrors);
    }
  };

  const location = useLocation();

  

  // const [userData, setUserData] = React.useState({});
 

  const isEditPage =
    location.pathname.split("/")[1] === "edituser" ? true : false;


  // console.log(userData?.find((user) => user.id===userId));

  // console.log(userData);
  console.log(location.pathname.split("/")[1]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <h1>Form</h1> */}
      <div className="overflow-x-hidden px-3">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                name="name"
                type="text"
                value={inputValues.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                name="email"
                type="text"
                value={inputValues.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone Number
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={inputValues.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs italic">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Date of Birth
              </label>
              <div className="relative">
                <DatePicker
                  selected={inputValues.dob ? new Date(inputValues.dob) : Date.now()}
                  onChange={(date) => {
                    handleInputChange({target: {name: 'dob', value: new Date(date)}})
                  }}
                  id="dob"
                  name="dob"
                  type="date"
                  placeholderText="Date of birth"
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
                  ${
                    inputValues.dob ? "border-gray-700" : "border-gray-300"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-1/2 px-2 pb-4 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                name="city"
                type="text"
                value={inputValues.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
              />
            </div>
            <div className="w-1/2 px-3 mb-6 pb-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-district"
              >
                District
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="district"
                name="district"
                type="text"
                value={inputValues.district}
                onChange={handleInputChange}
                placeholder="Enter your district"
              />
            </div>
            <div className="w-1/2 px-3 py-4 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-province"
              >
                Province
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="province"
                  name="province"
                  type="text"
                  value={inputValues.province}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  <option>Province 1</option>
                  <option>Province 2</option>
                  <option>Province 3</option>
                  <option>Province 4</option>
                  <option>Province 5</option>
                  <option>Province 6</option>
                  <option>Province 7</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 px-3 py-4 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-country"
                value="Nepal"
              >
                Country
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="country"
                name="country"
                type="text"
                value={inputValues.country}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">




              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-profilePicture"
              >
                Profile Picture
              </label>
              
              <input
                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                type= 'file'
                accept=".png"
                id="profilePicture"
                value= {inputValues.profilePicture}
                name="profilePicture"
                onChange={handleInputChange}
              />

            </div>
          </div>

          <button
            className="bg-orange-400 text-white rounded-lg px-4 py-2"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            {isEditPage ? "Update" : "Create"}
          </button>

            
          {!!inputValues.profilePicture && 
            <button onClick={clearSingleValue("profilePicture")} className="bg-red-500 rounded-lg text-white ml-5">
            Clear
          </button>}
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
