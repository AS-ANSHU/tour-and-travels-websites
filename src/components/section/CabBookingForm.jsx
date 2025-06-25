"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";

const tripOptions = [
  { id: "oneway", label: "Outstation One-way", title: "Book Online Cab" },
  { id: "roundtrip", label: "Outstation Round trip", title: "Book Online Cab" },
  { id: "airport", label: "Airport transfer", title: "Book Airport Taxi" },
  { id: "rental", label: "Hourly Rental", title: "Hourly Car Rental" },
];

export default function CabBookingForm() {
  const [selectedOption, setSelectedOption] = useState("oneway");

  const getTitle = () => {
    return tripOptions.find((opt) => opt.id === selectedOption)?.title;
  };

  return (
    <section
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: `url('/cabbooking.png')`,
      }}
    >
      <div className="mx-auto mb-24 w-full max-w-2xl rounded-xl bg-gradient-to-b from-blue-500 to-orange-400 p-2">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            {getTitle()}
          </h2>

          {/* Radio Buttons */}
          <div className="mb-4 flex flex-wrap gap-4">
            {tripOptions.map((option) => (
              <label
                key={option.id}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="tripType"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="accent-blue-600"
                />
                <span
                  className={`font-medium ${selectedOption === option.id ? "text-blue-600" : "text-gray-800"}`}
                >
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            {selectedOption !== "rental" && (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pickup location"
                    className="w-full rounded-md border border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-gray-600">
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drop location"
                    className="w-full rounded-md border border-gray-300 px-4 py-2"
                  />
                  <div className="absolute right-3 top-9 cursor-pointer text-xl text-gray-500">
                    ⇅
                  </div>
                </div>
                {selectedOption === "roundtrip" && (
                  <>
                    <div className="flex gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Pickup Date
                        </label>
                        <div className="font-semibold">05 May&apos;25</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Pickup Time
                        </label>
                        <div className="font-semibold">10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Return Date
                        </label>
                        <div className="font-semibold">06 May&apos;25</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Return Time
                        </label>
                        <div className="text-gray-400">
                          Anytime till 09:45 PM
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selectedOption !== "roundtrip" && (
                  <div className="flex justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Pickup Date
                      </label>
                      <div className="font-semibold">05 May&apos; 25</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Pickup Time
                      </label>
                      <div className="font-semibold">10:00 AM</div>
                    </div>
                  </div>
                )}
              </>
            )}

            {selectedOption === "rental" && (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pickup location"
                    className="w-full rounded-md border border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Pickup Date
                    </label>
                    <div className="font-semibold">05 May&apos; 25</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Pickup Time
                    </label>
                    <div className="font-semibold">10:00 AM</div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 overflow-x-auto">
                  {[
                    "1 hr (10 km)",
                    "2 hr (20 km)",
                    "3 hr (30 km)",
                    "4 hr (40 km)",
                  ].map((slot, idx) => (
                    <button
                      key={idx}
                      className="whitespace-nowrap rounded-full border border-blue-600 px-3 py-1 text-sm text-blue-600"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Search Button */}
          <button className="mt-6 w-full rounded-full bg-blue-500 py-3 font-bold text-white hover:bg-blue-600">
            SEARCH CABS
          </button>
        </div>
      </div>
    </section>
  );
}
