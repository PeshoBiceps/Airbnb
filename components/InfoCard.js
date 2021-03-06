import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const InfoCard = ({ img, location, title, description, star, price, totalPrice }) => {

  return (
    <div className='flex flex-col md:flex-row py-7 px-2 border-b md:cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-52 w-full md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-1 md:pl-5 mt-3 md:mt-0'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 md:cursor-pointer' />
        </div>

        <h4 className='text-xl'>{title}</h4>

        <div className='border-b w-10 pt-2' />

        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />{star}
          </p>


          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price} лв./ нощувка</p>
            <p className='text-right font-extralight'>Общо {totalPrice} лв.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoCard
