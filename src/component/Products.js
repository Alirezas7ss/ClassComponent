import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';
import styles from './Products.module.css'
export default class PRODUCTS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : []
    }
  }

  componentDidMount() {
     axios.get('https://fakestoreapi.com/products')
     .then(response => this.setState({
       products :response.data ,
     }))
  }

  render() {
    return (
  <div className={styles.container}>
         {this.state.products.length ? this.state.products.map(product =>  <Card key={product.id} image={product.image} name = {product.title} color = {product.price} />) : <h1>LOADING 🔃</h1> }
        
      </div>
    )
  }
}
