import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"
import date from 'date-and-time';
import InfoCard from "../components/InfoCard"

const Search = ({ searchResult }) => {
  const router = useRouter()
  const { location, startDate, endDate, no0fGuests } = router.query



  console.log(searchResult)
  console.log(router.query)

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  const value = date.subtract(new Date(router.query.endDate), new Date(router.query.startDate)).toDays()

  console.log(value)


  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${no0fGuests}`} />
      <main>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Нощувки {range} нощувки за {no0fGuests} {no0fGuests === "1" ? `гост` : "гости"}</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Места за престой в района на {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Aнулиране на резервация</p>
            <p className='button'>Тип място</p>
            <p className='button'>Цена</p>
            <p className='button'>Стай и легла</p>
            <p className='button'>Повече филтри</p>
          </div>

          <div className='flex flex-col'>
            {searchResult.map((data, index) => (
              <InfoCard
                key={index}
                img={data.img}
                location={data.location}
                title={data.title}
                description={data.description}
                star={data.star}
                price={data.price}
                totalPrice={data.price * value}
              />
            ))}
          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const searchResult = await fetch('https://mecho-backend.herokuapp.com/search').then(res => res.json())

  return {
    props: {
      searchResult,
    }
  }
}