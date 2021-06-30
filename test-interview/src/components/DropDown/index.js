import Dropdown from 'react-bootstrap/Dropdown'
import './index.css'


export default function DropDown({value}) {
    return (
        <Dropdown className="DropDown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Selecione o Serviço Desejado
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" value="1">Financeiros</Dropdown.Item>
                <Dropdown.Item href="#/action-2" value="2">Estruturação de Projeto</Dropdown.Item>
                <Dropdown.Item href="#/action-3" value="3">Implementação de Melhoria</Dropdown.Item>
                <Dropdown.Item href="#/action-4" value="4">Aplicação Web</Dropdown.Item>
                <Dropdown.Item href="#/action-5" value="5">Aplicação Nativa</Dropdown.Item>
                <Dropdown.Item href="#/action-6" value="6">Orçamento sem Compromisso</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}