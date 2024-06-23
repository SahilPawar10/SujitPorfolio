import React from 'react';
import ppt from '../../assets/project.pptx'





const MyPresentation = () => {
  return (
    <>
    <div id="myprojects">
    <div className="contact-title">
        <h2>My Project</h2>
      </div>
    <div id='presentation'>
      <iframe
        src="https://docs.google.com/presentation/d/1RZLb1we9PgNoTzN3bsHVjqPd3_PFwFt6Qx-7UBx_gLM/edit#slide=id.gc6f972163_0_0"
        title="Presentation"
        width="80%"
        height="600"
        frameBorder="0"
        allowFullScreen="true"
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
      ></iframe>
    </div>
    </div>
    </>

  );
};

export default MyPresentation;
