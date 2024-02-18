import './App.css';
import React, {useEffect, useRef} from 'react';

const BridgeWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './widget.js';
    script.async = true;
    document.body.appendChild(script);
    const widgetScript = document.createElement('script');
    setTimeout(()=>{
      widgetScript.src = './widgetScript.js';
      widgetScript.async = true;
      document.body.appendChild(widgetScript);
    }, 10)

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(widgetScript);
    };
  }, []);

  return <div id="debridge-widget"></div>;
  // return <div></div>
};

export default BridgeWidget;