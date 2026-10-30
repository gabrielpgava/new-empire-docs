import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const sections = [
  {
    icon: '📦',
    title: 'Mods e mecânicas',
    description: 'Conheça os 64 mods do pacote e descubra o que eles oferecem.',
    to: '/docs/explicacao-mods/catalogo',
    action: 'Ver catálogo',
  },
  {
    icon: '⌨️',
    title: 'Primeiros passos',
    description: 'Instalação do modpack, comandos e dicas para começar a jogar.',
    to: '/docs/basico/primeiros-passos',
    action: 'Começar agora',
  },
  {
    icon: '🏰',
    title: 'Construção e criação',
    description: 'Aprenda a usar fotos, mapas, molduras, suportes e decoração.',
    to: '/docs/explicacao-mods/construcao',
    action: 'Ver tutoriais',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {sections.map((section) => (
            <div className="col col--4 margin-bottom--lg" key={section.to}>
              <div className="padding-horiz--md">
                <div aria-hidden="true" className="text--center" style={{fontSize: '2.5rem'}}>
                  {section.icon}
                </div>
                <Heading as="h3" className="text--center">{section.title}</Heading>
                <p>{section.description}</p>
                <p><Link to={section.to}>{section.action}</Link></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
