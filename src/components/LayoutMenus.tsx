import React from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

function LayoutMenus({ children, set, title }:
{ children: React.ReactNode, set: () => AnyAction, title: string }) {
  const dispatch = useDispatch();

  return (
    <article
      className="bg-white w-full justify-center pt-1 h-full overflow-auto
    flex flex-row flex-wrap gap-1"
    >
      <div
        className="w-full flex flex-row flex-nowrap h-16 items-center
       justify-around p-1"
      >
        <h2>{title}</h2>
        <button onClick={ () => dispatch(set()) }>X</button>
      </div>
      {children}
    </article>
  );
}

export default LayoutMenus;
