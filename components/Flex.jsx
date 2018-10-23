const Grid = ({ children, style, ...rest }) => (
  <div
    style={{
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
      padding: "1rem",
      ...style
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Grid;
