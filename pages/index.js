import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Pesho BNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16' >
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data form a server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {exploreData?.map((data, index) => (
              <SmallCard
                key={index}
                img={data.img}
                distance={data.distance}
                location={data.location}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardData?.map((data, index) => (
              <MediumCard
                key={index}
                img={data.img}
                title={data.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />

      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').
    then((res) => res.json())

  const cardData = await fetch('https://jsonkeeper.com/b/VHHT').
    then((res) => res.json())

  return {
    props: {
      exploreData,
      cardData
    }
  }

}