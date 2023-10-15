import React from 'react';
import { Outlet } from 'react-router-dom';
import SideComponent from '../components/SideComponent';
import SearchHeaderComponent from '../components/SearchHeaderComponent';
import { DarkModeProvider } from '../context/DarkModeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col h-full ">
        <SearchHeaderComponent />
        <div className="flex flex-1">
          <SideComponent />
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
    </DarkModeProvider>
  );
}
