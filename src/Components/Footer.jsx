import { React, useState } from 'react'
import style from '../Style'
import { contactInfo } from '../constants/index'
const Footer = () => {
  return (
    <div>
      <section id='footer' className={`   lg:flex  justify-between  ${style.paddingY} bg-[#202020] pl-10 pr-10 text-white  `}>
        <div className='flex-1/2 text-white mt-6'>
          <h1 className='font-semibold text-[22px]'>Thông tin liên hệ:</h1>
          <ul>
            {contactInfo.map((info, index) => (
              <li
                key={index}
              ><a href={info.link} className='flex text-[16px]' >
                  <img src={info.img} className='w-[26px] h-[26px] object-contain m-2' /> <span className='m-2'>{info.title} {info.note != null && ': ' + info.note}</span>
                </a></li>
            ))}
          </ul>
        </div>
        <div className='flex-1/2 text-white rounded-[20px] mt-6'>
        <h1 className='font-semibold text-[22px]'>Địa chỉ trụ sở:</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2974921512146!2d106.86041072884701!3d10.940885660643097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174de88422642d3%3A0x14c7c9089b1a0d8d!2za2h1IHBo4buRIDEgcCwgVGFtIEjDsmEsIFRwLiBCacOqbiBIw7JhLCDEkOG7k25nIE5haSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1688535807072!5m2!1svi!2s"
           className='lg:w-[500px] lg:h-[320px] p-3' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <div className='bg-[black] text-white text-center p-2'><p>@Created by LiHiTi</p></div>
    </div>
  )
}

export default Footer