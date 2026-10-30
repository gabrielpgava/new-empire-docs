import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Guias de jogabilidade, construção e administração • Referência: Minecraft 26.3 / NewEmpire 1.0.0</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/explicacao-mods/catalogo">
            Explorar os 64 mods
          </Link>
        </div>
        <p className="margin-top--md">
          <Link to="/docs/basico/primeiros-passos">Como começar a jogar</Link>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Guias, comandos e catálogo de mods do Minecraft New Empire">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
