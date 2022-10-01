import moment from 'moment';

export default function Clock() {
  return (
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
  )
}
