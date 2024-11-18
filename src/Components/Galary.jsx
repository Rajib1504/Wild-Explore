import Marquee from "react-fast-marquee";
const Galary = () => (
  <div>
    <div className="bg-[#f0f7fad7] mt-4">
      <div className=" flex flex-col justify-center items-center gap-3 py-6 sm:w-full md:w-11/12">
        <h1 className="text-2xl font-light mt-4">Memories we Saved</h1>
        <p className="text-center text-base sm:text-lg font-light sm:w-full md:w-9/12 mb-6">
          Adventures are more than just journeys—they’re stories we carry with
          us forever. At Wild Explore, we’ve captured unforgettable moments
          filled with breathtaking mountain vistas, icy trails, and the joy of
          exploration. These memories reflect our passion for connecting with
          nature and embracing its beauty. Take a glimpse into our adventures
          and relive the magic of the mountains through these cherished
          snapshots!
        </p>
      </div>
    </div>
    <Marquee pauseOnClick speed={30}>
      <div className="flex gap-2 flex-wrap items-center   border-green-[230px] object-cover  h-[350px] w-full">
        <img
          className="w-[230px] object-cover  h-[350px]  "
          src="https://i.ibb.co/BsQbN2Z/pexels-printexstar-11680706.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/8jPBxqJ/pexels-lazarevkirill-8532484.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/C2QkHtj/pexels-printexstar-11680708.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/9HdVpPj/pexels-bleri-22[230px] object-cover   h-[350px] 9034.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/jfwmvTP/pavan-mgv-JFYALq-Qih-o-unsplash.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/B28J1sh/daniel-vargas-am0-Kg-Eqz-Gg-M-unsplash.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/s6Xh5Hn/k15-photos-MXmx2-Bwvp-E-unsplash.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/7tgyqtX/pexels-fede-roveda-1461538-3[230px] object-cover   h-[350px] 5139.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/YycnV7p/pexels-vome-5930840.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/YpLDt1B/pexels-tobiandchris-20585288.jpg"
          alt=""
        />
        <img
          className="w-[230px] object-cover   h-[350px] "
          src="https://i.ibb.co/jyZCPQ2/pexels-melvinwahlin-2433356.jpg"
          alt=""
        />
      </div>
    </Marquee>
  </div>
);

export default Galary;
