import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions'
import thumbsUp from '../assets/images/thumbs-up.png'
import gulp from '../assets/images/gulp.png'
import CoffeeShopDetailsIndex from './CoffeeShopDetailsIndex'

class CoffeeShopsIndex extends Component {

  update(id) {
    fetch('http://localhost:9000/coffee_shops/' + id)
      .then(res => res.json())
      .then(shop => console.log(shop)
    )
  }

  render() {
    let flexContainer = {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      marginRight: 40,
      flexWrap: 'wrap'
    }

    let shops = this.props.shops.map(shop => (
      <div key={shop.id}>

        <h2><a href='{shop.website}'>{shop.name}</a></h2>

        <h3>Description</h3>
        <p style={{marginTop: -15}}>{shop.description}</p>

        <h3>Website</h3>
        <p style={{marginTop: -15}}><a href={shop.website}>{shop.website}</a></p>

        <h3>Address</h3>
        <p style={{marginTop: -15}}>{shop.address}</p>

        <CoffeeShopDetailsIndex
          shop={shop}
        />

      </div>
    ))

    return(
      <div>
        <h1>Every Single Awesome Shop</h1>
        {shops}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default CoffeeShopsIndex = connect(null, mapDispatchToProps)(CoffeeShopsIndex)
