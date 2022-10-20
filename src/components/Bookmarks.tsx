import clsx from "clsx"
import moment from "moment"

export default function Bookmarks(props: { active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) {
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

  return (
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
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://mk.pupbrained.xyz'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Misskey
            </a>
          </li>
          <li>
            <a
              href='https://youtube.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href='https://twitch.tv'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Twitch
            </a>
          </li>
        </ul>
        <ul className='w-full gap-5 flex flex-col box-content border-x-2 border-ctp-surface0'>
          <li>
            <a
              href='https://github.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://reddit.com/r/unixporn'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Reddit
            </a>
          </li>
          <li>
            <a
              href='https://vercel.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Vercel
            </a>
          </li>
          <li>
            <a
              href='https://tailwindcss.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Tailwind
            </a>
          </li>
        </ul>
        <ul className='w-full gap-5 flex flex-col'>
          <li>
            <a
              href='https://classroom.google.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Classroom
            </a>
          </li>
          <li>
            <a
              href='https://moneyskill.org'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              MoneySkill
            </a>
          </li>
          <li>
            <a
              href='https://replit.com'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              Replit
            </a>
          </li>
          <li>
            <a
              href='https://freecodecamp.org'
              className='transform double-1 hover:double-1-hover duration-75'
            >
              FreeCodeCamp
            </a>
          </li>
        </ul>
      </div>
      <a
        className='w-full flex justify-center'
        onClick={() => props.setActive(!props.active)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 192 512 640'
          width='20'
          height='20'
          className={clsx(
            'fill-ctp-surface0 mt-10 cursor-pointer',
            props.active
              ? 'transform rotate-180 duration-100'
              : 'rotate-0 duration-100'
          )}
        >
          <path d='M0 192l512 320L0 832V192z'></path>
        </svg>
      </a>
    </div>
  )
}
