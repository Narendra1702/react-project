import "./style.css";
import Subscription from "./Subscription";
import Clinets from "./Clinets";
import Experience from "./Experience";
import BestServices from "./BestServices";
import Search from "./Search";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
const Home = ({addtocart, login, Productshow}) => {
  const navigate = useNavigate()
  const price=(Product) =>{
    Productshow(Product)
    navigate('/price')
  }
  return (
    <div>
      <Hero />

      {/* location  distence */}

      <Search />

      {/* best services  */}
      
      <BestServices />

      {/* Explore  */}

      {/* experience page  */}

      <Experience />

      {/* gallery */}
      <Gallery/>

      {/* clients  */}

      <Clinets />
      {/* Subscription  */}

      <Subscription />

      {/* main div  */}
    </div>
  );
}

export default Home;
