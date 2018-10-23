const Page = ({ children }) => (
  <div
    style={{
      display: "grid",
      height: "100vh",
      placeContent: "center",
      placeItems: "center"
    }}
  >
    {children}
  </div>
);
export default Page;
