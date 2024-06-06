import React from 'react'
import CardBpmNew from '../../../components/BPMDSI/CardBpmNew';
import foto from "../../../assets/profileBPMDSI/foto.png";
import Circle from '../../../components/Circle';
import wave from "../../../assets/profileBPMDSI/section.png";

const SectionBawah = () => {
  return (
      <section className="relative overflow-hidden">
          <img className="w-full z-50" src={wave} alt="" />
          <div className="bg-gradient-to-b from-Custom-Orange-1 to-Custom-Orange-2 lg:py-[15%] py-[10%] md:pb-[25%] md:px-0 px-[5%] md:pt-[15%] -mt-[10%] overflow-hidden">
              <div className="md:grid md:grid-cols-6 md:ms-4 justify-items-center">
                  <CardBpmNew
                      komisi="Komisi 1 Hukum"
                      classname="lg:col-span-3 col-span-6"
                      foto={foto}
                      index={1}
                      lastIndex={3}
                  />
                  <CardBpmNew
                      komisi="Komisi 2 Aspirasi dan Eksternal"
                      classname="lg:col-span-3 col-span-6"
                      foto={foto}
                      index={2}
                      lastIndex={3}
                  />
                  <CardBpmNew
                      komisi="Komisi 3 Pengawasan "
                      classname="col-span-6"
                      foto={foto}
                      index={3}
                      lastIndex={3}
                  />
              </div>
              <div className="circle">
                  <Circle
                      className="md:size-80 size-24 bg-Custom-Purple-2 rounded-full absolute z-10 md:-right-[5%] lg:bottom-[10%] md:bottom-[2%] bottom-[40%] -right-[5%] opacity-45
          "
                  />
                  <Circle
                      className="md:size-80 size-24 bg-Custom-Purple-2 rounded-full absolute z-10 -left-[10%] md:top-[18%] bottom-[5%] opacity-45
                  "
                  />
                  <Circle className="md:hidden size-24 bg-Custom-Purple-2 rounded-full absolute z-10 -left-[8%] top-[10%] opacity-45" />

                  <Circle className="md:size-60 size-16 bg-Custom-Purple-2 rounded-full absolute z-10 lg:-right-[3%] lg:bottom-[25%] md:bottom-[16%] bottom-[35%] md:-right-[5%] opacity-45" />
                  <Circle
                      className="lg:size-60 md:size-32 size-16 bg-Custom-Purple-2 rounded-full absolute z-10 lg:left-[10%] lg:-bottom-[10%] md:bottom-[2%] md:-left-[10%]
                  -right-[5%] -bottom-[4%] opacity-45"
                  />
                  <Circle
                      className="md:size-32 size-16 bg-Custom-Purple-2 rounded-full absolute z-10 lg:left-[10%] md:bottom-[30%] md:-left-[5%] lg:top-[46%] 
                  bottom-[48%] left-[90%] opacity-45"
                  />
                  <Circle
                      className="md:size-32 md:inline hidden  bg-Custom-Purple-2 rounded-full absolute z-10 md:top-[30%] lg:right-[5%]  md:right-[7%] lg:top-[25%] 
                  bottom-[48%] opacity-45"
                  />

                  <Circle className="md:hidden size-9 bg-Custom-Purple-2 rounded-full absolute z-10 bottom-[3.5%] left-[12%] opacity-45" />
                  <Circle className="md:hidden size-9 bg-Custom-Purple-2 rounded-full absolute z-10  bottom-[68%] left-[10%] opacity-45" />
                  <Circle className="md:hidden size-9 bg-Custom-Purple-2 rounded-full absolute z-10  bottom-[17%] right-[5%] opacity-45" />
                  <Circle className="md:hidden size-9 bg-Custom-Purple-2 rounded-full absolute z-10  top-[15%] right-[5%] opacity-45" />
              </div>
          </div>
      </section>
  );
}

export default SectionBawah