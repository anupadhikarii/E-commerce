import React from "react";
import HomeBoard from "../component/board/HomeBoard";
import TrendingItem from "../component/trending/TrendingItem";
import Purchase from "../component/purchase/Purchase";
import BlogBoard from "../component/blog/BlogBoard";
import FeatureBoard from "../component/featureboard/FeatureBoard";
import Subscribe from "../component/subscribe/Subscribe";
function Home() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div
      className='home_Container'
      style={{
        overflow: "",
      }}
    >
      <HomeBoard />
      <div className='sub-component'>
        <TrendingItem />
      </div>
      <div>
        <Purchase />
      </div>
      <div>
        <BlogBoard />
      </div>
      <div>
        <FeatureBoard />
      </div>
      <Subscribe></Subscribe>
    </div>
  );
}

export default Home;
