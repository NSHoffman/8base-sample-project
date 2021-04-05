import React from 'react';
import { Loader } from '@8base/boost';

const { REACT_APP_8BASE_API_ENDPOINT: workspace } = process.env;

export class ProductThumbnail extends React.Component {
  state = {
    default: '',
    errors: null,
  };

  async componentDidMount() {
    if (!this.props.src) {
      this.setDefaultImage(this.props.query);
    }
  }

  setDefaultImage = async query => {
    const formattedQuery = query.replace(/\s/g, '_');
    const { image, errors } = await fetch(`${workspace}/webhook/${formattedQuery}/get-product-image`).then(res => res.json());

    if (errors.length) {
      this.setState({ errors });
    } 
    else {
      this.setState({ default: image });
    }
  };

  render() {
    const style = { width: '5rem', height: '5rem' };

    if (this.props.src) {
      return <img src={this.props.src} alt={`${this.props.query} thumbnail`} style={style} />;
    } 
    else if (this.state.default) {
      return <img src={this.state.default} alt={`${this.props.query} thumbnail`} style={style} />;
    }
    else if (this.state.errors) {
      return 'Not Available';
    } 
    else {
      return <Loader />;
    }
  }
}
