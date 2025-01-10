import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mtayyabbaig26@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid grid-cols-1 gap-5 h-full md:grid-cols-2 xl:grid-rows-6 xl:grid-cols-3">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Muhammad Tayyab</p>
              <p className="grid-subtext">
                with 1.5 years of experience , i have honed my skills in front
                end UI development with focus in responsiveness , adaptivity and
                animation
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">TECH Stack</p>
              <p className="grid-subtext">
                i specialize in javascript/jquery with the focus on
                Angular/React
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full h-fit sm:h-[326px] flex justify-center items-center">
              <Globe
                width={326}
                height={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 31.4504,
                    lng: 73.135,
                    text: "my workplace",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I can work across most timezones.</p>
              <p className="grid-subtext">
                I’m based in Faisalabad and open to remote work opportunities
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn’t just my profession; it’s my source of happiness.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[276px] sm:h-[126px] sm:object-top h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-headtext">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  mtayyabbaig26@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
