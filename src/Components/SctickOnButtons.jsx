import whatsappIcon from "/images/whatsapp.jpg";
import CallIcon from "/images/call.jpg";

const StickOnButtons = () => {



  return (
    <div className="fixed bottom-16 right-12 flex flex-col items-end space-y-6 z-50">
      <div className="flex flex-col items-end space-y-4">
        <a
          href="tel:+91 9995546077"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
        >
          <img src={CallIcon} alt="Call Icon" className="rounded-full"/>
        </a>
        <a
          href="https://wa.me/919995546077"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" className="rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default StickOnButtons;