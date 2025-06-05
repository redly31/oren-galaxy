import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";
import { QueryClientProvider, QueryClient } from "react-query";
 
export default function Providers() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
