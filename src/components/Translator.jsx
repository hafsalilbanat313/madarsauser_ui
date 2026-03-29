import { useEffect, useRef } from "react";
import "../App.css";

const Translator = () => {
  const translateRef = useRef(null);

  useEffect(() => {
    // Only define the callback once
    window.googleTranslateElementInit = () => {
      if (translateRef.current && !translateRef.current.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,ur,ar",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          translateRef.current.id
        );
      }
    };

    // Only add script once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      ref={translateRef}
      className="z-[9999] text-sm"
    />
  );
};

export default Translator;
