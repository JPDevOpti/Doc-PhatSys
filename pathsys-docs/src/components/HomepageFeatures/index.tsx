import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestión de Casos y Pacientes',
    Svg: require('@site/static/svg/Caso.svg').default,
    description: (
      <>
        Módulo para la administración integral de casos y perfiles de pacientes: 
        registro, edición, seguimiento clínico, vínculos entre casos y pacientes 
        y trazabilidad completa del proceso.
      </>
    ),
  },
  {
    title: 'Resultados en PDF y Firma Electrónica',
    Svg: require('@site/static/svg/fima.svg').default,
    description: (
      <>
        Generación de informes clínicos en formato PDF con plantillas, control 
        de versiones y certificación mediante firma electrónica conforme a 
        estándares legales.
      </>
    ),
  },
  {
    title: 'Estadísticas Interactivas en Tiempo Real',
    Svg: require('@site/static/svg/StatisticsIcon.svg').default,
    description: (
      <>
        Panel analítico con métricas clave y visualizaciones interactivas; 
        actualizaciones en tiempo real, filtros dinámicos y exportación de datos.
      </>
    ),
  },
  {
    title: 'Sistema de Roles y Permisos',
    Svg: require('@site/static/svg/Perfiles.svg').default,
    description: (
      <>
        Gestión granular de roles, permisos y grupos de usuarios; control de 
        acceso por módulo y registro de actividades (auditoría).
      </>
    ),
  },
  {
    title: 'Inicio de Sesión y Seguridad',
    Svg: require('@site/static/svg/login.svg').default,
    description: (
      <>
        Autenticación segura con manejo de sesiones, recuperación de contraseña, 
        políticas de contraseñas, protección CSRF y control de intentos.
      </>
    ),
  },
  {
    title: 'Soporte y Tickets',
    Svg: require('@site/static/svg/Soporte.svg').default,
    description: (
      <>
        Sistema de atención al usuario con creación, asignación y seguimiento de 
        tickets; estados, prioridades y notificaciones.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <article className={styles.card}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={clsx('text--center', styles.cardBody)}>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardText}>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  // Split features into two rows of 3 features each
  const firstRowFeatures = FeatureList.slice(0, 3);
  const secondRowFeatures = FeatureList.slice(3, 6);

  return (
    <>
      <section className={styles.features}>
        <div className="container">
          {/* First row of features */}
          <div className={clsx('row', styles.featureRow)}>
            {firstRowFeatures.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          {/* Second row of features */}
          <div className={clsx('row', styles.featureRow)}>
            {secondRowFeatures.map((props, idx) => (
              <Feature key={idx + 3} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.techStack}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="text--center">
                <Heading as="h2">Stack Tecnológico</Heading>
                <p className={styles.techDescription}>
                  PathSys está construido con tecnologías modernas y robustas para garantizar 
                  un rendimiento óptimo y una experiencia de usuario excepcional.
                </p>
              </div>
            </div>
          </div>
          <div className={clsx('row', styles.techRow)}
>
            <div className={clsx('col col--4', styles.techCard)}>
              <div className="text--center">
                <img src="/svg/Vue.svg" alt="Vue.js" className={styles.techIcon} />
                <Heading as="h3">Frontend</Heading>
                <p><strong>Vue 3</strong> con Composition API</p>
                <p><strong>TypeScript</strong> para type safety</p>
                <p><strong>Tailwind CSS</strong> para estilos</p>
                <p><strong>Pinia</strong> para gestión de estado</p>
              </div>
            </div>
            <div className={clsx('col col--4', styles.techCard)}>
              <div className="text--center">
                <img src="/svg/Python.svg" alt="Python" className={styles.techIcon} />
                <Heading as="h3">Backend</Heading>
                <p><strong>FastAPI</strong> para APIs rápidas</p>
                <p><strong>Python 3.8+</strong> como lenguaje</p>
                <p><strong>Motor</strong> para MongoDB async</p>
                <p><strong>Pydantic</strong> para validación</p>
              </div>
            </div>
            <div className={clsx('col col--4', styles.techCard)}>
              <div className="text--center">
                <img src="/svg/Mongo.svg" alt="MongoDB" className={styles.techIcon} />
                <Heading as="h3">Base de Datos</Heading>
                <p><strong>MongoDB</strong> como principal</p>
                <p><strong>Índices optimizados</strong></p>
                <p><strong>Agregaciones</strong> para reportes</p>
                <p><strong>Backup automático</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
