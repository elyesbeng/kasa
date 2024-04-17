import React from "react";
import './pageErreur.scss';
import { Link } from "react-router-dom";

function PageErreur(){
    return (
        <section className="Error404">
            <h1 className="title404">404</h1>
            <p className="MessageErreur">Oups! La page que vous demandez n'existe pas</p>
            <Link to="/">Retour a la page d'accueil</Link>
        </section>
        
    );
};

export default PageErreur;