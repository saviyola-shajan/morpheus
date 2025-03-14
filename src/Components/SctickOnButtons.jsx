import whatsappIcon from "/images/whatsapp.png";
import CallIcon from "/images/call.png";

const StickOnButtons = () => {



  return (
    <div className="fixed bottom-16 right-12 flex flex-col items-end space-y-6 z-50">
      <div className="flex flex-col items-end space-y-4">
      <a
          href="https://wa.me/919995546077"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </a>
        <a
          href="tel:+91 9995546077"
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={CallIcon} alt="Call Icon"/>
        </a>
      </div>
    </div>
  );
};

export default StickOnButtons;