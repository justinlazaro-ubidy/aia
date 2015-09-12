import React from 'react';
import { Link } from 'react-router';

export default class Docs extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <nav className="list-group" role="menu">
            <Link to="/scaffolding" activeClass="-selected" className="menuitem">Scaffolding</Link>
            <Link to="/layout" activeClass="-selected" className="menuitem">Layout</Link>
            <Link to="/type" activeClass="-selected" className="menuitem">Type</Link>
            <Link to="/buttons" activeClass="-selected" className="menuitem">Buttons</Link>
            <Link to="/alerts" activeClass="-selected" className="menuitem">Alerts</Link>
            <Link to="/labels" activeClass="-selected" className="menuitem">Labels</Link>
            <Link to="/slate" activeClass="-selected" className="menuitem">Slate</Link>
            <Link to="/guidelines" activeClass="-selected" className="menuitem">Guidelines</Link>
            <Link to="/colors" activeClass="-selected" className="menuitem">Colors</Link>
          </nav>
        </div>

        <div className="col-md-9">
          {this.props.children}
        </div>
      </div>
    );
  }
}