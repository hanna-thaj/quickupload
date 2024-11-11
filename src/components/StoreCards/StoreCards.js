

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './StoreCards.css';  

const storeData = [
  {
    title: 'Electronics Store',
    subtitle: 'High-tech gadgets',
    location: 'Sharjah',
    hours: '9AM - 9PM',
    rating: '4.5/5',
    icon: 'bi bi-shop',
  },
  {
    title: 'Bookstore',
    subtitle: 'A reader’s paradise',
    location: 'AbuDhabi',
    hours: '10AM - 8PM',
    rating: '4.8/5',
    icon: 'bi bi-book',
  },
  {
    title: 'Clothing Boutique',
    subtitle: 'Fashion for all',
    location: 'Dubai',
    hours: '10AM - 10PM',
    rating: '4.2/5',
    icon: 'bi bi-bag',
  },
];

function StoreCards() {
  return (
    <Row className="my-4 store-cards-container">
      {storeData.map((store, index) => (
        <Col key={index} md={4} className="mb-3">
          <Card className="store-card">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">
                <i className={`${store.icon} me-2`}></i> {store.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{store.subtitle}</Card.Subtitle>
              <Card.Text>
                <i className="bi bi-geo-alt me-2"></i><strong>Location:</strong> {store.location}<br />
                <i className="bi bi-clock me-2"></i><strong>Open Hours:</strong> {store.hours}<br />
                <i className="bi bi-star-fill me-2"></i><strong>Rating:</strong> {store.rating}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StoreCards;
