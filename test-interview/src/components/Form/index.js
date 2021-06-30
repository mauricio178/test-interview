import './index.css'
import Form from 'react-bootstrap/Form'
import { FiMenu } from "react-icons/fi";
import { ButtonPrimary } from '../ButtonPrimary'
import DropDown from '../DropDown'
import * as Yup from 'yup'


function Formulario(props) {

    return (

        <Form className="DivForm">
            <div className="Title">
                <h1>
                    Solicite um Orçamento
                </h1>
            </div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Seu Melhor Email</Form.Label>
                <Form.Control className="Input" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control className="Input" type="text" placeholder="Nome" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
                <Form.Label>Numero de Telefone</Form.Label>
                <Form.Control className="Input" type="email" placeholder="Número de Telefone" />
            </Form.Group>

            <Form.Group controlId="formBasicProduct">
                <DropDown />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Receber Noticias por E-mail" />
            </Form.Group>
            <ButtonPrimary label="Enviar" type="submit" />
        </Form>
    );
}



export default Formulario