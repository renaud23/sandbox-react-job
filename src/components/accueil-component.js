import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => (
  <div className="accueil">
    Bien le bonjour mon petit monsieur !!! <Link to="/parici">parici</Link>
  </div>
);

export default Accueil;
