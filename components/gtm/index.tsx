import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize("GTM-WMDBVNB");
  }, []);

  return null;
};

export default GoogleTagManager;
