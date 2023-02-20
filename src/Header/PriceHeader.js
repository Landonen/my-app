
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import PriceLiteralElement from './PriceLiteralElement';
import { getCurrentPrice } from '../services/apiService';
import ErrorModal from '../ErrorModal';

function PriceHeader(props) {

  const [currentPrice, setCurrentPrice] = useState(0);
  const [errorMessage, setErrorMessage ] = useState(null);

  useEffect(() => {
    getCurrentPrice()
    .then(({success, data, messages}) => {
      if (!success) {
        throw messages[0];
      }

      setCurrentPrice(data[0].price);
    })
    .catch((error) => setErrorMessage(error.toString()));
  }, []);
  return (
    <>
      <Row className="mb-4">
        <Col><PriceLiteralElement/></Col>
        <Col>
          <SelectPriceType {...props}/>
        </Col>
        <Col>{currentPrice}</Col>
      </Row>
      <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)}/>
    </>
  );
}

export default PriceHeader;