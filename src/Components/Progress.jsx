import {React,useState} from 'react'
import style from '../Style'
import {lessons} from '../constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHref } from 'react-router-dom';

const Progress = () => {
  const titles =lessons.map((les)=>les.title)
  const [toggle,setToggle] = useState(titles[-1])
 
  return (
    <div className='' >
      <h1 className='font-main font-bold bg-main text-white px-6 '>KHÓA HỌC</h1>
      <section id='lessons' className={`  ${style.flexStart} ${style.paddingY} bg-single-main lg:p-10 text-white md:p-0 `}>
          <ul className='list-none w-full font-main   '>
                {lessons.map((lesson,index)=>(
                  
                    <li
                        key={lesson.id}
                        className='bg-single-main2 lg:flex lg:flex-row justify-around items-center rounded-[5px] w-full lg:h-[120px] sm:h-[auto] mb-6 p-2'
                    >
                       <h1 className='font-semibold md:p-3'>{lesson.title}</h1>
                       <div className='flex flex-col justify-center items-center h-full'>
                          <h4>{lesson.time1}</h4>
                          <h4>{lesson.time2}</h4>
                         {lesson.note !== '' && ( <p className='font-normal text-[12px] mt-2 bg-[#6e5b3f] h-[12px]'>{lesson.note}</p>)}
                       </div>
                      <div className='flex flex-col justify-start items-center md:m-3'>
                        <h3 className=''>{lesson.cost}</h3>
                        <p className='text-[12px]'>{lesson.date}</p>
                      </div>
                      <button className='p-4 bg-[#60da63] rounded-[12px] hover:bg-[#6e5b3f] font-semibold ' onClick={()=>{
                          setToggle(lesson.title)
                          localStorage.setItem("lessonBeenChoosen", lesson.title);
                          toast.success('Đã chọn khóa', {
                              position: toast.POSITION.BOTTOM_RIGHT
                          });
                         
                          window.location.reload();
                          
                          
                      }}>
                       {toggle === lesson.title ?'Đã Chọn' :'Học Ngay'  }
                      </button>
                     
                    </li>   
                ))}
          <h3 className='text-center rounded-[12px]  text-white font-normal'>Nếu học sinh nghỉ, trung tâm sẽ gửi lại học phí sau khi trừ các buổi đã học !</h3>

        </ul>
          
      </section>
      <ToastContainer/>
    </div>
  )
}

export default Progress