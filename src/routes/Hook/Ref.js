import React from 'react';

const Ref = () => {
  const formRef = React.useRef();
  console.log(formRef)
  return <div ref={formRef}>
    123
  </div>
}

export default Ref;