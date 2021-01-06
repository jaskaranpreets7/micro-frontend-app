import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

export default ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname : nextPathname }) => { //listen function give an argumnet in marketing, destruct and rename { old name : newname }
        const { pathname } = history.location

        if( pathname !== nextPathname ){
          history.push(nextPathname)
        }
      },
      onSignIn
    });

    history.listen(onParentNavigate)
  },[]);

  return <div ref={ref} />
};
