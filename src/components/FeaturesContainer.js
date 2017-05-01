import React from 'react';
import '../css/Features.scss';

export default class FeaturesContainer extends React.Component {
  render() {
  	let { items, title } = this.props
    return (
        <div className="feature-container container">
          <div className="row">
            <div className="column">
                <p className="tagline">{title}</p>
            </div>
          </div>
          <div className="row">
            	{items.map(feature => {
            		return (
                  <div className="column" key={Math.random()}>
                    <p className="title">{feature.title}</p>
                    <p className="description">{feature.description}</p>
                  </div>
            		)
            	})}
          </div>
        </div>
    );
  }
}
