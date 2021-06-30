import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import './index.css'
import { ButtonPrimary } from '../ButtonPrimary'


function CardContact() {
    return (

        <Card className="Card">
            <Image
                className="Img"
                src="https://www.ignilife.com/wp-content/uploads/2019/08/Depositphotos_181576768_l-2015-1024x684.jpg" rounded />
            <Card.Body className="CardBody">
                <h1>Serviços de Desenvolvimento</h1>
                <Card.Text>
                    <p>
                        Fornecemos Serviços de Desenvolvimento de páginas web e mobile responsivas com react, js, html e css.
                        Serviços de implementação Frontend, Backend, WebServer, DataBase e outros.
                        Consulte nossos colaboradores para mais informações.
                    </p>
                </Card.Text>
                <div className="Buttons">
                    <ButtonPrimary label="Contato" />
                    <ButtonPrimary label="Saber Mais" />

                </div>
            </Card.Body>
        </Card>
    )
}

export default CardContact