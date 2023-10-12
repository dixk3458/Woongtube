import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiMusicNote } from 'react-icons/pi';
import { GoTrophy } from 'react-icons/go';
import { LuGamepad2 } from 'react-icons/lu';

const categories = ['music', 'sports', 'game'];
const icons = [<PiMusicNote />, <GoTrophy />, <LuGamepad2 />];

export default function SideComponent() {
  const [filter, setFilter] = useState(undefined);

  return (
    <aside className="flex flex-col justify-between p-4 w-3/12 text-2xl font-bold">
      <nav className="">
        <ul className="ml-6 capitalize after:content-[''] after:block after:w-full  after:h-px after:ml-2 after:bg-gray-300 ">
          {categories.map((category, index) => {
            return (
              <li
                className={`${filter === category && 'text-primary'} `}
                key={index}
              >
                <Link
                  onClick={() => {
                    setFilter(category);
                  }}
                  className="flex items-center my-2 p-2 gap-2 text-2xl "
                  to={`/${category}`}
                >
                  {icons[index]}
                  <h3 className="leading-10">{category}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="ml-6 text-gray-300 text-lg">
        © 2023 Jaewoong Jeong. All Rights Reserved.
      </p>
    </aside>
  );
}
