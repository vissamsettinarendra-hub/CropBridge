import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import ContactMap from "../../components/contact/ContactMap/ContactMap";
import ContactCTA from "../../components/contact/ContactCTA/ContactCTA";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </>
  );
};

export default Contact;