const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ОТНОСНО</h5>
        <p>Как работи Airbnb</p>
        <p>Нюзрум</p>
        <p>Airbnb 2021 г.</p>
        <p>Инвеститори</p>
        <p>Airbnb Plus</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ОБЩНОСТ</h5>
        <p>Разнообразие и принадлежност</p>
        <p>Срещу дискриминацията</p>
        <p>Достъпност</p>
        <p>Сътрудници на Airbnb</p>
        <p>Ваучери за подаръци</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ДОМАКИНИ</h5>
        <p>Предлагане на място за престой</p>
        <p>Провеждане на изживяване</p>
        <p>Отговорно настаняване на гости</p>
        <p>Ресурсен център</p>
        <p>Център на общността</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ПОДДРЪЖКА</h5>
        <p>Мерките ни относно COVID-19</p>
        <p>Помощен център</p>
        <p>Опции за отменяне</p>
        <p>Доверие и безопасност</p>
        <p>Помощ за квартала</p>
      </div>
    </div>
  )
}

export default Footer
