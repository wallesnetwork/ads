import Typed from "react-typed";
const CustomType = () => (
  <div>
    <h1
      style={{
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: "130px",
        color: "white"
      }}
    >
      Meillä asiointi on helppoa!
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
    <div style={{ position: "relative", margin: "10rem", height: "300px" }}>
      <img
        src="/static/Finnish_license_plate.png"
        alt="rekisterikilpi"
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          bottom: "18%",
          left: "49%",
          width: "30vw"
        }}
      />
      <Typed
        strings={["ABC-123", "OTU-566", "BPN-589", "CHJ-560"]}
        typeSpeed={100}
        backSpeed={50}
        loop
        showCursor={false}
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          bottom: "27%",
          left: "50%",
          fontSize: "8rem"
        }}
      />
    </div>
  </div>
);
export default CustomType;
