import React, { FC, memo, ReactElement, ReactNode, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from "./common/TabMenu";
import Test from "./page/test";

function App() {
  return (
    <div className="App">
     {/*<TabMenu/>*/}
        <Test>
            hello world!!
        </Test>
    </div>
  );
}

export default App;

