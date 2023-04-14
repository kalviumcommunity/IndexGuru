import React from "react";
import "./Terms.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

function Terms() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  const handleClick = (event) => {
    const modal = document.querySelector(".maindiv");
    if (event.target === modal) {
      onClose();
    }
  };
  return (
    <>
      <button
        className="conditions"
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Terms and conditions
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="maindiv" onClick={handleClick}>
          <ModalBody className="ModalBody">
            <h1 className="terms_heading">Terms and Conditions </h1>
          
              <ul className="terms_list">
             <li>Welcome to Index Guru. The following terms and conditions apply to
              your use of this website, including all content, features, and
              functionality offered on or through the website. By accessing or
              using this website, you acknowledge that you have read,
              understood, and agreed to be bound by these Terms.</li> 
              <br />
              <li> If you do not agree to these Terms, please do not use this
              website. Disclaimer of Liability Our mutual fund website provides
              information about various mutual funds, including their historical
              performance, fees, and other relevant details. Please note that
              the information displayed on our website is for informational
              purposes only and should not be considered investment advice.</li>
              <br />
              <li>We do not provide investment advice or recommendations, nor do we
              endorse or recommend any particular mutual fund or investment
              strategy. The information provided on our website is obtained from
              reliable sources, but we make no representations or warranties of
              any kind, express or implied, regarding the accuracy,
              completeness, or reliability of the information provided.
              </li><br />
             <li> We are not responsible for any loss, damage, or other liability
              that may arise from your reliance on the information provided on
              our website. You agree to use the information provided on our
              website at your own risk and to conduct your own independent
              research before making any investment decisions.
              </li><br />
             <li>You may not copy, reproduce, modify, distribute, display,
              transmit, perform, publish, license, create derivative works from,
              or sell any information or content obtained from our website.
              Contact Us If you have any questions about these Terms or our
              mutual fund website, please contact us at
              <a
                style={{ color: " orange", textDecoration: "none" }}
                href="https://www.linkedin.com/in/anjani-kumar-rai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkdlin
              </a>
              </li> 
              </ul>
       
           
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Terms;
