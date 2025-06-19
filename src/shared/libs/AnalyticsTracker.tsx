import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import type { RouterProviderProps } from 'react-router-dom';

interface RouteState {
  location: {
    pathname: string;
    search: string;
  };
}

export function AnalyticsTracker({ router }: RouterProviderProps) {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_APP_GA_MEASUREMENT_ID);

    ReactGA.send({
      hitType: "pageview",
      page: router.state.location.pathname + router.state.location.search,
    });

    const unsubscribe = router.subscribe((state: RouteState) => {
      ReactGA.send({
        hitType: "pageview",
        page: state.location.pathname + state.location.search,
        title: location.pathname,
      });
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return null;
}