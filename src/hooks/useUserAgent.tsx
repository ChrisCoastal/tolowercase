import React from 'react';
import { SettingsReducerTypes } from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';

const useUserAgent = () => {
  const { dispatch } = useSettingsContext();

  function getUserAgent() {
    let agent = 'windows';
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (agent.includes('macintosh')) agent = 'mac';
    if (agent.includes('ios') || agent.includes('android')) agent = 'mobile';

    dispatch({
      type: SettingsReducerTypes.SET_USER_AGENT,
      payload: { userAgent },
    });
  }

  return { getUserAgent };
};

export default useUserAgent;
