"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// config.autoAddCss = false;

// interface Stratagem {
//   id: number;
//   name: string;
//   code: string[];
// }

// interface CurrentStratagem {
//   id: number;
//   name: string;
//   code: string[];
//   userInput: string[];
//   progress: boolean[];
// }

export default function Home() {
  const stratagemsAll = [
    { id: 1, name: "Eagle Strafing Run", code: ["w", "d", "d"] },
    { id: 2, name: "Eagle Airstrike", code: ["w", "d", "s", "d"] },
    { id: 3, name: "Eagle Cluster Bomb", code: ["w", "d", "s", "s", "d", "s"] },
    { id: 4, name: "Eagle Napalm Airstrike", code: ["w", "d", "s", "w"] },
    { id: 5, name: "Jump Pack", code: ["s", "w", "w", "s", "w"] },
    { id: 6, name: "Eagle Smoke Strike", code: ["w", "d", "w", "s"] },
    { id: 7, name: "Eagle 110MM Rocket Pods", code: ["w", "s", "w", "a"] },
    { id: 8, name: "Eagle 500KG Bomb", code: ["w", "a", "s", "s", "s"] },
    { id: 9, name: "Orbital Precision Strikes", code: ["d", "d", "w"] },
    { id: 10, name: "Orbital Gas Strike", code: ["d", "d", "s", "d"] },
    { id: 11, name: "Orbital EMS Strike", code: ["d", "d", "a", "s"] },
    { id: 12, name: "Orbital Smoke Strike", code: ["d", "d", "s", "w"] },
    { id: 13, name: "HMG Emplacement", code: ["w", "s", "a", "d", "d", "a"] },
    {
      id: 14,
      name: "Shield Generator Relay",
      code: ["s", "w", "a", "d", "a", "s"],
    },
    { id: 15, name: "Tesla Tower", code: ["s", "w", "d", "w", "a", "d"] },
    { id: 16, name: "Gatling Barrage", code: ["d", "s", "a", "w", "w"] },
    { id: 17, name: "Airburst Strike", code: ["d", "d", "d"] },
    {
      id: 18,
      name: "120MM HE Barrage",
      code: ["d", "s", "s", "a", "s", "d", "s", "s"],
    },
    {
      id: 19,
      name: "380MM HE Barrage",
      code: ["d", "s", "s", "w", "w", "a", "s", "s", "s"],
    },
    { id: 20, name: "Walking Barrage", code: ["d", "s", "d", "s", "d", "s"] },
    { id: 21, name: "Laser Strike", code: ["d", "w", "a", "w", "d", "a"] },
    { id: 22, name: "Railcannon Strike", code: ["d", "s", "w", "s", "a"] },
    {
      id: 23,
      name: "Anti-Personnel Minefield",
      code: ["s", "a", "s", "w", "d"],
    },
    { id: 24, name: "Supply Pack", code: ["s", "a", "s", "w", "w", "s"] },
    {
      id: 25,
      name: "Grenade Launcher",
      code: ["s", "a", "s", "w", "a", "s", "s"],
    },
    { id: 26, name: "Laser Cannon", code: ["s", "a", "s", "w", "a"] },
    { id: 27, name: "Incendiary Mines", code: ["s", "a", "a", "s"] },
    { id: 28, name: "Guard Dog Rover", code: ["s", "a", "s", "w", "a", "s"] },
    {
      id: 29,
      name: "Ballistic Shield Backpack",
      code: ["s", "a", "w", "w", "d"],
    },
    { id: 30, name: "Arc Thrower", code: ["s", "d", "w", "a", "s"] },
    {
      id: 31,
      name: "Shield Generator Pack",
      code: ["s", "w", "a", "s", "d", "d"],
    },
    { id: 32, name: "Machine Gun Sentry", code: ["s", "w", "d", "d", "w"] },
    { id: 33, name: "Gatling Sentry", code: ["s", "w", "d", "a", "s"] },
    { id: 34, name: "Mortar Sentry", code: ["s", "w", "d", "d", "s"] },
    { id: 35, name: "Guard Dog", code: ["s", "w", "a", "w", "d", "s"] },
    { id: 36, name: "Autocannon Sentry", code: ["s", "w", "d", "w", "a", "w"] },
    { id: 37, name: "Rocket Sentry", code: ["s", "w", "d", "d", "a"] },
    { id: 38, name: "EMS Mortar Sentry", code: ["s", "s", "a", "a", "w"] },
    { id: 39, name: "Reinforce", code: ["w", "s", "d", "a", "w"] },
    { id: 40, name: "SOS Beacon", code: ["w", "s", "d", "w"] },
    { id: 41, name: "Super Earth Flag", code: ["s", "w", "s", "w"] },
    { id: 42, name: "Upload Data", code: ["a", "d", "w", "w", "w"] },
    {
      id: 43,
      name: "Hellbomb",
      code: ["s", "w", "a", "s", "w", "d", "s", "w"],
    },
    { id: 44, name: "Machine Gun", code: ["s", "a", "s", "w", "d"] },
    { id: 45, name: "Anti-Material Rifle", code: ["s", "a", "d", "w", "s"] },
    { id: 46, name: "Stalwart", code: ["s", "a", "s", "w", "w", "a"] },
    { id: 47, name: "Expendable Anti-Tank", code: ["s", "s", "a", "w", "d"] },
    { id: 48, name: "Recoilless Rifle", code: ["s", "a", "d", "d", "a"] },
    { id: 49, name: "Flamethrower", code: ["s", "a", "w", "s", "w"] },
    {
      id: 50,
      name: "Autocannon",
      code: ["s", "d", "a", "s", "s", "w", "w", "d"],
    },
    {
      id: 51,
      name: "Railgun",
      code: ["s", "d", "a", "s", "s", "w", "a", "s", "d"],
    },
    { id: 52, name: "Spear", code: ["s", "s", "w", "s", "s"] },
  ];

  // stratagem selection state
  const [currentCode, setCurrentCode] = useState<string[]>([]);
  const [currentGameIndex, setCurrentGameIndex] = useState<number>(0);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  //timer
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  // success message
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // stratagem selection
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCode(selectedValue === "none" ? null : selectedValue);

    // Reset current code and start from the beginning when a new code is selected
    setCurrentCode([]);
    // Set the current game index based on the selected code
    setCurrentGameIndex(
      selectedValue === null ? 0 : parseInt(selectedValue, 10) - 1
    );
  };

  // keyboard input
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const keyMap: Record<string, string> = {
        ArrowUp: "w",
        ArrowLeft: "a",
        ArrowDown: "s",
        ArrowRight: "d",
      };

      const keyPressed = keyMap[event.key] || event.key.toLowerCase();
      event.preventDefault();

      if (["w", "a", "s", "d"].includes(keyPressed)) {
        if (
          keyPressed ===
          stratagemsAll[currentGameIndex].code[currentCode.length]
        ) {
          setCurrentCode((prevCode) => [...prevCode, keyPressed]);
          if (startTime === null) {
            // Start the stopwatch on the first correct input
            setStartTime(Date.now());
          }

          if (
            currentCode.length ===
            stratagemsAll[currentGameIndex].code.length - 1
          ) {
            // Move to the next code if the current one is completed
            // setCurrentGameIndex((prevIndex) => prevIndex + 1);
            setStartTime(null); // Reset the stopwatch
            setCurrentCode([]);

            // Display success message
            const message = `Tactical stratagem recieved ${stratagemsAll[currentGameIndex].name} enroute clear the area! Time: ${formattedTime}`;
            setSuccessMessage(message);

            // Clear success message after a few seconds
            setTimeout(() => {
              setSuccessMessage(null);
            }, 9000);
          }
        } else {
          // Reset if the user makes a mistake
          setCurrentCode([]);
          setStartTime(null); // Reset the stopwatch
        }
      }
    },
    [currentCode, currentGameIndex]
  );

  useEffect(() => {
    // Update elapsed time every 100 milliseconds
    const intervalId = setInterval(() => {
      if (startTime !== null) {
        setElapsedTime(Date.now() - startTime);
      }
    }, 100);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTimeComponent = (value: number) =>
    value.toString().padStart(2, "0");

  const minutes = formatTimeComponent(Math.floor(elapsedTime / 60000));
  const seconds = formatTimeComponent(Math.floor((elapsedTime % 60000) / 1000));
  const milliseconds = elapsedTime % 1000;
  const formattedTime = `${minutes}:${seconds}.${milliseconds
    .toString()
    .padStart(3, "0")}`;

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Remove event listener when component unmounts
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  // Icon color
  const getIconColor = (key: string, index: number) => {
    if (currentCode[index] === key) {
      return "green";
    }
    return "white";
  };

  // Icon selection
  const getIconForKey = (key: string) => {
    switch (key) {
      case "w":
        return faArrowUp;
      case "s":
        return faArrowDown;
      case "a":
        return faArrowLeft;
      case "d":
        return faArrowRight;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8 rounded-md shadow-md">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Stratagem Practice Tool</h1>
        <div className="mb-4">
          {/* <label
            htmlFor="codeSelect"
            className="block text-sm font-medium mb-2"
          >
            Select a code to practice:
          </label> */}
          <select
            id="codeSelect"
            onChange={handleSelectChange}
            value={selectedCode || "none"}
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 text-2xl font-bold mb-4"
          >
            <option value="none" className="text-gray-500 text-2xl font-bold mb-4">
              Select Code
            </option>
            {stratagemsAll
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((stratagem) => (
                <option
                  id="stratagemSelect"
                  key={stratagem.id}
                  value={stratagem.id.toString()}
                  className="text-white text-2xl font-bold mb-4"
                >
                  {stratagem.name}
                </option>
              ))}
          </select>
         
        </div>
        {selectedCode !== null && (
          <>
            {/* <h1 className="text-2xl font-bold mb-4">
              {stratagemsAll[currentGameIndex].name}
            </h1> */}
            <div className="flex items-center mb-4">
              {stratagemsAll[currentGameIndex].code.map((key, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={getIconForKey(key)!}
                  style={{
                    color: getIconColor(key, index),
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
              ))}
              {successMessage && (
                <p className="ml-4 text-green-500">{successMessage}</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
