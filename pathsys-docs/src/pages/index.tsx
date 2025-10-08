import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Hero section describing the product for UT-LIME pathology lab (UI in Spanish, comments in English)
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Plataforma integral para la gestión de muestras en el laboratorio de patología de UT-LIME
        </p>
        <p className={styles.heroDescription}>
          PathSys centraliza la administración de <strong>casos</strong> y <strong>pacientes</strong>, 
          facilita la <strong>asignación de patólogos</strong>, permite la generación de <strong>resultados en PDF con firma electrónica</strong>, 
          ofrece <strong>estadísticas interactivas en tiempo real</strong>, controla el acceso mediante <strong>roles y permisos</strong> 
          y brinda <strong>soporte</strong> a través de tickets.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="docs/introduccion">
            <span>Comenzar con la documentación</span>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/manual"
            style={{marginLeft: 8}}>
            <span>Ir al Manual de Usuario</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Sistema de Gestión Patológica`}
      description="Sistema integral de gestión de muestras para laboratorio patológico desarrollado con Vue 3, FastAPI y MongoDB">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
