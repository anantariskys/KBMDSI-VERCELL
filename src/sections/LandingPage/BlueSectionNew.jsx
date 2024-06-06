import React from 'react'
import wave3 from "../../assets/landingpage/wave blue.png";
import ig from "../../assets/landingpage/instagram.png";
import wa from "../../assets/landingpage/whatsapp.png";
import jasa from "../../assets/landingpage/jasa.png"

const BlueSectionNew = () => {
  return (
      <section className="relative mx-auto bg-gradient-to-b from-[#2338BD] from-30% to-Custom-Dark-Blue">
          <div className="lg:pb-[18%] md:pb-[10%] pb-[5%]">
              <div className="flex md:flex-row flex-col justify-evenly">
                  <div className="flex flex-col text-center md:text-left justify-center lg:pt-0 md:pt-10 lg:w-2/5">
                      <h2 className="font-glacial-indifference-bold text-[#F6EF3B] lg:text-6xl md:text-5xl text-2xl leading-none">
                          BINGUNG
                      </h2>
                      <h2 className="font-glacial-indifference-bold text-[#F6EF3B] lg:text-8xl md:text-6xl text-4xl leading-none">
                          CODING ?
                      </h2>
                      <div className="flex flex-col mt-2">
                          <h2
                              className="font-glacial-indifference-bold bg-gradient-to-b from-Custom-Blue to-Custom-Purple-1 text-transparent bg-clip-text
                      lg:text-6xl md:text-4xl text-xl "
                          >
                              JASA CODING
                          </h2>
                          <h2
                              className="font-glacial-indifference-bold bg-gradient-to-b from-Custom-Blue to-Custom-Purple-1 text-transparent bg-clip-text
                      lg:text-6xl md:text-4xl lg:hidden md:inline hidden"
                          >
                              SOLUSINYA
                          </h2>
                      </div>
                  </div>
                  <img
                      className="lg:size-96 md:size-80 size-72 self-center drop-shadow-[5px_30px_10px_rgba(0,0,0,0.25)]"
                      src={jasa}
                      alt=""
                  />
              </div>
              <div className="flex lg:flex-row flex-col lg:items-end lg:justify-evenly items-center lg:gap-0 md:gap-10 gap-5">
                  <p className="font-glacial-indifference-bold lg:text-2xl md:text-xl text-xs text-center md:text-left text-slate-50 lg:w-2/5 w-4/5">
                      Mari Wujudkan ide-ide cemerlang yang kamu miliki menjadi
                      kenyataan dengan tim ahli KBMDSI SwaraShakti. Jelajahi
                      potensi tanpa batas bersama kami!
                  </p>
                  <div className="flex gap-8 h-fit md:self-start lg:ps-0 md:ps-[10%]">
                      <a
                          className="bg-gradient-to-b from-Custom-Purple-1 to-Custom-Blue text-slate-50 
                          md:p-4 p-2 rounded-full md:text-2xl text-sm font-glacial-indifference-bold"
                          href="#"
                      >
                          Hubungi Kami
                      </a>
                      <a
                          className="bg-gradient-to-b from-Custom-Purple-1 to-Custom-Blue md:p-4 p-2 rounded-full"
                          href="#"
                      >
                          <img className="md:size-9 size-4" src={ig} alt="" />
                      </a>
                      <a
                          className="bg-gradient-to-b from-Custom-Purple-1 to-Custom-Blue md:p-4 p-2 rounded-full"
                          href="#"
                      >
                          <img className="md:size-9 size-4" src={wa} alt="" />
                      </a>
                  </div>
              </div>
          </div>
          <img className="absolute bottom-0 w-full" src={wave3} alt="" />
      </section>
  );
}

export default BlueSectionNew