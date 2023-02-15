
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import PriceLiteralElement from './PriceLiteralElement';

function PriceHeader(props) {
  return (
      <Row className="mb-4">
        <Col><PriceLiteralElement/></Col>
        <Col>
          <SelectPriceType {...props}/>
        </Col>
        <Col>3 of 3</Col>
      </Row>
  );
}

export default PriceHeader;