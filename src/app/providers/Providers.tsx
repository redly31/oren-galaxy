import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";
import { QueryClientProvider, QueryClient } from "react-query";
import { AnalyticsTracker } from "../../shared/libs/AnalyticsTracker";

export default function Providers() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsTracker router={router} />
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
