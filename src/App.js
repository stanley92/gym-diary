import React from 'react';
import TopMenuContainer from './components/top-menu/Container';
import { Outlet } from "react-router-dom";
import UserContextWrapper from './contexts/UserContext';
import DiaryHistoryContextWrapper from './contexts/DiaryHistoryContext';

function App() {

  return (
    <UserContextWrapper>
      <DiaryHistoryContextWrapper>
        <div>
          {/* Navigation Bar (Top) */}
          <TopMenuContainer />

          {/* Content Container (to be navigated when click on "home", "report", and "about me" hyperlink in the future) */}
          <div className="mt-[150px]">
            <Outlet />
          </div>
        </div>
      </DiaryHistoryContextWrapper>
    </UserContextWrapper>
  );
}

export default App;
