import React from 'react';
import Helmet from 'react-helmet'

const BuilderTrendContactForm = () => {
    return (
      <div>
        <Helmet>
            <script type="text/javascript" src="https://buildertrend.net/leads/contactforms/js/btClientContactForm.js"></script>
        </Helmet>
        <iframe 
            src="https://buildertrend.net/leads/contactforms/ContactFormFrame.aspx?builderID=70538" 
            scrolling="no" 
            id="btIframe" 
            style={{background:"transparent", border:"0px", margin:"0 auto",width:"100%"}}>
        </iframe>
      </div>
    );
}

export default BuilderTrendContactForm;