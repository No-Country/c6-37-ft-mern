import React from 'react';
import Header from '../../components/header/Header';
import AboutUs from '../../components/aboutUs/AboutUs';
import PetShopCarousel from '../../components/petShop/PetShopCarousel';
import ContactUs from '../../components/contactUs/ContactUs';
import Services from '../../components/services/Services';
import CustomerReviews from '../../components/reviews/CustomerReviews';

const Home = () => {
  return (
    <>
      <Header />
      <Services/>
      <AboutUs />
      <PetShopCarousel />
      <CustomerReviews/>
      <ContactUs />
    </>
  );
};

export default Home;
