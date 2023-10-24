import React from "react";
import DocPoster from "../components/DocPoster";
// SpecialCard imports
import SpecialCard from "../components/SpecialCard";
import special4 from "../assets/special (4).png";
import special3 from "../assets/special (3).png";
import special2 from "../assets/special (2).png";
import special1 from "../assets/special (1).png";
// ServicesCard imports
import services1 from "../assets/services (1).png";
import services2 from "../assets/services (2).png";
import services3 from "../assets/services (3).png";
import services4 from "../assets/services (4).png";
import services5 from "../assets/services (5).png";
import ServicesCard from "../components/ServicesCard";

// WhyCoseCard imports
import WhyChose1 from "../assets/WhyChose1.png";
import WhyChose2 from "../assets/WhyChose2.png";
import WhyChose3 from "../assets/WhyChose3.png";
import WhyChose4 from "../assets/WhyChose4.png";
import WhyChose5 from "../assets/WhyChose5.png";
import WhyChoseCard from "../components/WhyChoseCard";

// DownloadApp imports
import DownloadApp from "../components/DownloadApp";

//PartnerCard imports
import Pcard1 from "../assets/Vector (2).png";
import Pcard2 from "../assets/Vector (3).png";
import Pcard3 from "../assets/Vector (4).png";
import Pcard4 from "../assets/Vector (5).png";
import Pcard5 from "../assets/Vector (6).png";
import Footer from "../components/Footer";
// USING WhyChoseCard for generating PartnerCard

import Navbar1 from "../components/Navbar1";


function Home() {
  return (
    <div>
      <Navbar1 />
      {/* Meet the right doctor.... poster */}
      <DocPoster title1="Meet the right Doctor and Get the Best Care!" />
      <h1 className="text-teal-900 text-3xl font-semibold my-6">
        Top Specialty
      </h1>

      {/* Top Specialty section */}
      <div className="flex justify-evenly pt-5">
        <SpecialCard imgUrl={special3} title="Skin" />
        <SpecialCard imgUrl={special2} title="Eye" />
        <SpecialCard imgUrl={special4} title="Densitry" />
        <SpecialCard imgUrl={special1} title="Ent" />
      </div>

      {/* Service badges */}
      <div className="flex justify-evenly mt-32">
        <ServicesCard imgUrl={services1} />
        <ServicesCard imgUrl={services2} />
        <ServicesCard imgUrl={services3} />
        <ServicesCard imgUrl={services4} />
        <ServicesCard imgUrl={services5} />
      </div>

      {/* Why you should chose us? heading */}
      <h1 className="text-teal-900 text-6xl font-semibold mt-20">
        Why you should Chose us?
      </h1>

        {/* Why chose us services */}
      <di>
        <div className="flex justify-evenly mt-16">
          <WhyChoseCard imgUrl={WhyChose1} title="All Specialties" />
          <WhyChoseCard imgUrl={WhyChose2} title="24/7 Services" />
          <WhyChoseCard imgUrl={WhyChose3} title="Privacy and Security" />
        </div>
        <div className="flex justify-evenly mt-20">
          <WhyChoseCard imgUrl={WhyChose4} title="Primary Care" />
          <WhyChoseCard imgUrl={WhyChose5} title="Verified Reviews" />
        </div>
      </di>

        {/* Donwload Mobile App */}
        <DownloadApp/>

        {/* our Partners, for generaring OurPartnerCard we used the "WhChoseCard" */}
        <di>
        <div className="flex justify-evenly mt-16">
          <WhyChoseCard imgUrl={Pcard1} title="E-Clinc" />
          <WhyChoseCard imgUrl={Pcard2} title="Health-Care" />
          <WhyChoseCard imgUrl={Pcard3} title="Jinjiya System" />
        </div>
        <div className="flex justify-evenly mt-20">
          <WhyChoseCard imgUrl={Pcard4} title="M Labs" />
          <WhyChoseCard imgUrl={Pcard5} title="One Health" />
        </div>
      </di>

        {/* Footer */}
        <Footer />


    </div>
  );
}

export default Home;
