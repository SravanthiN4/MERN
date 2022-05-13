import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col,Image, ListGroup, Card, Button} from  'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { useParams } from 'react-router-dom'

const ProductScreen = ({ match }) => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id)

  return (
    <div>{product.name}</div>
  )
}

export default ProductScreen    