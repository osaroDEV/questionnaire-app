'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Home = () => {
  const [isFirstMod, setIsFirstMod] = useState(false);
  const [isFirstAns, setIsFirstAns] = useState(false);

  const handleFirst = () => {
    setIsFirstMod((prevState) => !prevState);
  };
  const [isSecondMod, setIsSecondMod] = useState(false);
  const [isSecondAns, setIsSecondAns] = useState(false);

  const handleSecond = () => {
    setIsSecondMod((prevState) => !prevState);
  };
  const [isThirdMod, setIsThirdMod] = useState(false);
  const [isThirdAns, setIsThirdAns] = useState(false);

  const handleThird = () => {
    setIsThirdMod((prevState) => !prevState);
  };
  const [isFourthMod, setIsFourthMod] = useState(false);
  const [isFourthAns, setIsFourthAns] = useState(false);

  const handleFourth = () => {
    setIsFourthMod((prevState) => !prevState);
  };

  return (
    <main className='bg-[#f5f5f5] h-[100vh] w-[100vw]'>
      {isFirstMod && (
        <div className='bg-[rgba(0,0,0,0.32)] w-[100vw] h-[100vh] fixed top-0 left-0 z10'>
          <div className='absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%] w-[80%] z-10'>
            <div className='flex items-center justify-around border w-[100%] h-[100px] bg-[#0277bd] text-white'>
              <span className='font-semibold'>1</span>
              <FiX
                className='absolute top-[15px] right-[25px] text-white text-2xl cursor-pointer'
                onClick={handleFirst}
              />
              <div className='h-[90%] w-[65%] flex flex-col justify-center'>
                <p className='text-sm pr-[2rem]'>Gather customer feedback</p>
              </div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>A</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>An online gallery</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>B</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>Email survey</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>C</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>A map</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>D</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>Social media page</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {isSecondMod && (
        <div className='bg-[rgba(0,0,0,0.32)] w-[100vw] h-[100vh] fixed top-0 left-0 z10'>
          <div className='absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%] w-[80%]'>
            <div className='flex items-center justify-around border w-[100%] h-[100px] bg-[#0277bd] text-white'>
              <span className='font-semibold'>1</span>
              <FiX
                className='absolute top-[15px] right-[25px] text-white text-2xl cursor-pointer'
                onClick={handleSecond}
              />
              <div className='h-[90%] w-[65%] flex flex-col justify-center'>
                <p className='text-sm pr-[2rem]'>Gather customer feedback</p>
              </div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>A</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>An online gallery</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>B</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Email survey</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>C</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>A map</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>D</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Social media page</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {isThirdMod && (
        <div className='bg-[rgba(0,0,0,0.32)] w-[100vw] h-[100vh] fixed top-0 left-0 z10'>
          <div className='absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%] w-[80%]'>
            <div className='flex items-center justify-around border w-[100%] h-[100px] bg-[#0277bd] text-white'>
              <span className='font-semibold'>1</span>
              <FiX
                className='absolute top-[15px] right-[25px] text-white text-2xl cursor-pointer'
                onClick={handleThird}
              />
              <div className='h-[90%] w-[65%] flex flex-col justify-center'>
                <p className='text-sm pr-[2rem]'>Gather customer feedback</p>
              </div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>A</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>An online gallery</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>B</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Email survey</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>C</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>A map</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>D</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Social media page</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {isFourthMod && (
        <div className='bg-[rgba(0,0,0,0.32)] w-[100vw] h-[100vh] fixed top-0 left-0 z10'>
          <div className='absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%] w-[80%]'>
            <div className='flex items-center justify-around border w-[100%] h-[100px] bg-[#0277bd] text-white'>
              <span className='font-semibold'>1</span>
              <FiX
                className='absolute top-[15px] right-[25px] text-white text-2xl cursor-pointer'
                onClick={handleFourth}
              />
              <div className='h-[90%] w-[65%] flex flex-col justify-center'>
                <p className='text-sm pr-[2rem]'>Gather customer feedback</p>
              </div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>A</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>An online gallery</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>B</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Email survey</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>C</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>A map</p>
              </div>
              <div></div>
            </div>
            <div className='flex items-center justify-around border w-[100%] h-[50px] bg-white'>
              <span className='font-semibold text-[#0277bd]'>D</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm font-light'>Social media page</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center mt-10 w-full h-full'>
        <section className='p-[1.5rem] w-[95%] h-[100vh] bg-white'>
          <h1 className='text-2xl'>Check your knowledge</h1>
          <p className='pt-[1rem] font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            assumenda laborum nostrum ad, quos velit officiis quia sit
            perspiciatis suscipit?
          </p>
          <p className='pt-[1rem] font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            assumenda laborum nostrum ad, quos velit officiis quia sit
            perspiciatis suscipit?
          </p>
          <p className='pt-[1rem] font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            assumenda laborum nostrum ad, quos velit officiis quia sit
            perspiciatis suscipit?
          </p>
          <hr className='m-[2rem_0]' />

          <div className='flex flex-col justify-around items-center h-[600px]'>
            <div
              className='flex items-center justify-around border w-[90%] h-[100px] cursor-pointer'
              onClick={handleFirst}
            >
              <span className='font-semibold'>1</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>Gather customer feedback</p>
              </div>
              <div></div>
            </div>
            <div
              className='flex items-center justify-around border w-[90%] h-[100px] cursor-pointer'
              onClick={handleSecond}
            >
              <span className='font-semibold'>2</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>
                  Tell customers about the extended opening hours
                </p>
              </div>
              <div></div>
            </div>
            <div
              className='flex items-center justify-around border w-[90%] h-[100px] cursor-pointer'
              onClick={handleThird}
            >
              <span className='font-semibold'>3</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>
                  Show customers Hamish’s latest hair looks
                </p>
              </div>
              <div></div>
            </div>
            <div
              className='flex items-center justify-around border w-[90%] h-[100px] cursor-pointer'
              onClick={handleFourth}
            >
              <span className='font-semibold'>4</span>
              <div className='h-[90%] w-[50%] flex flex-col justify-center'>
                <p className='text-sm'>
                  Help local customers find the new salon
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
