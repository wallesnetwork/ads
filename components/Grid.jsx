const Grid = ({ children, style, ...rest }) => (
  <div
    style={{
      display: "grid",
      placeContent: "center",
      placeItems: "center",
      padding: "1rem",
      justifyContent: "space-between",
      ...style
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Grid;
