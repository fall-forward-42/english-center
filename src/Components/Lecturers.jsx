import React from 'react'
import style from '../Style'
const Lecturers = () => {
 
  return (
    <div >
        <h1 className='font-main font-bold bg-main text-white px-6'>ĐỘI NGŨ GIẢNG VIÊN</h1>
        <section id='introduce' className={` flex md:flex-row gap-[40px] md:items-center  justify-around flex-col ${style.paddingY} bg-single-main p-10 text-white`}
    >
      <div className='flex-1/3 cursor-pointer flex-row max-w-[260px] max-h-[630px]   leading-[26px]  font-main rounded-[10px]    bg-radial   hover:text-[#16ff00]' >
        <img className=' zoom object-contain items-center rounded-[10px] ' src='https://tse4.mm.bing.net/th?id=OIP.UXLlH-BfWRsQnbMH_pHnowHaE8&pid=Api&P=0&h=180' alt='img1'></img>
          <div className='p-2 '>
              <h1 className='text-center'>Lê Thị Thu Trang</h1>
            <h3>Từng học tại:<span className='font-semibold'> ĐHQGHN - ĐH Ngoại Ngữ</span></h3>
          </div>
      </div>
      
      <div className='flex-1/3 cursor-pointer flex-row max-w-[260px] max-h-[630px]  leading-[26px]  font-main rounded-[10px]  bg-radial   hover:text-[#16ff00]' >
        <img className=' zoom object-contain items-center rounded-[10px] ' src='https://tse4.mm.bing.net/th?id=OIP.UXLlH-BfWRsQnbMH_pHnowHaE8&pid=Api&P=0&h=180' alt='img1'></img>
          <div className='p-2 '>
              <h1 className='text-center'>Lê Thị Thu Trang</h1>
            <h3>Từng học tại:<span className='font-semibold'> ĐHQGHN - ĐH Ngoại Ngữ</span></h3>
          </div>
      </div>

      <div className='flex-1/3 cursor-pointer flex-row max-w-[260px] max-h-[630px]  leading-[26px]  font-main rounded-[10px]  bg-radial   hover:text-[#16ff00]' >
        <img className=' zoom object-contain items-center rounded-[10px] ' src='https://tse4.mm.bing.net/th?id=OIP.UXLlH-BfWRsQnbMH_pHnowHaE8&pid=Api&P=0&h=180' alt='img1'></img>
          <div className='p-2 '>
              <h1 className='text-center'>Lê Thị Thu Trang</h1>
            <h3>Từng học tại:<span className='font-semibold'> ĐHQGHN - ĐH Ngoại Ngữ</span></h3>
          </div>
      </div>
    </section>
    </div>
  )
}

export default Lecturers