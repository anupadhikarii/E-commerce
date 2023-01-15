import React from "react";
import ContactBox from "../component/contactBox/ContactBox";
function Contact() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <ContactBox />
    </div>
  );
}

export default Contact;
