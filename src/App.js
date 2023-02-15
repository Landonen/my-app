
import './App.scss';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/Navbar';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
// import ErrorModal from './ErrorModal';
// import Loading from './Loading';


function App() {
  const [activePrice, setActivePrice] = useState('low');

  // if(true) return <Loading />;
// if(true) return <ErrorModal handleClose={() => {}} errorMessage="Oshibka dostupa" />;

  return (
    <>
    <div className="container-wrapper pb-2">
    <Container>
      <NavBar />
      <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body />
    </Container>
    </div>
    {activePrice === 'low' ? <FooterLowPrice /> : <FooterHighPrice />}
  
    </>
  );
}

export default App;
