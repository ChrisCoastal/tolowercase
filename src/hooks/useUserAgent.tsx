import React, { useState } from 'react';

const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState<string>('windows');

  function getUserAgent() {
    let agent = 'windows';
    const clientUserAgent = window.navigator.userAgent.toLowerCase();
    if (clientUserAgent.includes('macintosh')) agent = 'mac';
    if (clientUserAgent.includes('ios') || agent.includes('android'))
      agent = 'mobile';

    setUserAgent(agent);
  }

  return { getUserAgent, userAgent };
};

export default useUserAgent;
