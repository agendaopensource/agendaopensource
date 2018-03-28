import React from 'react';
import { Link } from 'react-static';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './style/index.scss';

const Hbbar = ({ open, ...props }) => (
  <div className="hbbar" open={open} {...props}>
    <div className="hb1" />
    <div className="hb2" />
    <div className="hb3" />
  </div>
);

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { menu } = this.props;
    return (
      <div className={classNames('appBar', this.state.open && 'open')}>
        <Hbbar open={this.state.open} onClick={this.toggle} />
        <nav>
          <Link to="/" href="/" className="logo">
            Open Agenda
          </Link>
          {menu.map(menuOption => (
            <Link
              key={menuOption.id}
              to={menuOption.link}
              href={menuOption.link}
              rel={menuOption.rel}
              target={menuOption.target}
              onClick={this.toggle}
            >
              {menuOption.label}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
}

Hbbar.propTypes = {
  open: PropTypes.bool.isRequired,
};

AppBar.propTypes = {
  menu: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppBar);
