import { HeroInterface } from './HeroInterface';
import { ItemInterface } from './ItemInterface';

// Define a type for the properties of a section.
export interface SectionProps {
  [key: string]:
    | string
    | number
    | boolean
    | object
    | string[]
    | number[]
    | boolean[]
    | object[];
}

// Define a type for the properties of a component.
export interface ComponentProps {
  [key: string]:
    | HeroInterface
    | ItemInterface
    | ItemInterface[]
    | string
    | string[];
}

// Interface for a component.
export interface ComponentInterface {
  type: string;
  props: ComponentProps;
}

// Interface for a section, which includes an array of components.
export interface SectionInterface {
  type: string;
  props: SectionProps;
  components: ComponentInterface[];
}
