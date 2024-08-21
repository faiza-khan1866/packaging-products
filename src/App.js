import React, { Suspense, useState } from "react";
import "./App.scss";
import Layout from "./layouts/Layout";
import Navigation from "./navigator/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./components/Loader/Loader";
import { MapContext } from "./context/MapContext";
import { CartContextProvider } from "./context/cartContext";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const [mapValue, setMapValue] = useState("kuwait");
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <MapContext.Provider value={{ mapValue, setMapValue }}>
          <CartContextProvider>
            <ScrollToTop />
            <Layout>
              <Navigation />
            </Layout>
          </CartContextProvider>
        </MapContext.Provider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
