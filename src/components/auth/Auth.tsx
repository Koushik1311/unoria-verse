"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { UserLock } from "lucide-react";
import React, { useState } from "react";

export default function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-3 right-3">
      <button onClick={() => setIsOpen(!isOpen)}>
        <UserLock />
      </button>
      {isOpen && (
        <>
          <SignedOut>
            <div className="flex items-center gap-3">
              <SignInButton>
                <button className="text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-3 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-gray-900 text-white rounded-full font-medium text-sm sm:text-base h-8 sm:h-8 px-3 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      )}
    </div>
  );
}
