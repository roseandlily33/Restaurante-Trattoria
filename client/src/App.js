import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing the Pages and Components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import CustomerPage from "./pages/Customer";
import LocationPage from "./pages/Location";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import DonationPage from "./pages/Donations";
import AdminPage from "./pages/Admin";

//For the styled components pluging;
import { ThemeProvider } from "styled-components";
import ReservationPage from "./pages/Reservation";
const theme = {
  colors: {
    orange: "#F19A38",
    darkOrange: "#D5762C",
    navy: "#0F1D2D",
    white: "#FFF",
    offWhite: "#F1F3F6",
    lightGrey: "#BDBBBC",
    darkGrey: "#717B85",
  },
};

//Set up the rest of the routes:
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/customer" element={<CustomerPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/reservation" element={<ReservationPage />}></Route>
            <Route path="/location" element={<LocationPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/donation" element={<DonationPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
