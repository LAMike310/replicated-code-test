import React from 'react';

export default class TestimonialCard extends React.Component {
  render() {
  	let { testimonialData } = this.props
  	let { testimony, company, first_name, last_name, photo_url } = testimonialData
    if(Object.keys(testimonialData).length != 0) {
        return (
          <div className="testimonial-card">
          	<img className="picture float-left" src={photo_url} alt={`${first_name} ${last_name}`}/>
          	<p className="name">{first_name} {last_name}</p>
          	<p className="company">{company}</p>
          	<div className="row">
          		<div className="column">
          				<p className="copy">
          					"{ testimony }"
          				</p>
          		</div>
          	</div>
          </div>
        );
    }
    return <div></div>
  }
}
