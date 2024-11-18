'use client';

import { projects } from '@/data';
import { useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { GoProjectSymlink } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import MagicButton from './MagicButton';
import { Button } from './ui/MovingBorders';
import { PinContainer } from './ui/Pin';

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);

  // Control the displayed projects based on `showAll` state
  const displayedProjects = showAll ? projects : projects.slice(0, 4); // Show first 6 projects by default
  const handleClick = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id='#projects' className='py-20'>
      <h1 className='heading'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {displayedProjects.map((item) => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={item.id}
          >
            <PinContainer
              title='/ui.aceternity.com'
              href='https://twitter.com/mannupaaji'
            >
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src='/bg.png' alt='bgimg' />
                </div>
                <img
                  src={item.img}
                  alt='cover'
                  className='z-10 absolute bottom-0'
                />
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {item.title}
              </h1>

              <p
                className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt='icon5' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <a href={item.link}>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                      Check Live Site
                    </p>
                  </a>

                  <FaLocationArrow className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      {/* Align the button */}
      <div className='flex justify-center  items-center  mr-10 mb-10 px-4'>
        <MagicButton
          title={showAll ? 'Show Less Projects' : 'View All Projects'}
          icon={<GoProjectSymlink />}
          position='right'
          handleClick={handleClick} // This should toggle the `showAll` state.
          otherClasses='text-purple-400 hover:text-white'
        >
          {showAll ? 'Show Less Projects' : 'View All Projects'}
        </MagicButton>
      </div>
    </section>
  );
};

export default RecentProjects;
