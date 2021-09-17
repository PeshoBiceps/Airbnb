import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"

const Search = () => {
  const router = useRouter() ////////////eeeeeeeeeeee tui

  return (
    <div>
      <Header />
      <main>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Престой за 5 броя гости</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Марс</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Aнулиране на резервация</p>
            <p className='button'>Тип място</p>
            <p className='button'>Цена</p>
            <p className='button'>Стай и легла</p>
            <p className='button'>Повече филтри</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Search
