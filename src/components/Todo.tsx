/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function Todo(props: {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState<
    Array<{ val: string; crossed: boolean }>
  >(() => {
    const list = localStorage.getItem('todoList')

    const finalList =
      list == null
        ? Array(7).fill({ val: 'empty', crossed: false })
        : JSON.parse(list)

    return finalList
  })

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className='w-full m-3 ml-[-3px] bg-ctp-mantle rounded-2xl'>
      <div className='pt-8 pb-[34px] w-full text-center'>
        <p className='text-4xl text-ctp-subtext1 font-[800]'>Todo</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()

            for (let i = 0; i < todoList.length; i++) {
              if (input == 'clear') {
                setTodoList(Array(7).fill({ val: 'empty', crossed: false }))
                break
              }

              if (todoList[i].val == 'empty' && input != '') {
                const list = [...todoList]
                list[i].val = input
                setTodoList(list)
                break
              }
            }

            setInput('')
          }}
          className='border-b-2 border-ctp-surface0 w-[90%] mx-auto'
        >
          <input
            onChange={(e) => {
              e.preventDefault()
              setInput(e.target.value)
            }}
            value={input}
            className='mt-5 bg-transparent text-ctp-subtext0 caret-ctp-subtext0 w-[90%] outline-none placeholder:text-ctp-surface0 text-lg'
            title='Add todo item'
            placeholder='Add to list...'
          ></input>
          <span className='text-lg text-ctp-surface0 pb-[3px] font-hack'>
            <a
              onClick={(e) => {
                e.preventDefault()

                const list = [...todoList]
                for (let i = 0; i < todoList.length; i++) {
                  if (list[i].val !== 'empty') {
                    list[i].crossed = !list[i].crossed
                  }
                }

                setTodoList(list)
              }}
              className='hover:text-ctp-subtext1 transition cursor-pointer'
            >
              
            </a>
            &nbsp;
            <a
              onClick={(e) => {
                e.preventDefault()

                const list = [...todoList]
                for (let i = 0; i < todoList.length; i++) {
                  list[i].val = 'empty'
                }

                setTodoList(list)
              }}
              className='hover:text-ctp-subtext1 transition cursor-pointer'
            >
              
            </a>
          </span>
        </form>
        <div className='w-[90%] h-[244px] mt-8 mx-auto border-4 border-ctp-surface0 rounded-xl box-border'>
          <div className='text-ctp-subtext1 grid text-xl columns-2 box-border'>
            {todoList?.map(
              (elem: { val: string; crossed: boolean }, idx: number) => (
                <div
                  key={idx}
                  className={clsx(
                    'text-left px-2 py-[2px] border-box border-ctp-surface0 flex justify-between overflow-x-hidden',
                    !(idx == todoList.length - 1) ? 'border-b-2' : '',
                    elem.val === 'empty' ? 'text-ctp-surface0' : ''
                  )}
                >
                  <div
                    className={clsx(
                      'w-full truncate !cursor-default select-none',
                      elem.crossed ? 'line-through' : ''
                    )}
                  >
                    {elem.val}
                  </div>
                  <span
                    className={clsx(
                      'w-[10%] text-right font-hack text-ctp-surface2 -mt-0.5 -mr-1 gap-x-1 flex',
                      elem.val === 'empty' ? 'hidden' : ''
                    )}
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault()

                        const list = [...todoList]
                        list[idx].crossed = !list[idx].crossed

                        setTodoList(list)
                      }}
                      className={
                        'cursor-pointer hover:text-ctp-subtext1 transition'
                      }
                    >
                      
                    </a>
                    <a
                      onClick={(e) => {
                        e.preventDefault()

                        const list = [...todoList]
                        list.splice(idx, 1)
                        list.push({ val: 'empty', crossed: false })

                        setTodoList(list)
                      }}
                      className='cursor-pointer hover:text-ctp-subtext1 transition'
                    >
                      
                    </a>
                  </span>
                </div>
              )
            )}
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
