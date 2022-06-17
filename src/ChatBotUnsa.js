import React, { Component } from "react";
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class ChatBotUnsa extends Component {
  render() {
    return (
      <ChatBot floating = {true}
        steps={[
          {
            id: '1',
            message: 'Bienvenido a UNSABot!\n¿Cómo te llamas?',
            trigger: 'name'
          },
          {
            id: 'name',
            user: true,
            trigger: '2'
          },
          {
            id: '2',
            message: 'Encantado de conocerte {previousValue}!',
            trigger: '3'
          },
          {
            id: '3',
            message: '¿En qué sistema tienes problemas?',
            trigger: 'sistemas'
          },
          {
            id: 'sistemas',
            options: [
                { value: 'caja', label: 'Problemas con SisCaja', trigger: '4' },
                { value: 'unsapay', label: 'Problemas con UnsaPay', trigger: '4' },
                { value: 'admision', label: 'Problemas con Admisión', trigger: '4' },
            ]
          },
          {
            id: '4',
            message: '¿Qué problema presenta el sistema?',
            trigger: 'tipos'
          },
          {
            id: 'tipos',
            options: [
                { value: 'login', label: 'No puedo iniciar sesión', trigger: '5' },
                { value: 'function', label: 'Mal funcionamiento', trigger: '5' },
                { value: 'interface', label: 'No se ve bien en el celular o PC', trigger: '5' },
                { value: 'tutorial', label: 'No sé como usarlo', trigger: '6' },
            ]
          },
          {
            id: '5',
            message: 'Por favor, registra un nuevo ticket para la OUIS, diles que vas de mi parte ;)',
            trigger: '7'
          },
          {
            id: '6',
            component: (
                <div> Por favor, revisa el siguiente 
                    <a target={'_blank'} href="https://docs.google.com/document/d/1jQAooi7EoNn889KN-6SU7qw73fg0f2OctXPhcP_GUHg/edit?usp=sharing">tutorial de Siscaja</a>     
                </div>
              ),
            trigger: '7'
          },
          {
            id: '7',
            message: '¿Deseas hacer otra consulta conmigo?',
            trigger: 'consultas'
          },
          {
            id: 'consultas',
            options: [
                { value: 'si', label: 'Si, por favor.', trigger: '3' },
                { value: 'no', label: 'No, muchas gracias', trigger: '8' },
            ]
          },
          {
            id: '8',
            message: 'Muchas gracias por contactarte conmigo!',
            end: true,
          },
        ]}
      />
    );
  }
}

export {ChatBotUnsa};