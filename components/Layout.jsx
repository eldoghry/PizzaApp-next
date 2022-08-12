import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <div>footer</div> */}
    </>
  );
};

export default Layout;
