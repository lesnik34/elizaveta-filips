import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-P73TGLG",
    });
  }, []);

  return null;
};

export default GoogleTagManager;
