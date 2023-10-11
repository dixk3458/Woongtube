import React from 'react';
import { Outlet } from 'react-router-dom';
import SideComponent from '../components/SideComponent';
import SearchHeaderComponent from '../components/SearchHeaderComponent';

export default function Root() {
  return (
    <div>
      <SearchHeaderComponent />
      <SideComponent />
      <Outlet />
    </div>
  );
}
