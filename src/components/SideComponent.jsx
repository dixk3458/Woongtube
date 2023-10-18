import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PiMusicNote } from 'react-icons/pi';
import { GoTrophy } from 'react-icons/go';
import { LuGamepad2 } from 'react-icons/lu';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeContext';

const categories = ['music', 'sports', 'game'];
const icons = [<PiMusicNote />, <GoTrophy />, <LuGamepad2 />];

export default function SideComponent() {
  const { category } = useParams();

  useEffect(() => {
    setFilter(category || '');
  }, [category]);

  const [filter, setFilter] = useState(undefined);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside className="flex flex-col sticky top-0 left-0 justify-between p-4 mr-12 w-3/12 text-2xl font-bold ">
      <nav className="">
        <ul className="ml-6 capitalize after:content-[''] after:block after:w-full  after:h-px after:ml-2 after:bg-gray-300 ">
          {categories.map((category, index) => {
            return (
              <li className="rounded-lg hover:bg-lightDeepText" key={index}>
                <Link
                  onClick={() => {
                    setFilter(category);
                  }}
                  className={`flex items-center my-2 p-2 gap-2 text-2xl dark:text-darkBasicText ${
                    filter === category && 'text-primary dark:text-primary'
                  }`}
                  to={`/channel/${category}`}
                >
                  {icons[index]}
                  <h3 className="leading-10 ">{category}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className="flex items-center justify-center ml-6 w-14 h-14 text-4xl bg-lightDeepText rounded-full transition-all hover:scale-110 dark:bg-darkAccentText"
        onClick={toggleDarkMode}
      >
        {!darkMode ? <BsFillSunFill /> : <BsMoonFill />}
      </button>
      <p className="ml-6 text-lightLightText dark:text-darkBasicText text-lg">
        © 2023 Jaewoong Jeong. All Rights Reserved.
      </p>
    </aside>
  );
}
