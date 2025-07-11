import Topnav from "../pages/Topnav";
import Footer from "../pages/Footer";

const BaseLayout = (props) => {
  return (
    <div className="flex min-h-screen flex-col w-full mx-auto">
      <div>
        <Topnav />
        <main className="flex-1 my-auto mx-auto bg-gray-50">
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
