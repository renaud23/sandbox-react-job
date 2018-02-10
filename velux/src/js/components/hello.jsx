import React from "react";
import PropTypes from "prop-types";
import { FormControl, Button } from "react-bootstrap";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "" };
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.asyncAction();
  }

  handleChangeNom(e) {
    this.setState({ nom: e.target.value });
  }

  handleClick() {
    this.props.changerNom(this.state.nom);
  }

  render() {
    return (
      <div>
        Bonjour {this.props.nom}
        <div>
          <FormControl type="text" value={this.state.nom} onChange={this.handleChangeNom} />
          <Button onClick={this.handleClick}>changer de nom</Button>
        </div>
      </div>
    );
  }
}

Hello.propTypes = {
  nom: PropTypes.string.isRequired,
  changerNom: PropTypes.func.isRequired,
  asyncAction: PropTypes.func.isRequired
};
