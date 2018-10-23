import Slider from "react-slick";
import Typed from "react-typed";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
const GET_PRODUCTS = gql`
  query {
    allTuotes {
      nimi
      hinta
      id
      tuotekuvaus
      image {
        url
      }
    }
  }
`;
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
const AutoTypeLicensePlate = ({ name }) => (
  <div
    style={{
      display: "grid",
      height: "100%",
      gridGap: "3rem",
      justifyItems: "center",
      marginTop: "20rem"
    }}
  >
    <h1
      style={{
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: "130px",
        color: "white"
      }}
    >
      Meillä asiointi on helppoa! {name}
    </h1>
    <h2
      style={{
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: "54px",
        color: "white"
      }}
    >
      Tarvitset vain autosi rekisterinumeron
    </h2>
    <img
      style={{ justifySelf: "center", width: "700px" }}
      src="./static/Finnish_license_plate.png"
      alt="rekisterikilpi"
    />
    <Typed
      strings={["ABC-123", "OTU-566", "BPN-589", "CHJ-560"]}
      typeSpeed={100}
      backSpeed={50}
      attr="value"
      loop
    >
      <input
        style={{
          position: "relative",
          top: "-200px",
          left: "35px",
          width: "580px",
          height: "127px",
          alignSelf: "center",
          textAlign: "center",
          fontSize: "120px",
          color: "black"
        }}
        type="text"
      />
    </Typed>
  </div>
);
const Page1 = () => (
  <div style={{ display: "grid", alignItems: "center", height: "100vh" }}>
    <h1
      style={{
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: "80px",
        color: "white"
      }}
    >
      Yli 30,000 tuotenimikkeen valikoimasta varaosat ja tarvikkeet sinunkin
      ajoneuvoosi!
    </h1>
    <div
      style={{
        justifySelf: "center",
        background: "#13477b",
        width: "800px",
        height: "600px"
      }}
    >
      <Slider {...settingsInner}>
        <div>
          <img
            style={{
              width: "600px",
              height: "600px",
              alignSelf: "center",
              margin: "auto"
            }}
            src="./static/brakedisc.png"
            alt="brakedisc"
          />
        </div>{" "}
        <div>
          <img
            style={{
              width: "600px",
              height: "600px",
              alignSelf: "center",
              margin: "auto"
            }}
            src="./static/filters.png"
            alt="filters"
          />
        </div>
        <div>
          <img
            style={{
              width: "500px",
              height: "600px",
              alignSelf: "center",
              margin: "auto"
            }}
            src="./static/liquimoly.png"
            alt="liquimoly"
          />
        </div>
      </Slider>
    </div>
  </div>
);
const AutoTyped = ({ name, start, end }) => (
  <Typed
    strings={name}
    typeSpeed={100}
    backSpeed={50}
    attr="value"
    startDelay={start}
    backDelay={end}
    loop
  >
    <input
      id="autotype1"
      style={{
        position: "relative",
        top: "100px",
        left: "200px",
        width: "1500px",
        height: "127px",
        alignSelf: "center",
        textAlign: "center",
        fontSize: "90px",
        color: "black"
      }}
      type="text"
    />
  </Typed>
);
const toTime = (value, index, arr) => {
  const nlength = arr[index + 1] ? arr[index + 1].length : 0;
  const start =
    arr
      .slice(0, index)
      .map(e => e.length * 100)
      .reduce((a, b) => a + b, 0) +
    700 * index;
  const end =
    arr
      .slice(-index)
      .map(e => e.length * 50)
      .reduce((a, b) => a + b, 0) +
    700 * index;
  if (arr[index]) {
    return <AutoTyped name={[value]} start={start} end={end} />;
  } else {
    return <div />;
  }
};
const Page2 = () => (
  <div style={{ display: "grid", gridGap: "6rem" }}>
    {[
      "Lasinpesuneste loppu?",
      "Öljyvalo palaa autossa?",
      "Akku pitäisi vaihtaa?",
      "Polttimot palanut?"
    ].map(toTime)}
  </div>
);
/*
    <img
      style={{
        paddingLeft: "1rem",
        position: "fixed",
        bottom: "1rem",
        width: "100px"
      }}
      src="/static/logolevynega.png"
    /> */
const ProductPage = ({ id, nimi, hinta, tuotekuvaus, image: { url } }) => (
  <div key={id} style={{ padding: "1rem" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        justifyContent: "center",
        //justifyItems: "center",
        alignContent: "center"
        //alignItems: "center"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          //justifySelf: "center",
          fontFamily: "'Roboto', sans-serif",
          paddingLeft: "3rem",
          textShadow: "0 19px 38px rgba(0,0,0,0.30)"
        }}
      >
        <h1 style={{ fontSize: "100px", color: "white" }}>{nimi}</h1>
        <h2 style={{ fontSize: "50px", color: "white" }}>{tuotekuvaus}</h2>
        <div style={{ padding: "1rem 4rem 0 0" }}>
          <h2
            style={{
              fontSize: "200px",
              color: "white",
              verticalAlign: "text-bottom",
              textAlign: "center",
              background: "red",
              boxShadow:
                "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
            }}
          >
            {hinta.toFixed(2).replace(".", ",")}€
          </h2>
        </div>
      </div>
      <div
        style={{
          heigth: "300px",
          paddingRight: "1rem"
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            boxShadow:
              "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
          }}
          src={url}
          alt={nimi}
        />
      </div>
    </div>
  </div>
);
export default () => (
  <Query query={GET_PRODUCTS} pollInterval={1000}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error</div>;
      return (
        <div style={{ height: "100%" }}>
          <Slider {...settings}>
            {data.allTuotes.map(ProductPage)}
            <AutoTypeLicensePlate name={""} />
            <Page1 />
          </Slider>
        </div>
      );
    }}
  </Query>
);
//<Page2 />
