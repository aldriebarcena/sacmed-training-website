'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/img/logo.png';
import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navigation = () => {
  const [dropDownProgramVisible, setDropDownProgramVisible] = useState(false);
  const dropDownRef = useRef(null);
  const toggleProgramDropdown = () => {
    setDropDownProgramVisible((prev) => !prev);
  };

  const closeProgramDropdown = () => {
    setDropDownProgramVisible(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        closeProgramDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [dropDownMoreVisible, setDropDownMoreVisible] = useState(false);
  const dropDownMoreRef = useRef(null);
  const toggleMoreDropdown = () => {
    setDropDownMoreVisible((prev) => !prev);
  };

  const closeMoreDropdown = () => {
    setDropDownMoreVisible(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (
        dropDownMoreRef.current &&
        !dropDownMoreRef.current.contains(event.target)
      ) {
        closeMoreDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside2);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside2);
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-between px-36 pt-8 pb-24">
      {/* Logo Section */}
      <Link href="/" className="w-[20%] pb-4">
        <Image className="" src={Logo} alt="Sacmed Logo" />
      </Link>

      {/* Navigation Links Section */}
      <div className="flex space-x-24 text-lg font-roboto font-bold">
        <Link href="/register" className="cursor-pointer hover:text-mainTeal">
          REGISTER
        </Link>
        <a
          href="https://fms4572.triple8.net/fmi/webd/sacmed"
          target="_blank"
          className="hover:text-mainTeal cursor-pointer"
        >
          LOGIN
        </a>

        {/* PROGRAM Dropdown */}
        <div className="relative" ref={dropDownRef}>
          <div
            className="hover:text-mainTeal cursor-pointer flex flex-row"
            onClick={toggleProgramDropdown}
          >
            PROGRAM
            <IoMdArrowDropdown className="flex h-full flex-row items-center pt-1" />
          </div>

          {dropDownProgramVisible && (
            <div className="relative">
              {/* Shadow Box */}
              <div className="absolute mt-3 w-56 bg-mainTeal text-black text-base rounded-md p-1 translate-x-1.5 translate-y-0.5 flex flex-col">
                {/* filler code to extend box */}
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
              </div>

              {/* Actual Dropdown */}
              <div className="absolute left-0 mt-2 w-56 bg-bgGray text-black text-base rounded-md p-1 flex flex-col">
                <Link
                  href="/about"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeProgramDropdown}
                >
                  ABOUT
                </Link>
                <Link
                  href="/requirements"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeProgramDropdown}
                >
                  REQUIREMENTS
                </Link>
                <Link
                  href="/payment"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeProgramDropdown}
                >
                  FEES & PAYMENT
                </Link>
                <Link
                  href="/cancellation"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeProgramDropdown}
                >
                  CANCELLATION
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* MORE Section */}
        <div className="relative" ref={dropDownMoreRef}>
          <div
            className="hover:text-mainTeal cursor-pointer flex flex-row"
            onClick={toggleMoreDropdown}
          >
            MORE
            <IoMdArrowDropdown className="flex h-full flex-row items-center pt-1" />
          </div>

          {dropDownMoreVisible && (
            <div className="relative">
              {/* Shadow Box */}
              <div className="absolute right-0 mt-3 w-56 bg-mainTeal text-black text-base rounded-md p-1 translate-x-1.5 translate-y-0.5 flex flex-col">
                {/* filler code to extend box */}
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
                <div className="px-4 py-2">.</div>
              </div>

              {/* Actual Dropdown */}
              <div className="absolute right-0 mt-2 w-56 bg-bgGray text-black text-base rounded-md p-1 flex flex-col ">
                <Link
                  href="/contact"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeMoreDropdown}
                >
                  CONTACT US
                </Link>
                <Link
                  href="/faq"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeMoreDropdown}
                >
                  FAQ
                </Link>
                <Link
                  href="/testimonials"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeMoreDropdown}
                >
                  TESTIMONIALS
                </Link>
                <Link
                  href="/gallery"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeMoreDropdown}
                >
                  GALLERY
                </Link>
                <Link
                  href="/privacy"
                  className="cursor-pointer px-4 py-2 hover:text-mainTeal"
                  onClick={closeMoreDropdown}
                >
                  PRIVACY
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
