import Image from 'next/image'

const XlCard = () => {
  return (
    <section className='p-3 -ml-3'>
      <h2 className="text-4xl font-semibold pb-5">Живейте, където пожелаете</h2>
      <div className='flex space-x-4 overflow-scroll scrollbar-hide lg:overflow-hidden '>
        <div className='lg:w-[33%] py-4 pl-2 hover:scale-105 transform transition duration-300 ease-out'>
          <div className='relative h-80 min-w-[300px]'>
            <Image
              src='https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480'
              layout='fill'
              className='rounded-xl object-cover'
            />
          </div>
          <h2 className="text-2xl mt-2">Изживявания</h2>
          <h3>Намерете незабравими дейности близо до вас.</h3>
        </div>

        <div className='lg:w-[33%] py-4 hover:scale-105 transform transition duration-300 ease-out'>
          <div className='relative h-80 min-w-[300px]'>
            <Image
              src='https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480'
              layout='fill'
              className='rounded-xl object-cover'
            />
          </div>
          <h2 className="text-2xl mt-2">Онлайн изживявания</h2>
          <h3>Интерактивни дейности в реално време, водени от домакини.</h3>
        </div>

        <div className='lg:w-[33%] py-4 pr-3 hover:scale-105 transform transition duration-300 ease-out'>
          <div className='relative h-80 min-w-[300px]' >
            <Image
              src='https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480'
              layout='fill'
              className='rounded-xl object-cover'
            />
          </div>
          <h2 className="text-2xl mt-2">Популярна колекция: страст към пътешествия</h2>
          <h3>Пътувайте чрез онлайн изживявания, без да напускате дома си.</h3>
        </div>
      </div>
    </section >
  )
}

export default XlCard
