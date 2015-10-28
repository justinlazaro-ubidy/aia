import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropdown</p>

          <Dropdown trigger={<button className="btn -default">Open Dropdown</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropup</p>

          <Dropdown trigger={<button className="btn -default">Open Dropup</button>} position={{ y: 'top' }}>
            <div className="dropdown -up">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropdown right</p>

          <Dropdown trigger={<button className="btn -default">Open Dropdown</button>} position={{ x: 'right' }}>
            <div className="dropdown -right">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With icons</p>

          <Dropdown trigger={<button className="btn -default">Open Dropdown</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#"><i className="icon icon-user3"></i> My Profile</a>
                <a href="#"><i className="icon icon-settings"></i> Settings</a>
                <a href="#"><i className="icon icon-signout"></i> Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

      </div>
    );
  }
}
