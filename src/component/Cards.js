import React, { Component } from 'react';
import Card from './Card';
import styles from './Cards.module.css';
import flower1 from '../images/d-ng-tr-n-qu-c-_FSA44MuXn4-unsplash.jpg';
import flower2 from '../images/thoa-ngo-EJW8vDTAV58-unsplash.jpg';
import flower3 from '../images/michael-dziedzic-JmBh0dbii9k-unsplash.jpg';
import flower4 from '../images/ilya-chunin-rc9dYZUA7r0-unsplash.jpg';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


class Cards extends Component {
  constructor() {
    super()
    this.state ={
      infoFlower : [ 
        {id : 1 , image : flower1 , name :'flower1' ,  color : 'red' } ,
        {id : 2 , image : flower2 , name : 'flower2' ,  color : 'pink' } ,
        {id : 3 , image : flower3, name : 'flower3' ,  color : 'green' } ,
        {id : 4 , image : flower4 , name : 'flower4' ,  color : 'yellow' }
  
      ]
    }
  }
  state = {  } 
  render() { 
    return (
      <div className={styles.container}>
        {this.state.infoFlower.map(info =>  <Card key={info.id} image={info.image} name = {info.name} id={info.id} color = {info.name} />)}
      </div>
    );
  }
}
export default Cards;