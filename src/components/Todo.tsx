import clsx from "clsx"
import { useState } from "react"

export default function Todo(props: { active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) {
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
            placeholder='Add to list...'
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
        onClick={() => props.setActive(!props.active)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 192 512 640'
          width='20'
          height='20'
          className={clsx(
            'fill-ctp-surface0 cursor-pointer',
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
