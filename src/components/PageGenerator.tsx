// Import components
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
// Import interfaces
import { HeroInterface } from '@homework-task/interfaces/HeroInterface';
import { ItemInterface } from '@homework-task/interfaces/ItemInterface';
import {
  SectionInterface,
  ComponentInterface,
} from '@homework-task/interfaces/PageGeneratorInterface';
import { Layout } from '@homework-task/layouts/Layout';

export const PageGenerator = ({ data }: { data: SectionInterface[] }) => {
  return (
    <div>
      {data.map((section, index) => (
        <Layout key={index} background={section.props.background as string}>
          {section.components.map((component, idx) => (
            <div key={idx} className={`component-${component.type}`}>
              {renderComponent(component)}
            </div>
          ))}
        </Layout>
      ))}
    </div>
  );

  function renderComponent(component: ComponentInterface) {
    switch (component.type) {
      case 'componentHero':
        return <Hero {...(component.props as unknown as HeroInterface)} />;
      case 'componentItemsShowcase':
        if ('items' in component.props) {
          return (
            <ItemsShowcase items={component.props.items as ItemInterface[]} />
          );
        }
        return null;
      case 'componentTrustBar':
        if (
          component.props &&
          component.props.images &&
          Array.isArray(component.props.images)
        ) {
          return <TrustBar images={component.props.images as string[]} />;
        }
        return null;
      case 'componentPanelShowcase':
        if (
          component.props &&
          component.props.items &&
          Array.isArray(component.props.items)
        ) {
          return (
            <PanelShowcase items={component.props.items as ItemInterface[]} />
          );
        }
        return null;
      default:
        // Handle unknown components
        return null;
    }
  }
};
