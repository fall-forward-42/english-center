import './App.css';
import style from './Style'
import {Navbar,Stats, Progress, Method, Activities, Lecturers, Example, FormSign, Footer} from './Components';
import React from 'react'
function App() {
  return (
    <div className="App  glassCardCss bg-single-main w-full overflow-hidden">
      <div className={` ${style.flexCenter} `}>
        <div className={`${style.boxWidth} `}>
            <Navbar/>
          </div>
      </div>
      
      <div className={`${style.flexStart} bg-primary ${style.paddingX} py-[60px]` }>
          <div className={`${style.boxWidth}`}>
            <Stats/>
          </div>
      </div>

      <div className={`bg-primary ${style.flexStart} ${style.paddingX}` }>
          <div className={`${style.boxWidth}`}>

                {/* giảng viên */}
                <Lecturers />
                {/* khóa học */}
                <Progress  />
                {/* học phí */}
                <Method/>
                <FormSign />
               
          </div>
      </div>
      <div>
            {/* địa chỉ */}
            <Footer/>
      </div>
    </div>
  );
}

export default App;
