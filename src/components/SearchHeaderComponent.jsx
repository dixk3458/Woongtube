import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchHeaderComponent() {
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  };
  return (
    <header className="w-full flex items-center p-4 text-2xl border-b border-lightGrayBorder mb-4 dark:bg-darkDeep">
      <Link className="flex items-center" to="/">
        <img src="logo.png" alt="logo" />
        <h1 className="font-bold text-3xl dark:text-darkBasicText">
          WoongTube
        </h1>
      </Link>
      <form
        className="flex flex-1 justify-center"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className="w-7/12 p-2 outline-none bg-lightGrayBorder rounded-l-2xl text-lg"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="검색"
        />
        <button className="before:content-[''] before:w-0.5  before:h-4 before:bg-lightDeepText flex items-center gap-2 bg-lightGrayBorder px-4 rounded-r-2xl">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
