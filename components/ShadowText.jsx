const ShadowText = ({ children, style, ...rest }) => (
  <h1
    style={{
      fontSize: "2rem",
      textShadow: "0 19px 38px rgba(0,0,0,0.30)",
      width: "100%",
      ...style
    }}
    {...rest}
  >
    {children}
  </h1>
);

export default ShadowText;
