import React from 'react';
import '../css/Navigation.scss';

export default class NavigationContainer extends React.Component {
  render() {
  	let { logo, items, isMobile } = this.props
    return (
        <div className="navigation-container container full-width-container">
          <div className="row">
          <div className="column">
             <img className="logo" src={logo} alt="ELK" />
          </div>
          <div className={isMobile ? "column center" : "column column-50 column-offset-25"}>
            <ul className={isMobile ? "header-link-list" : "float-right header-link-list"}>
               {items.map(headerLink => {
                 if(headerLink.button) {
                    return <li className={isMobile ? "" : "float-left"} key={Math.random()}>
                      <a href="#" className='start-button'>
                        {headerLink.title}
                      </a>
                    </li>
                  }
                  return <li className={isMobile ? "" : "float-left"} key={Math.random()}>
                    {headerLink.title}
                  </li>
                 }               
              )}
             </ul>
          </div>
          </div>
        </div>
    );
  }
}
