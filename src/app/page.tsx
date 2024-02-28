"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

interface Stratagem {
  id: number;
  name: string;
  code: string[];
}

interface CurrentStratagem {
  id: number;
  name: string;
  code: string[];
  userInput: string[];
  progress: boolean[];
}

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

  const [currentStratagemIndex, setCurrentStratagemIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [isGameActive, setIsGameActive] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (
        [
          "w",
          "a",
          "s",
          "d",
          "arrowup",
          "arrowleft",
          "arrowdown",
          "arrowright",
        ].includes(key)
      ) {
        setUserInput((prevInput) => [...prevInput, key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput, isGameActive]);

  const gameStratagem: CurrentStratagem = {
    id: stratagemsAll[currentStratagemIndex].id,
    name: stratagemsAll[currentStratagemIndex].name,
    code: stratagemsAll[currentStratagemIndex].code,
    userInput: userInput,
    progress: [],
  };

  useEffect(() => {
    const currentStratagem = stratagemsAll[currentStratagemIndex];

    console.log(`Game stratagem: `, gameStratagem);

    // Check if the last key pressed matches the expected key in the sequence
    const lastKey = userInput[userInput.length - 1];
    const expectedKey = gameStratagem.code[userInput.length - 1];

    if (lastKey !== expectedKey) {
      console.log(`Incorrect key! Resetting input.`);
      setUserInput([]); // Reset user input for the current stratagem
      return; // Exit the function to avoid further processing for incorrect input
    }

    currentStratagem.code.forEach((_, index) => {
      console.log(`Checking key at index ${index}`);
      gameStratagem.progress[index] =
        userInput[index] === currentStratagem.code[index];
    });

    const isInputComplete = userInput.length === gameStratagem.code.length;

    if (isInputComplete) {
      console.log(`Correct! Moving to the next stratagem.`);
      setCurrentStratagemIndex((prevIndex) => prevIndex + 1);
      setUserInput([]); // Reset user input for the next stratagem
    }
  }, [userInput, currentStratagemIndex, stratagemsAll]);

  const getIconForKey = (key: string) => {
    switch (key) {
      case "w":
      case "arrowup":
        return faArrowUp;
      case "a":
      case "arrowleft":
        return faArrowLeft;
      case "s":
      case "arrowdown":
        return faArrowDown;
      case "d":
      case "arrowright":
        return faArrowRight;
      default:
        return null; // You may want to handle other keys as needed
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1 className="text-4xl font-bold mb-8">Stratagem Practice Tool</h1>
          <p className="text-2xl mb-4">
            Current stratagem: {gameStratagem.name}
          </p>
          <p className="text-2xl">
            Current code:{" "}
            {gameStratagem.code.map((key, index) => (
              ( console.log(`gameStratagem.progress[${index}]`, gameStratagem.progress[index]),
              <FontAwesomeIcon
                className={`text-2xl inline-block mx-1 ${
                  gameStratagem.progress[index]
                    ? "text-green-400"
                    : "text-red-400"
                }`}
                key={index}
                icon={getIconForKey(key)!}
              />)
            ))}
          </p>
          <p className="text-2xl">
            Current input:{" "}
            {gameStratagem.userInput.map((key, index) => (
              <FontAwesomeIcon
                className="text-2xl inline-block mx-1"
                key={index}
                icon={getIconForKey(key)!}
              />
            ))}
          </p>

          <p className="text-2xl">
            Current Object: {`${JSON.stringify(gameStratagem)}`}
          </p>
        </div>
      </div>
    </main>
  );
}
