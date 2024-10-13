import React from 'react';

interface Props {
  handleClick?: () => void;
  icon: React.ReactNode;
}

const ShimmerButton = ({ handleClick, icon }: Props) => {
  return (
    <div>
      <button
        className='inline-flex
       h-12 animate-shimmer
        items-center justify-center
         rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]
          px-6 font-medium
          md:w-60
          md:mt-10
          lg:text-lg
          text-slate-400 transition-colors 
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
      >
        Show My Work
        <span className='text-xl ml-2'>{icon}</span>
      </button>
    </div>
  );
};

export default ShimmerButton;
