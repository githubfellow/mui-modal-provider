import { createContext } from 'react';
import { IState } from './State';

export interface IModalContext {
  state: IState;
  hideModal(id: string): void;
  showModal(component: React.ComponentType<any>, props: Object): void;
  destroyModal(id: string): void;
}

export const ModalContext = createContext<IModalContext>({
  state: {},
  hideModal: () => {},
  showModal: () => {},
  destroyModal: () => {},
});