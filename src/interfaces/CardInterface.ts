export interface CardInterface {
  title: string;
  image: string;
  description: string;
  background?: string;
  onClick?: () => void;
  buttonText: string;
}
