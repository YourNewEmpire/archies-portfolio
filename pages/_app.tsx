import "../styles/globals.css";
import React, { ComponentType } from "react";
import type { AppProps } from "next/app";
import router from "next/app";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";

import Layout from "../components/Layout";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<AppProps>;
  pageProps: AppProps;
  router: router;
}) => {
  const router = useRouter();
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, translateX: -150 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
};

export default MyApp;
