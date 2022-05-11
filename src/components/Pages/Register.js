import RegisterHeader from "../Header/RegisterHeader";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import DownloadModal from "../Modal/Modal";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm();
  const [qrData, setQrData] = useState("");
  const [formData, setFormData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onSubmit = (data) => {
    setFormData(data);
    setQrData(
      `Name: ${data.fullName}; Email: ${data.email}; Phone: ${data.phone_number};`
    );
    setModalIsOpen(true);
    reset();
  };

  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      canvas.width = 500;
      canvas.height = 500;
      const pdf = new jsPDF({
        orientation: "l",
        unit: "pt",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "png", 100, 0, canvas.width, canvas.height);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <RegisterHeader />

      <DownloadModal openModal={modalIsOpen} close={() => setModalIsOpen(false)} >
        <div>
          <div
            id="printArea"
            ref={inputRef}
            style={{
              width: "133mm",
              minHeight: "133mm",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {qrData?.length > 0 && (
              <QRCode id="qrCode" className="qrCode" value={qrData} />
            )}
            {formData?.fullName && <h1>{formData?.fullName}</h1>}
          </div>
        </div>
        <div>
          <button type=" button" className="w-full bg-gradient-to-r from-mainPink to-mainPurple focus:outline-none transition duration-150 ease-in-out rounded text-white px-8 py-4 text-sm" onClick={printDocument}>Print</button>
        </div>
      </DownloadModal>
      <form id="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white :bg-gray-800">
          <div className="container mx-auto bg-white :bg-gray-800 mt-10 rounded px-4">
            <div className="mx-auto pt-4">
              <div className="container mx-auto">
                <div className="mx-auto lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="FullName"
                    className="pb-2 text-base font-normal text-[#808080]"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    id="FullName"
                    name="fullName"
                    className="border border-[#CCCCCC] outline-none  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-gray-600 placeholder-gray-300 text-gray-500 "
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <div className="flex  items-center pt-1 text-red-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">Name is required</p>
                    </div>
                  )}
                </div>
                <div className="mx-auto lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="Email"
                    className="pb-2 text-base font-normal text-[#808080]"
                  >
                    Email
                  </label>

                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="text"
                    id="Email"
                    name="email"
                    className="pl-3 py-3 w-full border border-[#CCCCCC] outline-none   shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-gray-600 placeholder-gray-300 text-gray-500 "
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <div className="flex  items-center pt-1 text-red-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">{errors.email.message}</p>
                    </div>
                  )}
                </div>
                <div className="mx-auto lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="phone_number"
                    className="pb-2 text-base font-normal text-[#808080]"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone_number", {
                      required: "Phone number is required",
                      minLength: {
                        value: 8,
                        message: "Phone Number Too Short",
                      },
                      maxLength: {
                        value: 13,
                        message: "Phone number too long",
                      },
                    })}
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    className="border border-[#CCCCCC] outline-none  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-gray-600 placeholder-gray-300 text-gray-500 "
                    placeholder="+1 (555) 555-5555"
                  />
                  {errors.phone_number && (
                    <div className="flex  items-center pt-1 text-red-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">{errors.phone_number.message}</p>
                    </div>
                  )}
                </div>
                <div className="mx-auto lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="phone_number"
                    className="pb-2 text-base font-normal text-[#808080]"
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    className="border bg-transparent border-[#CCCCCC] focus:border-gray-600   pl-3 py-3 shadow-sm rounded text-sm focus:outline-none  placeholder-gray-500 text-gray-500 "
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>

                <div className="mx-auto lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <div className="flex items-center pb-2">
                    <label
                      htmlFor="dob"
                      className=" text-base font-normal text-[#808080]"
                    >
                      Date of Birth
                    </label>
                  </div>
                  <input
                    {...register("date_of_birth", {
                      required: "Please select your date of birth",
                    })}
                    type="date"
                    name="date_of_birth"
                    id="dob"
                    className="border border-[#CCCCCC] outline-none  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-gray-600 placeholder-gray-300 text-gray-500 "
                  />
                  {errors.date_of_birth && (
                    <div className="flex  items-center pt-1 text-red-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">{errors.date_of_birth.message}</p>
                    </div>
                  )}
                </div>
                <div className="mx-auto lg:w-1/2 md:w-1/2  flex-col mb-6 w-full  sm:px-0 bg-white flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-mainPink to-mainPurple focus:outline-none transition duration-150 ease-in-out rounded text-white px-8 py-4 text-sm"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
