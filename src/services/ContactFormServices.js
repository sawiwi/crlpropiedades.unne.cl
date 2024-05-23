import axios from 'axios';
import { parseRealtorDate } from '../utils';
const ContactFormServices = {
  sendContactForm: async (from, name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        '_subject': 'De: crlpropiedades.unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },


  //Meeting Form
  sendContactMeetingForm: async (
    from,
    name,
    email,
    subject,
    message,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Email: email,
        Asunto: subject,
        Mensaje: message,
        '_subject': 'De: crlpropiedades.unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },


};

export default ContactFormServices;
