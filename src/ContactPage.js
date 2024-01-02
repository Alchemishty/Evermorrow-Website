import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e2snyyg",
        "template_37ve1sf",
        form.current,
        "gxaF_MdyI3Qvb7B5Z"
      )
      .then(
        (result) => {
          console.log("message sent" + result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Column */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 className='big-heading-text reach'>Reach Out</h1>
        <br/>
        <p>
        Embark on the Evermorrow Mesh and collaborate with visionary brands in pioneering virtual product placement within the dynamic VR industry. Together, let's redefine the digital landscape and explore new dimensions of immersive experiences.</p>
        <br/>
        { isMobile ? null :
        <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        </StyledContactForm>
        }
      </div>
      {/* Right Column */}
      <div style={{ flex: 1, padding: '20px'}}>
      { isMobile ? <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        </StyledContactForm> 
        : <div style={{alignContent: "center", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> <img
        src="https://imagizer.imageshack.com/img923/9590/qyzGa7.png"
        alt="Evermorrow Logo"
        style={{ width: '100%', height: 'auto', borderRadius: "20px" }}
      /> </div>
      }
      </div>
    </div>
  );
};

export default ContactPage;

// Styles
const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(251, 175, 0, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      resize: vertical
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(251, 175, 0, 1);
      }
    }

    label {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgba(127,95,255, 1);
      color: black;
      border: none;
      font-size: 20px;
      font-family: 'Motiva Sans Bold', serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media only screen and (max-width: 600px) {
      font-size: 14px;
      input,
      textarea {
        font-size: 14px;
      }

      input[type="submit"] {
        font-size: 16px;
      }
    }
  }
`;