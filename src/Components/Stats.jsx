import React from 'react'
import style from '../Style'

const Stats = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${style.paddingY} bg-single-main  px-6`}>
          <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            {/* tiny panel */}
            <div className='flex flex-row items-center py-[6px] px-4  bg-main-gd-l-r rounded-[10px] mb-2'>
                <img className='w-[32px] h-[32px] object-contain rounded-full' src='https://www.pngmart.com/files/7/Discount-PNG-Background-Image.png' alt='tiny-btn'></img>
                <p className={` ml-2 text-white leading-[20px] text-dimWhite` }>Mọi thứ bạn cần để chinh phục <span className='font-bold'>7.0+ IELTS</span> đều có ngay đây!</p>
            </div>
            <div className='flex flex-row justify-between items-center w-full '>
              <h1 className='flex-1 font-main font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[77px]'>
              <span className='text-[12px] font-normal leading-none'>LÀ MỘT TRONG SỐ NHỮNG</span><br></br>
              TRUNG TÂM <br />
              <span className='text-gradient'>ANH NGỮ HÀNG ĐẦU</span> <br />
              XUẤT HIỆN TẠI VIỆT NAM.</h1>
             
            </div> 
            <p className='font-normal text-[#206574] max-w-[470px] mt-5 mb-5'>Chúng tôi đã, đang và mãi đam mê,
               cống hiến hết mình vì sứ mệnh chắp cánh ước mơ IELTS cho hàng triệu người Việt Nam vươn tầm thế giới.
                Hệ thống 1 cơ sở duy nhất cùng với cơ sở vật chất hiện đại, lộ trình phù hợp và phương pháp tối ưu nhằm đáp ứng mục tiêu mong muốn của bạn !
                </p>
          </div>
          <div className='flex-1  '>
                <img className='w-[50%] h-[50%] relative z-[5] object-contain items-center left-[25%] top-[25%] box-shadow-rounded'  src='https://yt3.ggpht.com/a/AGF-l79xLJH7uZE2d6_0OlOF7lWLngyG1a5dH5527A=s900-c-k-c0xffffffff-no-rj-mo' alt='banner_main'></img>
          </div>


    </section>
  )
}

export default Stats
