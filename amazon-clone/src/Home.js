import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_2x._CB431860450_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123hgh4"
          title="Car"
          price={1000}
          rating={5}
          image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Urus_pearl%20capsule-black_caliper-sceneplate_env.png"
        />
        <Product
          id="1aa554"
          title='AmazonBasics Lightweight Super Soft Easy Care Microfiber Sheet Set with 16"  Deep Pockets - Queen, Spa Blue'
          price={19.58}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71I38txiDQL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="36554"
          title="Labtop"
          price={19.28}
          rating={2}
          image="https://www.apple.com/v/mac/home/as/images/overview/compare/macbook_air__bfz9o93hnyuq_large.jpg"
        />
        <Product
          id="12313yuyu6554"
          title="Camera"
          price={2000}
          rating={4}
          image="https://www.usa.canon.com/internet/wcm/connect/us/5a68661f-6c13-457c-b310-ffc7e8295f23/eos-r5_1_675x450.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-5a68661f-6c13-457c-b310-ffc7e8295f23-ncPsrCU"
        />
        <Product
          id="1hhgh23136554"
          title="Watch"
          price={50}
          rating={5}
          image="https://content.rolex.com/dam/homepage/roller/all-watches/watches_datejust_m126333-0010_1802jva_001_r_portrait.jpg?imwidth=640"
        />
      </div>
      <div className="home__row">
        <Product
          id="12dsds3ghgjgfgfgfgfgfg136554"
          title="iPad"
          price={500}
          rating={3}
          image="https://www.apple.com/v/ipad/shared/compare/d/images/overview/compare_ipad_pro__dt5x47gpupea_large_2x.png"
        />
      </div>
    </div>
  );
}

export default Home;
