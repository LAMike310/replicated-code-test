import React from 'react';
import '../css/Testmonial.scss';
import TestimonialCard from './TestimonialCard'
export default class TestimonialContainer extends React.Component {
  render() {
  	let { title, items, isMobile } = this.props
    let className 
    if(isMobile) {
      return (
        <div className="testimonial-container">
          <p className="title">{title}</p>
            {items.map(item => {
                return (
                 <div className="row">
                    <TestimonialCard key={Math.random()} testimonialData={item} />
                  </div>
              )
            })}
        </div>
      )
    }
    return (
      <div className="testimonial-container">
      	<p className="title">{title}</p>
        <div className="row">
          <div className="column column-40 column-offset-10">
            <TestimonialCard key={Math.random()} testimonialData={items[0] || {}} />
          </div>
          <div className="column column-40">
            <TestimonialCard key={Math.random()} testimonialData={items[1] || {}} />
          </div>
        </div>
        <div className="row">
          <div className="column column-40 column-offset-10">
            <TestimonialCard key={Math.random()} testimonialData={items[2] || {}} />
          </div>
          <div className="column column-40">
            <TestimonialCard key={Math.random()} testimonialData={items[3] || {}} />
          </div>
        </div>
      </div>
    );
  }
}
