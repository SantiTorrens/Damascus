import React, { Component } from "react";
import Tipos2 from "./Tipos2";

export class Tipos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [
        {
          id: "1",
          name: "Raindrop",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum. In culpa qui officia
             deserunt mollit anim id est laborum.`,
          img:
            "https://cdn.shopify.com/s/files/1/0187/3353/1236/products/474438-42c03a6796f44c3dbdd7fea4dc3bdb3a_1024x1024_2x_69d28812-a819-469d-af04-9f385844d480_grande.jpg?v=1571720944",
        },
        {
          id: "2",
          name: "Ladder",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum. In culpa qui officia
             deserunt mollit anim id est laborum.`,
          img:
            "https://cdn.shopify.com/s/files/1/0017/4342/1493/products/1_grande.jpeg?v=1560939400",
        },
        {
          id: "3",
          name: "Random",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum. In culpa qui officia
             deserunt mollit anim id est laborum.`,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSILHB8Z4HpNDZoDsLSzM4eSknUdIqG2zMJDnphgnnn4hQH7zcq&usqp=CAU",
        },
        {
          id: "4",
          name: "Basketweave",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum. In culpa qui officia
             deserunt mollit anim id est laborum.`,
          img: "https://i.ebayimg.com/images/g/Px8AAOSwHBda0mzY/s-l400.jpg",
          
        },
      ],
      showTypes: false,
    };
  }
  toggleTypesHandler = () => {
    const doesShow = this.state.showTypes;
    this.setState({ showTypes: !doesShow });
  };

  render() {
    let types = null;
    if (this.state.showTypes) {
      types = (
        <div className="Tipos-grid">
          {this.state.types.map((type) => {
            return <Tipos2 name={type.name} info={type.info} img={type.img} imgbtn={type.imgbtn} />;
          })}
        </div>
      );
    }

    return (
      <section id="Tipos-container">
        <div className="tipos">
          <div className="tipos-txt">
            <h1 className="tipos-title">Tipos de Damasco:</h1>
            <h3 className="tipos-p">
              El acero de Damasco (denominado también como acero damasceno o
              acero damasquino) es un tipo de acero de crisol empleado y
              elaborado en Oriente Medio para la fabricación de espadas desde el
              1100 hasta el 1750. Las espadas de acero de Damasco eran
              legendarias por su dureza y su filo "casi eterno", siendo muy
              aclamadas en Europa. La técnica empleada para su elaboración es
              hoy en día un debate entre metalúrgicos especialistas en la
              elaboración del acero. Las espadas de acero damasquinado se
              conocían por los patrones de sus hojas. Hoy en día se emplea en la
              elaboración de cuchillos de alta gama.
            </h3>
            <button className="tipos-btn" onClick={this.toggleTypesHandler}>
              Learn More
            </button>
          </div>
        </div>
        {types}
      </section>
    );
  }
}

export default Tipos;
