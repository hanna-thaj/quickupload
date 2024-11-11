

import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';
import { FaCloudUploadAlt, FaStore, FaTags, FaFileImage, FaArrowUp } from 'react-icons/fa';
import './UploadForm.css';  

function UploadForm() {
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedProducts, setUploadedProducts] = useState([]); // Array to store multiple uploaded products

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents the page from refreshing on form submission.
    if (file) {
      const url = URL.createObjectURL(file); //Creates a temporary URL for the uploaded file to display immediately.
      const newProduct = { store, category, mediaUrl: url, fileType: file.type };  // Store file type
      setUploadedProducts([...uploadedProducts, newProduct]); // Add the new product to the array
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      // Reset the form fields
      setStore('');
      setCategory('');
      setFile(null);
      setMediaUrl(null);
    }
  };
// form components handles user inputs.
  return (
    <div className="upload-container">
      <div className="upload-form">
        <h2 className="text-light mb-3 text-center">
          <FaCloudUploadAlt className="me-2" />
          Upload Product
        </h2>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <Form.Group controlId="storeSelect">
                <Form.Label className="text-light">
                  <FaStore className="me-2" />
                  Select Store
                </Form.Label>
                <Form.Control
                  as="select"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="bg-dark text-light"
                >
                  <option value="">Choose a store</option>
                  <option value="Electronics Store">Electronics Store</option>
                  <option value="Bookstore">Bookstore</option>
                  <option value="Clothing Boutique">Clothing Boutique</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="categorySelect">
                <Form.Label className="text-light">
                  <FaTags className="me-2" />
                  Select Category
                </Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-dark text-light"
                >
                  <option value="">Choose a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Books">Books</option>
                  <option value="Clothing">Clothing</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="fileUpload">
                <Form.Label className="text-light">
                  <FaFileImage className="me-2" />
                  Upload Image/Video
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="bg-dark text-light"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="light" type="submit" className="upload-btn mt-3 w-100">
            <FaArrowUp className="me-2" />
            Upload Product
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="success" className="alert-success mt-4">
            Product has been successfully uploaded!
          </Alert>
        )}

        {/* Display all uploaded products */}
        <div className="uploaded-products">
          {uploadedProducts.map((product, index) => (
            <Card
              key={index}
              bg="dark"
              text="light"
              className="upload-card shadow m-2"
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Uploaded Product</Card.Title>
                <Card.Subtitle className="mb-2">{product.category}</Card.Subtitle>
                <Card.Text>
                  <FaStore className="me-2" />
                  <strong>Store:</strong> {product.store}
                </Card.Text>
                <div className="video-container">
                  {product.fileType && product.fileType.startsWith('image') ? (
                    <Card.Img
                      variant="bottom"
                      src={product.mediaUrl}
                      alt="Uploaded"
                    />
                  ) : (
                    <video controls src={product.mediaUrl} />
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
