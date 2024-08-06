import React, { useContext } from 'react'
import { TwitterLogo } from '../../assets/img/logo'
import { Inputs } from '../../components/input'
import { Link } from 'react-router-dom'
import { Btn } from '../../components/button/btn'
import { Context } from '../../context/context'

export const SignIn = () => {
  const {setToken} = useContext(Context)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }
    if(data.login == "Nurillo" && data.password == "123"){
      setToken(data)
      e.target.reset()
    }
    else{
      alert("Xatolik bor")
    }
  }
  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmitLogin} className='w-[450px] mx-auto mt-[60px]'>
        <Link to={"/"} className='mb-[36px] inline-block'><TwitterLogo/></Link>
        <h2 className='text-[42px] font-bold mb-[36px]'>Log in to Twitter</h2>
        <Inputs isRequired={true} placeholder={"Phone number, email address"} type={"text"} name={"login"} extraClass={"mb-[25px]"}/>
        <Inputs isRequired={true} placeholder={"Password"} type={"password"} name={"password"} extraClass={"mb-[25px]"}/>
        <Btn type={'submit'}>Log In</Btn>
        <div className='flex justify-between items-center mt-[40px]'>
          <Link className='text-[18px] text-[#1DA1F2]' to={"/sign-up"}>Forgot password?</Link>
          <Link className='text-[18px] text-[#1DA1F2]' to={"/sign-up"}>Sign up to Twitter</Link>
        </div>
      </form>
    </>
  )
}
