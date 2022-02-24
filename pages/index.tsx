import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import OpenSeaEmbed from '../components/OpenSeaEmbed';
import topImage from '../public/assets/MIMP-1920-600.gif';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image className="place-content-center" src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-rose-900 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          <p className="text-xl">
          <strong>‘MIMP - My Pride My Identity</strong>‘  The word <strong>‘pride’</strong>, is an integral cultural concept within the Lesbian, Gay, Bisexual, Transgender, Queer, Intersex  <strong>(LGBTQI)</strong> community, representing solidarity, collectivity, and identity as well as resistance to discrimination and violence. Its associated symbolism (e.g., <strong>rainbow</strong> colors) communicates to individuals that LGBTQI members are welcome as valuable members of the community.  # <strong>MIMP Collection</strong> These non-fungible tokens <strong>(NFTs)</strong> represents unique digital identity represented by hundreds of unique bits of random color geometrical shapes on pride flag. Each identity&#39;s digital representation is associated with a unique <strong>quote</strong> that might be your quote. Collect whichever represents your identity on the Pride Flag.
          </p>
        </Prose>
      </div>

      <div className="bg-red-900 py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-orange-900 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="bg-yellow-900 py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-yellow-900 py-8">
        <Prose>
          <OpenSeaEmbed />
        </Prose>
      </div>

      <div className="bg-lime-900 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
