import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class NavbarCustom extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectRight = this.handleSelectRight.bind(this);
    this.accueil = this.accueil.bind(this);
  }

  handleSelect(key) {
    this.props.changeIndexNavbar(key);
  }

  handleSelectRight(key) {
    console.log("coucou");
  }

  accueil() {
    this.props.changeIndexNavbar(0);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/accueil" onClick={this.accueil}>
              Essai relay
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav bsStyle="pills" activeKey={this.props.index} onSelect={this.handleSelect}>
            <LinkContainer to="/accueil">
              <NavItem eventKey={0}> Accueil</NavItem>
            </LinkContainer>
            <LinkContainer to="/page-2">
              <NavItem eventKey={1}>Page 2</NavItem>
            </LinkContainer>
          </Nav>

          <Nav pullRight onSelect={this.handleSelectRight}>
            <LinkContainer to="/bye">
              <NavItem eventKey={1}>
                <Glyphicon glyph="log-out" />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavbarCustom.propTypes = {
  index: PropTypes.number.isRequired,
  changeIndexNavbar: PropTypes.func.isRequired
};

export default NavbarCustom;
