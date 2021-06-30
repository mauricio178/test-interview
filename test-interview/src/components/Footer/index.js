import React from 'react';
import { FiPhone, FiUsers, FiTwitter, FiTwitch, FiMail } from "react-icons/fi";



function Footer() {
    return (

        <div className="Footer">
            <div className="Title">
                <h3> Contatos e Redes Sociais </h3>
            </div>
            <div className="Icons">
                <FiTwitch size="24"></FiTwitch>
                <FiPhone size="24"></FiPhone>
                <FiUsers size="24"></FiUsers>
                <FiTwitter size="24"></FiTwitter>
                <FiMail size="24"></FiMail>
            </div>

        </div>
    );
}

export default Footer