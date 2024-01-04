import React from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

function LayoutMenus({ children, set, title }:
{ children: React.ReactNode, set: () => AnyAction, title: string }) {
  const dispatch = useDispatch();

  return (
    <article
      className="bg-white w-full pt-1 h-full
    flex flex-col flex-wrap gap-1"
    >
      <div
        className="w-full flex flex-row flex-nowrap h-16 items-center
       justify-around p-1"
      >
        <h2>{title}</h2>
        <button onClick={ () => dispatch(set()) }>X</button>
      </div>
      <div
        className="w-full h-[55%] flex flex-row flex-wrap justify-center
         overflow-auto gap-1"
      >
        {children}
      </div>
    </article>
  );
}

export default LayoutMenus;
