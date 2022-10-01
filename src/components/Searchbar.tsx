import { motion } from "framer-motion";
import { useQuery } from "react-query";
import 'balloon-css'

export default function Searchbar() {
  const { isLoading, data } = useQuery('weatherStatus', () =>
    fetch('https://weather.pupbrained.xyz').then((res) => res.json())
  )

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      method='GET'
      action='https://search.pupbrained.xyz/search?q='
      autoComplete='off'
    >
      <div className='h-[60px] w-[800px] flex justify-between rounded-full bg-ctp-base hover:shadow-searchbar focus-within:shadow-searchbar transition opacity'>
        <div className='flex flex-grow'>
          <div className='flex'>
            <svg
              className='pl-4 h-[30px] items-center bg-ctp-base fill-ctp-subtext0 flex bg-transparent m-auto'
              focusable='false'
              viewBox='0 0 24 24'
            >
              <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
            </svg>
          </div>
          <div className='flex flex-grow'>
            <input
              type='text'
              placeholder='Search anything...'
              name='q'
              className='h-[60px] flex-grow bg-ctp-base pl-3 text-lg text-ctp-subtext0 font-sans placeholder:text-ctp-subtext0 outline-none'
            ></input>
          </div>
        </div>
        <div className='text-ctp-subtext0 text-lg flex items-center pl-4 pr-4 gap-2'>
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
          <div>
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
  )
}
