import { useEffect } from 'react';

function GoogleScriptLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script from the body when the component unmounts, if necessary
      document.body.removeChild(script);
    };
  }, []);

  return null;  // This component doesn't render anything
}

export default GoogleScriptLoader;