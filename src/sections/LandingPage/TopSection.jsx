import React from 'react'
import ListCardAnggota from '../../components/Landing Page/ListCardAnggota'
import logo from "../../assets/landingpage/logo.png"
import wave1 from "../../assets/landingpage/wave orange 1.png";


const TopSection = () => {
  return (
      <>
          <section className="relative">
              <div className=" bg-purple-900 grid grid-cols-12 lg:gap-x-96 md:gap-x-[22rem] gap-x-64 overflow-hidden h-[100%] absolute w-[100%] top-0 object-cover">
                  <ListCardAnggota />
                  <ListCardAnggota />
                  <ListCardAnggota />
                  <ListCardAnggota />
                  <ListCardAnggota />
                  <ListCardAnggota />
                  <ListCardAnggota />
              </div>
              <div className="relative flex lg:flex-row flex-col-reverse justify-center z-10 py-[10%]">
                  <div className="flex flex-col justify-center">
                      <h2 className="lg:ps-0 md:ps-[10%] md:text-left text-center font-glacial-indifference-bold lg;text-[10rem] md:text-9xl text-6xl  leading-none bg-gradient-to-r from-[#D26938] to-[#AD37B9] bg-clip-text text-transparent">
                          KBMDSI
                      </h2>
                      <h2 className="md:ps-[11%] md:text-left text-center lg:ps-1 font-glacial-indifference-bold md:text-7xl text-4xl  ps-1 bg-gradient-to-r from-[#D26938] to-[#AD37B9] bg-clip-text text-transparent">
                          KABINET
                      </h2>
                  </div>
                  <img className="lg:size-96 md:size-60 size-56 w-fit md:self-start self-center" src={logo} alt="" />
              </div>
              <img className="w-[100%] relative" src={`${wave1}`} alt="" />
          </section>
      </>
  );
}

export default TopSection