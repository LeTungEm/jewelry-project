"use client"
import ServiceSTN from '@/components/section/ServiceSTN';
import { useState } from 'react';


export default function LoginForm() {
    const [isLogin, setLoginStatus] = useState(true);
    return (
      <div>
        
        <div className="relative overflow-hidden p-[5%] mb-10">
            {/* background image */}
            <img className="absolute top-0 left-0 object-cover object-center h-full w-full" src="/images/login-bg1.png" />
            <div className="relative overflow-hidden flex rounded-2xl duration-700">
                <input hidden className='peer' type="checkbox" id="loginStatus" />
                <div className='absolute peer-checked:right-0 top-0 bottom-0 z-0 w-1/3 text-white font-bold text-center'>
                    {/* background image */}
                    <img className="absolute top-0 left-0 object-cover object-center h-full w-full z-0" src="/images/login-bg2.png" />
                    <div className='absolute z-[1] w-full top-[10%] text-2xl'>Giá trị tạo nên khác biệt</div>
                </div>
                <div className='flex flex-col justify-center items-center translate-x-1/2 peer-checked:translate-x-0 w-2/3 bg-[var(--login-form)] duration-700 z-[1] py-[5%]'>
                    <h2 className='text-3xl font-bold text-[var(--black-blue)] mb-10'>{isLogin?"Chào mừng bạn trở lại":"Tham Gia Với Chúng Tôi"}</h2>
                    {
                        isLogin?
                        // login Form
                        <form className='flex flex-col items-center w-full'>
                            <div className='hidden'>&nbsp;</div>
                            <div className='flex gap-3 w-2/3 bg-white rounded-full px-7 py-4 mb-5'>
                                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00507C"/>
                                    <path d="M22 6L12 13L2 6" stroke="#00507C"/>
                                </svg>
                                <input placeholder='Nhập tên hoặc địa chỉ Email' className='placeholder-[var(--black-blue)] bg-transparent focus:outline-none' type="text" name="" id="" />
                            </div>
                            <div className='flex gap-3 w-2/3 bg-white rounded-full px-7 py-4 mb-5'>
                                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#00507C"/>
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#00507C"/>
                                </svg>
                                <input placeholder='Nhập Password' className='placeholder-[var(--black-blue)] bg-transparent focus:outline-none' type="text" name="" id="" />
                            </div>
                            <div className='flex items-center gap-3'>
                                <input className='appearance-none h-5 w-5 rounded-full border-4 border-blue-300 checked:bg-[var(--black-blue)] cursor-pointer transition-all' type="checkbox" name="" id="" />
                                <div>
                                    <span className='text-[var(--black-blue)]'>Tôi đã đọc và đồng ý với</span><span className='font-bold'>&nbsp;Thỏa thuận và điều khoản</span>
                                </div>
                            </div>
                            <button className='my-10 py-5 px-16 bg-[var(--black-blue)] text-white rounded-full uppercase'>Đăng nhập</button>
                            <label className='cursor-pointer' onClick={() => setLoginStatus(!isLogin)} htmlFor="loginStatus">
                                <span className='text-[var(--black-blue)]'>Bạn chưa có tài khoản?</span><span className='font-bold'>&nbsp;Đăng ký</span>
                            </label>
                        </form>
                        :
                        // Register Form
                        <form className='flex flex-col items-center w-full'>
                            <div className='flex gap-3 w-2/3 bg-white rounded-full px-7 py-4 mb-5'>
                                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#00507C"/>
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#00507C"/>
                                </svg>
                                <input placeholder='Nhập tên' className='placeholder-[var(--black-blue)] bg-transparent focus:outline-none' type="text" name="" id="" />
                            </div>
                            <div className='flex gap-3 w-2/3 bg-white rounded-full px-7 py-4 mb-5'>
                                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00507C"/>
                                    <path d="M22 6L12 13L2 6" stroke="#00507C"/>
                                </svg>
                                <input placeholder='Nhập địa chỉ Email' className='placeholder-[var(--black-blue)] bg-transparent focus:outline-none' type="text" name="" id="" />
                            </div>
                            <div className='flex gap-3 w-2/3 bg-white rounded-full px-7 py-4 mb-5'>
                                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#00507C"/>
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#00507C"/>
                                </svg>
                                <input placeholder='Nhập Password' className='placeholder-[var(--black-blue)] bg-transparent focus:outline-none' type="text" name="" id="" />
                            </div>
                            <div className='flex items-center gap-3'>
                                <input className='appearance-none h-5 w-5 rounded-full border-4 border-blue-300 checked:bg-[var(--black-blue)] cursor-pointer transition-all' type="checkbox" name="" id="" />
                                <div>
                                    <span className='text-[var(--black-blue)]'>Tôi đã đọc và đồng ý với</span><span className='font-bold'>&nbsp;Thỏa thuận và điều khoản</span>
                                </div>
                            </div>
                            <button className='my-10 py-5 px-16 bg-[var(--black-blue)] text-white rounded-full uppercase'>Tạo tài khoản</button>
                            <label className='cursor-pointer' onClick={() => setLoginStatus(!isLogin)} htmlFor="loginStatus">
                                <span className='text-[var(--black-blue)]'>Bạn đã có tài khoản?</span><span className='font-bold'>&nbsp;Đăng nhập</span>
                            </label>
                        </form>
                    }
                </div>
            </div>
        </div>
        <ServiceSTN/>
      </div>
    );
  };