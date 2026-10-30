import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const trails = [
  {
    image: '/img/home/card-community.svg',
    alt: 'Ilustração voxel de uma vila medieval e jogadores construindo juntos',
    tag: '01 / COMECE AQUI',
    title: 'Seu primeiro dia no reino',
    description:
      'Instale o modpack, conheça os comandos mais úteis e entre no mundo com tudo o que precisa saber.',
    url: '/docs/basico/primeiros-passos',
    label: 'Começar a aventura',
  },
  {
    image: '/img/home/card-guides.svg',
    alt: 'Ilustração voxel de uma oficina de alquimia, mapas e livros',
    tag: '02 / DOMINE AS FERRAMENTAS',
    title: '64 mods. Um universo de ideias.',
    description:
      'Descubra novos recursos, receitas, formas de decorar e possibilidades para seus projetos.',
    url: '/docs/explicacao-mods/catalogo',
    label: 'Explorar catálogo',
  },
  {
    image: '/img/home/card-adventure.svg',
    alt: 'Ilustração voxel de explorador, montanhas, caverna e trilhos de mineração',
    tag: '03 / VÁ MAIS LONGE',
    title: 'Construa sua própria história',
    description:
      'Aprenda a aproveitar mineração, agricultura, transporte e todas as melhorias de sobrevivência.',
    url: '/docs/explicacao-mods/sobrevivencia',
    label: 'Guias de sobrevivência',
  },
];

const shortcuts = [
  {symbol: '◆', title: 'Instalar o modpack', desc: 'Minecraft, Fabric e primeiros passos', url: '/docs/basico/primeiros-passos'},
  {symbol: '⌘', title: 'Comandos do servidor', desc: 'Atalhos e ações mais usadas', url: '/docs/basico/comandos'},
  {symbol: '▣', title: 'Construção e decoração', desc: 'Mapas, molduras, placas e mais', url: '/docs/explicacao-mods/construcao'},
  {symbol: '▤', title: 'Inventário e organização', desc: 'Baús, mochilas e receitas', url: '/docs/explicacao-mods/armazenamento'},
  {symbol: '◈', title: 'Catálogo dos mods', desc: 'As 64 adições do pacote 1.0.0', url: '/docs/explicacao-mods/catalogo'},
  {symbol: '⚙', title: 'Administração técnica', desc: 'Compatibilidade e homologação', url: '/docs/administracao/compatibilidade'},
];

const highlights = [
  {index: '01', name: 'Camera Obscura', detail: 'Registre momentos e paisagens com fotos do mundo.', url: '/docs/explicacao-mods/cameraobscura'},
  {index: '02', name: 'Image2Map', detail: 'Transforme imagens em quadros e painéis dentro do jogo.', url: '/docs/explicacao-mods/image2map'},
  {index: '03', name: "Patbox's Brewery", detail: 'Prepare e envelheça suas próprias bebidas no servidor.', url: '/docs/explicacao-mods/cervejaria'},
];

function IntroHero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.heroArt} aria-hidden="true">
        <img src="/img/home/hero-new-empire.svg" width="1600" height="900" alt="" />
      </div>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <span className={styles.kicker}><span className={styles.kickerDot} /> A WIKI DO NEW EMPIRE</span>
          <Heading as="h1">Um mundo de possibilidades. <span>Uma história construída por você.</span></Heading>
          <p>
            Descubra o universo do New Empire. Guias para novos aventureiros,
            mecânicas dos mods e tudo o que você precisa para criar algo extraordinário.
          </p>
          <div className={styles.heroActions}>
            <Link className={clsx('button button--lg', styles.primaryAction)} to="/docs/basico/primeiros-passos">
              Começar a jogar <span aria-hidden="true">↗</span>
            </Link>
            <Link className={clsx('button button--lg', styles.secondaryAction)} to="/docs/explicacao-mods/catalogo">
              Explorar os mods
            </Link>
          </div>
          <div className={styles.heroStats} aria-label="Dados do modpack documentado">
            <div><strong>64</strong><span>mods catalogados</span></div>
            <div><strong>26.3</strong><span>Minecraft Java</span></div>
            <div><strong>1.0.0</strong><span>modpack de referência</span></div>
          </div>
          <p className={styles.heroFinePrint}>Ilustração conceitual. Versões referentes ao arquivo de modpack documentado.</p>
        </div>
      </div>
      <div className={styles.heroBottom} aria-hidden="true"><span /><span /><span /><span /><span /></div>
    </header>
  );
}

function TrailSection(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="trilhas">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>ESCOLHA SEU CAMINHO</span>
          <Heading as="h2" id="trilhas">O próximo capítulo começa aqui</Heading>
          <p>Do primeiro bloco à construção mais ambiciosa, encontre um caminho para aproveitar o mundo.</p>
        </div>
        <div className={styles.trailGrid}>
          {trails.map((trail) => (
            <article className={styles.trailCard} key={trail.title}>
              <Link to={trail.url} className={styles.trailImageLink} aria-label={trail.title}>
                <img src={trail.image} width="1100" height="770" loading="lazy" alt={trail.alt} />
              </Link>
              <div className={styles.trailBody}>
                <span className={styles.trailTag}>{trail.tag}</span>
                <Heading as="h3">{trail.title}</Heading>
                <p>{trail.description}</p>
                <Link className={styles.trailLink} to={trail.url}>{trail.label}<span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAccess(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)} aria-labelledby="atalhos">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>BIBLIOTECA DO REINO</span>
          <Heading as="h2" id="atalhos">Encontre o que procura</Heading>
          <p>Guias diretos ao ponto para resolver dúvidas sem sair da sua aventura por muito tempo.</p>
        </div>
        <div className={styles.shortcutGrid}>
          {shortcuts.map((item) => (
            <Link className={styles.shortcut} to={item.url} key={item.title}>
              <span className={styles.shortcutIcon} aria-hidden="true">{item.symbol}</span>
              <span className={styles.shortcutText}><strong>{item.title}</strong><small>{item.desc}</small></span>
              <span className={styles.shortcutArrow} aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedGuides(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="destaques">
      <div className="container">
        <div className={styles.featuredLayout}>
          <div className={styles.featuredIntro}>
            <span className={styles.eyebrow}>DESCUBRA ALGO NOVO</span>
            <Heading as="h2" id="destaques">Pequenas ferramentas. Grandes criações.</Heading>
            <p>Alguns dos recursos que transformam o cotidiano do New Empire em novas histórias.</p>
            <Link className={styles.textAction} to="/docs/explicacao-mods/catalogo">Todos os 64 mods ↗</Link>
          </div>
          <div className={styles.featuredList}>
            {highlights.map((item) => (
              <Link to={item.url} className={styles.featuredItem} key={item.name}>
                <span className={styles.featuredNumber}>{item.index}</span>
                <span className={styles.featuredCopy}><strong>{item.name}</strong><small>{item.detail}</small></span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA(): ReactNode {
  return (
    <section className={styles.closing} aria-labelledby="final">
      <div className="container">
        <div className={styles.closingPanel}>
          <span className={styles.eyebrow}>SUA PRÓXIMA AVENTURA</span>
          <Heading as="h2" id="final">Toda grande construção começa com o primeiro bloco.</Heading>
          <p>A documentação está aberta. Escolha seu guia e continue escrevendo a história do New Empire.</p>
          <Link className={clsx('button button--lg', styles.primaryAction)} to="/docs/intro">Abrir documentação ↗</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="New Empire | Seu guia de aventura"
      description="Guia do New Empire: como jogar Minecraft com o modpack, comandos, 64 mods, construção, sobrevivência e administração do servidor.">
      <div className={styles.home}>
        <IntroHero />
        <main>
          <TrailSection />
          <QuickAccess />
          <FeaturedGuides />
          <ClosingCTA />
        </main>
      </div>
    </Layout>
  );
}
