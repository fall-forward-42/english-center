import style from '../Style'
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormSign = () => {
  const form = useRef();
  const styles = {
      container: "flex flex-col p-2 lg:w-[320px] w-[200px]",
      label: "py-2 font-semibold left-0 text-[22px]",
      input: "rounded-[10px] font-normal p-2  outline-none text-black ",
      txtarea: "rounded-[10px] font-normal p-2  outline-none text-black "

  }
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6zqend', 'template_5r76xwo', form.current, 'cjf0ej5Fm87q84e2b')
        .then((result) => {
          toast.success('Gửi thành công !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        }, (error) => {
          toast.warning('Không thành công !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        });
};
  return (
      <div className=''>
          <h1 className='font-main font-bold bg-main text-white px-6 '>ĐĂNG KÝ</h1>
          <section id='signUp' className={` flex md:flex-row gap-[40px] md:items-center  justify-around flex-col ${style.paddingY} bg-single-main p-10 text-white`}>
          <form ref={form} onSubmit={sendEmail} className='font-main flex flex-col justify-center items-center lg:w-[420px] lg:h-[800px] p-2 bg-[#008080] rounded-[12px] '>
                <h3 className='font-normal p-3 text-center text-[18px] my-[12px] ' >Hơn <span className='text-[red] font-bold'>200.000 học viên</span> đã thành công cán đích. Bạn có muốn trở thành người tiếp theo?</h3>
                <div className={styles.container}>
                    <label className={styles.label}> {localStorage.getItem("lessonBeenChoosen") != null ? 'Bạn đã chọn '+ localStorage.getItem("lessonBeenChoosen")  : "Bạn chưa chọn khóa học nào !"}</label>
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Số Điện Thoại</label>
                    <input className={styles.input}  type="text" name="user_numberPhone" placeholder='Nhập số điện thoại' required/>
                </div>
                <div className={styles.container}>
                    <label className={styles.label} >Người Đăng Ký</label>
                    <input className={styles.input } type="text" name="user_name" placeholder='Vui lòng nhập họ và tên' required/>
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="user_email" placeholder='Nhập email đại diện' required/>
                </div>
                
                
                <div className={styles.container}>
                    <label className={styles.label}>Nội Dung</label>
                    <textarea className={styles.txtarea} name="message" value={'Đăng ký khóa học '+ localStorage.getItem("lessonBeenChoosen")} />
                </div>.
                <button type="submit" value="Send" className='lg:w-[320px] w-[200px] p-2 bg-[#60da63] rounded-[12px] hover:bg-[#e34d4d] mt-[60px]'>ĐỒNG Ý</button>
                <p className='text-[70%] font-normal p-3 text-center'>* Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm (trong vòng 24h)</p>
            </form>
          </section>
          <ToastContainer />
    </div>
  )
}

export default FormSign