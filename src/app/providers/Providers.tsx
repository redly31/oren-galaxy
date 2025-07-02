import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";
import { QueryClientProvider, QueryClient } from "react-query";
import { AnalyticsTracker } from "../../shared/libs/AnalyticsTracker";
import { Suspense } from "react";
import Loading from "../../shared/components/loading/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorSign from "../../shared/components/error/ErrorSign";
import { HelmetProvider } from "react-helmet-async";

export default function Providers() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<ErrorSign/>}>
        <Suspense fallback={<Loading/>}>
          <HelmetProvider>
            <AnalyticsTracker router={router} />
            <RouterProvider router={router} />
          </HelmetProvider>
      </Suspense>
      </ErrorBoundary>
      
    </QueryClientProvider>
  );
}
