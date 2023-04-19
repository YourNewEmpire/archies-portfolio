import Head from "next/head";
import { useRouter } from "next/router";

import { Childs } from "../../interfaces/children";

export interface IPageLayout extends Childs {
  title: string;
  desc?: string;
  img?: string;
}

const PageLayout = ({ title, desc, img, children }: IPageLayout) => {
  const { pathname } = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content={"website"} />
        <meta property="og:description" content={desc ?? ""} />
        <meta property="og:image" content={img ?? "/profile.jpg"} />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
