import React, { useState, useRef } from 'react';
/* import DatePicker from 'react-datepicker'; */
import ToastifyComponent from '../Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiForm';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import { parseRealtorDate } from '../../utils';
import { realtorData } from '../../constants/consts/realtor';
import { companyForm } from '../../constants/consts/company';
import { iconsList } from '../Icons';
const MeetingForm = ({ title, subtitle, }) => {
  const { MdEmail, MdPhoneIphone } = iconsList;

  const [formData, setFormData] = useState({
    name: '',
    phone: 'No indica',
    email: '',
    termsAndConditions: true,
    companyId: companyForm.id,
    action: "Contacto",
    message: "",
    subject: "",
    lastName: 'No indica',
    meetingDate: 'No indicada',
  });


  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });
  const [serverErrorMsg, setServerErrorMsg] = useState('');

  // const [successMsg, setSuccessMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState({
    formSubmitMsg: '',
    formApiMsg: '',
  });
  const [loading, setLoading] = useState(false);

  /** Handle Name change */
  const handleNameChange = (ev) => {
    setFormData({
      ...formData,
      name: ev.target.value,
    });
  };

  const handleSubject = (ev) => {
    setFormData({
      ...formData,
      subject: ev.target.value,
    });
  };

  /** Handle Email change */
  const handleEmailChange = (ev) => {
    setFormData({
      ...formData,
      email: ev.target.value,
    });
  };

  /** Handle Phone change */
  const handleMessageChange = (ev) => {
    setFormData({
      ...formData,
      message: ev.target.value,
    });
  };


  const resetForm = () => {
    setFormData({
      name: '',
      phone: 'No indicada',
      email: '',
      termsAndConditions: true,
      companyId: companyForm.id,
      action: 'Contacto Página web',
      message: '',
      subject: '',
      lastName: 'No indicada',
      meetingDate: 'No indicada',
    });
  };

  const onSubmit = (data) => {
    // console.log(data);
  };

  /** On toast success */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On toast error */
  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    // const formattedDate = `${meetingDate} ${meetingTime}`;
    // const parsedDate = parseRealtorDate(formattedDate);
    // const updatedFormData = { ...formData, meetingDate: parsedDate };

    console.log(
      formData)
    try {
      if (
        Object.values(formData).includes('') ||
        formData?.termsAndConditions === false
      ) {
        setErrorMsg({
          allFieldRequierd:
            'Por favor, completa todos los campos',
        });
        return;
      }


      setLoading(true);
      const response = await ContactFormServices.sendContactMeetingForm(
        'Mi Página web',
        formData?.name,
        // formData?.lastName,
        formData?.email,
        formData?.action,
        formData?.message,
        // formData?.email,
        realtorData?.email
        // formData?.meetingDate,

      );

      /** Api services */
      const apiResponse = await ContactApiFormServices.addContactForm(formData);

      if (response?.success === 'false') {
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError:
            'Se necesita activación de email del administrador/a',
        });
        setLoading(false);
        resetForm();
        return;
      }

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        setSuccessMsg({
          formSubmitMsg:
            'Solicitud enviada con exito! Un ejecutivo se contactará contigo',
          formApiMsg: 'Success!!!',
        });
        setTimeout(() => {
          setSuccessMsg({
            formSubmitMsg: '',
            formApiMsg: '',
          });
          resetForm();
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg({
        serverEmailError: 'Oh! Ha ocurrido un error al enviar tu solicitud',
      });
    }
  };

  return (
    <div className="rounded-[10px] p-4 my-10 xl:py-5 xl:px-2 xl:m-0 w-full xl:w-[500px] shadow-xl">
      {/* xl:w-3/5 */}
        <div className="text-center  rounded-full  font-semibold mb-2">
          <h2 className="text-3xl xl:text-4xl font-semibold py-3 text-primary uppercase">{title}</h2>
        </div>
        {/* <div className="text-start py-1 flex items-center">
          <MdPhoneIphone className='w-[30px] h-[30px] border border-2 rounded-full p-1 mx-1'/><span className='font-normal '><b>Teléfono: </b> +56 9 321 421 76 </span>
        </div>
        <div className="text-start py-1 flex">
          <MdEmail className='w-[30px] h-[30px] border border-2 rounded-full p-1 mx-1'/><span className='font-normal '><b>Correo: </b> nombre@unne.cl </span>
        </div> */}

      <form name="FormsData" onSubmit={onFormSubmit} className="py-6 px-4">
        <span className='text-md font-normal text-gray-500'>{subtitle}</span>
        <div className="grid grid-cols-1 gap-x-20 gap-y-3 py-5 max-sm:divide-y-2 max-sm:divide-[#d8d8da]">
          <div className="max-sm:py-2">
            <input
              className="block w-full rounded-sm bg-white py-2 px-2 outline-2 border-2 border-gray-200"
              type="text"
              placeholder="Nombre"
              name="name"
              id="name"
              value={formData?.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="max-sm:py-2">
            <input
              className="block w-full rounded-sm bg-white py-2 px-2 outline-2 border-2 border-gray-200"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formData?.email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="max-sm:py-2">
            <input
              className="block w-full rounded-sm bg-white py-2 px-2 outline-2 border-2 border-gray-200"
              type="text"
              placeholder="Asunto"
              name="subject"
              id="subject"
              value={formData?.subject}
              onChange={handleSubject}
            />
          </div>
          <div className="max-sm:py-2">
            <textarea
              className="textarea textarea-bordered w-full textarea-lg rounded-sm bg-white py-2 px-2 outline-2 border-2 border-gray-200"
              type="text"
              placeholder="Mensaje"
              name="message"
              id="message"
              value={formData?.message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
        </div>

        {errorMsg?.serverEmailError && (
          <Alert type="warning" message={errorMsg?.serverEmailError} />
        )}

        {errorMsg.allFieldRequierd && (
          <Alert message={errorMsg.allFieldRequierd} type="danger" />
        )}

        {successMsg?.formSubmitMsg && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            {successMsg?.formSubmitMsg}
          </div>
        )}

        <div className="flex justify-center items-center">
          <Button
            value="Send"
            type="submit"
            className="bg-secondary rounded-sm text-white px-6 py-2 hover:bg-secondary-opacity"
          >
            <div className="text-lg font-medium capitalize mx-auto">
              <span className="max-h-10">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Cargando...</span>
                  </div>
                ) : (
                  'Enviar'
                )}
              </span>
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MeetingForm;
