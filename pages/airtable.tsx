import axios from 'axios'
import Slider from "react-slick";
import ProductCard from '../components/ProductCard'
import Varaosasto from '../components/Varaosasto';

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settingsInner = {
    ...settings,
    autoplaySpeed: 10000
  };

const Airtable = ({ data }) =>
    <div style={{ height: "100%" }}>
        <Slider {...settings}>
            {data.records.map(e => <ProductCard key={e.id} {...e.fields} />)}
            <Varaosasto/>
        </Slider>
    </div>


Airtable.getInitialProps = async () => {
    const BASE_URL = `https://api.airtable.com/v0/app7kUYATYJe2neFL/mainokset`
    const params = {
        view: "Grid view",
        // maxRecords: 3
    }
    const headers = {
        Authorization: "Bearer keyBUYeYpHvQfGKlP"
    }
    const { data } = await axios.get(BASE_URL, { headers, params })
    console.log(data.records[0].kuva)
    return { data }
}

export default Airtable