import React, { Component } from "react";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        name: {
          value: "",
        },
        surname: {
          value: "",
        },
        email: {
          value: "",
        },
        text: {
          value: "Ingrese su mensaje",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick  = this.handleClick.bind(this);  
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };
  handleSubmit = (event) => {
    alert(
      "Se ha ingresado la información correctamente " +
        "Nombre: " +
        this.state.formControls.name.value +
        " Apellido: " +
        this.state.formControls.surname.value +
        " Email: " +
        this.state.formControls.email.value +
        " "
    );
    event.preventDefault();
  };
  handleClick = () => {
    this.setState({});
  };

  render() {
    return (
      <section id="Shop">
        <div className="Shop-txt">
          <h1 className="Shop-title">Shop</h1>
          <h2>Para adquirir un cuchillo de acero damasco escribinos!</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-container">
              <label className="form-label">
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={this.state.formControls.name.value}
                  onChange={this.handleChange}
                />
              </label>
              <label className="form-label">
                Apelllido:
                <input
                  type="text"
                  name="surname"
                  value={this.state.formControls.surname.value}
                  onChange={this.handleChange}
                />
              </label>
              <label className="form-label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={this.state.formControls.email.value}
                  onChange={this.handleChange}
                />
              </label>
              <label className="textarea-label">
                <textarea
                  type="text"
                  name="text"
                  value={this.state.formControls.text.value}
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                />
              </label>
            </div>

            <button className="submit" type="submit" value="submit">
              {" "}
              Enviar{" "}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Shop;
