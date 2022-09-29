/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import 'balloon-css'
import moment from 'moment'
import { useState } from 'react'
import clsx from 'clsx'

export default function App() {
  const date = new Date()
  const hours = date.getHours()

  let timeOfDay
  if (hours < 12 && hours >= 5) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours <= 18) {
    timeOfDay = 'afternoon'
  } else if (hours > 18 && hours < 22) {
    timeOfDay = 'evening'
  } else {
    timeOfDay = 'night'
  }

  const { isLoading, data } = useQuery('weatherStatus', () =>
    fetch('https://weather.pupbrained.xyz').then((res) => res.json())
  )

  const [active, setActive] = useState(false)
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')!) || [
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
    ]
  )

  localStorage.setItem('todoList', JSON.stringify(todoList))

  return (
    <>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        method='GET'
        action='https://search.pupbrained.xyz/search?q='
        autoComplete='off'
      >
        <div className='h-[60px] w-[800px] flex rounded-full bg-ctp-base hover:shadow-searchbar focus-within:shadow-searchbar transition opacitye'>
          <svg
            className='pl-4 h-[30px] items-center bg-ctp-base fill-ctp-subtext0 flex bg-transparent m-auto'
            focusable='false'
            viewBox='0 0 24 24'
          >
            <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
          </svg>
          <input
            type='text'
            placeholder='Search anything...'
            name='q'
            className='h-[60px] w-full bg-ctp-base pl-3 text-lg text-ctp-subtext0 font-sans placeholder:text-ctp-subtext0 outline-none'
          ></input>
          <div className='text-ctp-subtext0 text-lg w-[320px] flex items-center pl-5 mr-[-25px] gap-2'>
            <div
              aria-label={
                isLoading
                  ? 'Loading...'
                  : `Feels like: ${data[1].feels_like
                    .toString()
                    .substring(0, 2)}°F - L/H: ${data[1].temp_min
                    .toString()
                    .substring(0, 2)}°F / ${data[1].temp_max
                    .toString()
                    .substring(0, 2)}°F`
              }
              data-balloon-pos='up'
              className='!cursor-default [--balloon-color:rgb(24,24,37)] [--balloon-border-radius:25px] [--balloon-font-size:16px] select-none'
            >
              {isLoading
                ? 'Loading...'
                : data[0].description.charAt(0).toUpperCase() +
                  data[0].description.slice(1) +
                  ' (' +
                  data[1].temp.toString().substring(0, 2) +
                  '°F)'}
            </div>
            <div className='ml-[-5px]'>
              {isLoading ? (
                <></>
              ) : (
                <img
                  className='h-[40px]'
                  title='Weather icon'
                  src={`http://openweathermap.org/img/wn/${data[0].icon}@2x.png`}
                ></img>
              )}
            </div>
          </div>
        </div>
      </motion.form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='h-[500px] w-[800px] bg-ctp-base rounded-2xl flex select-none'
      >
        <div
          className="bg-[url('/src/assets/imgs/sideimg.gif')] bg-cover bg-center bg-no-repeat w-[400px] rounded-l-2xl after:content-[''] after:block after:ml-[248px] after:bg-ctp-base after:w-4 after:h-[500px] after:mt-[-500px] after:rounded-l-2xl"
          title='A city during the sunset'
        >
          <div className='bg-[#1e1e2eaa] h-[276px] my-28 ml-16 mr-[80px] rounded-2xl text-7xl text-center flex items-center backdrop-blur-sm text-ctp-subtext1'>
            <div className='flex flex-col w-full'>
              <span>{moment().format('hh')}</span>
              <hr className='w-[80%] border-2 border-ctp-subtext1 my-6 mx-auto' />
              <span>{moment().format('mm')}</span>
            </div>
          </div>
        </div>
        {!active ? (
          <div className='w-full m-3 ml-[-3px] bg-ctp-mantle rounded-2xl'>
            <div className='py-8 w-full text-center'>
              <p className='text-4xl text-ctp-subtext1 font-[800]'>
                Good {timeOfDay}
              </p>
              <p className='mt-2 text-2xl text-ctp-subtext1'>
                {moment().format('dddd, MMMM Do')}
              </p>
            </div>
            <div className='flex text-center w-full text-ctp-subtext1 text-3xl font-bold pt-5'>
              <p className='w-full'>Social</p>
              <p className='w-full'>Tech</p>
              <p className='w-full'>School</p>
            </div>
            <div className='flex text-center w-full text-ctp-subtext0 text-lg pt-5'>
              <ul className='w-full gap-5 flex flex-col'>
                <li>
                  <a
                    href='https://twitter.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href='https://mk.pupbrained.xyz'
                    className='transform hover:text-xl duration-75'
                  >
                    Misskey
                  </a>
                </li>
                <li>
                  <a
                    href='https://youtube.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitch.tv'
                    className='transform hover:text-xl duration-75'
                  >
                    Twitch
                  </a>
                </li>
              </ul>
              <ul className='w-full gap-5 flex flex-col box-content border-x-2 border-ctp-surface0'>
                <li>
                  <a
                    href='https://github.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://reddit.com/r/unixporn'
                    className='transform hover:text-xl duration-75'
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    href='https://vercel.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Vercel
                  </a>
                </li>
                <li>
                  <a
                    href='https://tailwindcss.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Tailwind
                  </a>
                </li>
              </ul>
              <ul className='w-full gap-5 flex flex-col'>
                <li>
                  <a
                    href='https://classroom.google.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Classroom
                  </a>
                </li>
                <li>
                  <a
                    href='https://moneyskill.org'
                    className='transform hover:text-xl duration-75'
                  >
                    MoneySkill
                  </a>
                </li>
                <li>
                  <a
                    href='https://replit.com'
                    className='transform hover:text-xl duration-75'
                  >
                    Replit
                  </a>
                </li>
                <li>
                  <a
                    href='https://freecodecamp.org'
                    className='transform hover:text-xl duration-75'
                  >
                    FreeCodeCamp
                  </a>
                </li>
              </ul>
            </div>
            <a
              className='w-full flex justify-center'
              onClick={() => setActive(!active)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 192 512 640'
                width='20'
                height='20'
                className={clsx(
                  'fill-ctp-surface0 mt-10 cursor-pointer',
                  active
                    ? 'transform rotate-180 duration-100'
                    : 'rotate-0 duration-100'
                )}
              >
                <path d='M0 192l512 320L0 832V192z'></path>
              </svg>
            </a>
          </div>
        ) : (
          <div className='w-full m-3 ml-[-3px] bg-ctp-mantle rounded-2xl'>
            <div className='pt-8 pb-[34px] w-full text-center'>
              <p className='text-4xl text-ctp-subtext1 font-[800]'>Todo</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()

                  for (let i = 0; i < todoList.length; i++) {
                    if (input == 'clear') {
                      setTodoList([
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                        'empty',
                      ])
                      localStorage.setItem('todoList', JSON.stringify(todoList))
                      break
                    }

                    if (todoList[i] == 'empty' && input != '') {
                      setTodoList((prev: string[]) => {
                        prev[i] = input
                        localStorage.setItem(
                          'todoList',
                          JSON.stringify(todoList)
                        )
                        return prev
                      })
                      break
                    }
                  }

                  setInput('')
                }}
              >
                <input
                  onChange={(e) => {
                    e.preventDefault()
                    setInput(e.target.value)
                  }}
                  value={input}
                  className='mt-5 bg-transparent text-ctp-subtext0 caret-ctp-subtext0 w-[90%] border-b-2 border-ctp-surface0 outline-none placeholder:text-ctp-surface0 text-lg'
                  title='Add todo item'
                  placeholder='Add todo item'
                ></input>
              </form>
              <div className='w-[90%] h-[244px] mt-8 mx-auto border-4 border-ctp-surface0 rounded-xl box-border'>
                <div className='text-ctp-subtext1 grid grid-cols-2 text-xl columns-2 box-border'>
                  {todoList.map((elem: string, idx: number) => (
                    <span
                      key={idx}
                      className={clsx(
                        'text-left px-2 py-[2px] list-none border-box border-ctp-surface0 overflow-scroll scrollbar-hide',
                        !(idx % 2) ? 'border-r-2' : '',
                        !(
                          idx == todoList.length - 1 ||
                          idx == todoList.length - 2
                        )
                          ? 'border-b-2'
                          : '',
                        elem?.toString() == 'empty' ? 'text-ctp-surface0' : ''
                      )}
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              className='w-full flex justify-center'
              onClick={() => setActive(!active)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 192 512 640'
                width='20'
                height='20'
                className={clsx(
                  'fill-ctp-surface0 cursor-pointer',
                  active
                    ? 'transform rotate-180 duration-100'
                    : 'rotate-0 duration-100'
                )}
              >
                <path d='M0 192l512 320L0 832V192z'></path>
              </svg>
            </a>
          </div>
        )}
      </motion.div>
    </>
  )
}
