import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({ placeholder }) => {

  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [no0fGuests, setNo0fGuests] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const place = () => {
    router.push({
      pathname: `/place`,
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        no0fGuests,
      }
    })
    setSearchInput('')
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }



  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-7'>

      {/* Left */}
      <div onClick={() => router.push('/')} className='relative flex items-center h-10 md:cursor-pointer my-auto'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit='contain'
          objectPosition='left'
        />

      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder={placeholder || 'Къде отивате?'} />
        <SearchIcon style={searchInput ? { opacity: 0 } : { opacity: 1 }} className='hidden mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer transition-all duration-400 ease-in' />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:flex text-right">Станете домакин</p>
        <GlobeAltIcon className="h-6 md:cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold '>Гости</h2>
            <UsersIcon className='h-5' />
            <input value={no0fGuests} min={1} onChange={(e) => (setNo0fGuests(e.target.value))} className='w-12 pl-2 text-lg text-red-400 outline-none' type='number' />
          </div>
          <div className='flex items-center'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Отказ</button>
            <button onClick={place} className='flex-grow text-red-400'>Търси</button>
          </div>
        </div>
      )}


    </header>
  )
}

export default Header
