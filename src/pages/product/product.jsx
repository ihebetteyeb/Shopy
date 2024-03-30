import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ProductOverView from "../../components/productOverview/productOverView.jsx"
import ProductDesc from "../../components/productDesc/productDesc.jsx"
import ItemCarousel from "../../components/itemCarousel/itemCarousel.jsx"


function Product() {
    return <div className="bg-backgroundColor">
        <Header></Header>
        <div className="my-20 lg:mx-40  sm:mx-10">
        <ProductOverView/>
        <ProductDesc/>
        <ItemCarousel
          title="Related products"
          indicators={false}
          navigators={true}
        ></ItemCarousel>
        </div>
        <Footer></Footer>
    </div>

  }
  
  export default Product;
  