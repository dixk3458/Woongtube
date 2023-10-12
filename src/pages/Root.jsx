import React from 'react';
import { Outlet } from 'react-router-dom';
import SideComponent from '../components/SideComponent';
import SearchHeaderComponent from '../components/SearchHeaderComponent';

export default function Root() {
  return (
    <div className="flex flex-col h-full ">
      <SearchHeaderComponent />
      <div className="flex flex-1">
        <SideComponent />
        <Outlet />
      </div>
    </div>
  );
}
