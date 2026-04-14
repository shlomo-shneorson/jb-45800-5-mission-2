import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import Main from "../Main/Main";

function Layout() {
  return (
    <div className="layout-shell">
      <Header />
      <main className="layout-content">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
