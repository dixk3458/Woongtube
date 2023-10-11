import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

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
    <header>
      <a href="/">
        <img src="logo.png" alt="" />
        <h1>WoongTube</h1>
      </a>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="검색"
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
