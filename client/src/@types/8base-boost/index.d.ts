declare module '@8base/boost' {
  export {
    Button,
    Card,
    Dialog,
    Dropdown,
    Grid,
    Heading,
    Icon,
    InputField,
    Loader,
    Menu,
    ModalContext,
    Table,
  };

  export function useModal(id?: string): ModalContextTypeFlat;

  export type ReactComponent<P = {}, S = {}> = React.ComponentClass<P, S> | React.FC<P>;

  export type ActionDialog<P = {}, S = {}> = ReactComponent<P, S> & { id: string };

  export interface ModalProps {
    openModal(id: string, args = {}): void;
    closeModal(id: string): void;
  };

  export interface ModalContextType extends ModalProps {
    state: {
      [key: string]: {
        isOpen: boolean;
        args: Record<string, any>;
      }
    };
  };

  export interface ModalContextTypeFlat extends ModalProps {
    isOpen: boolean;
    args: Record<string, any>;
  };

  export interface DropdownChildrenProps {
    closeDropdown(): void;
    openDropdown(): void;
    toggleDropdown(): void;
    isOpen: boolean;
  };

  export interface FormChildrenProps {
    handleSubmit(): void;
    submitting?: boolean;
    invalid?: boolean;
    pristine?: boolean;
  };

  export type RenderChildren<Props> = React.ReactNode | ((props: Props) => React.ReactNode);
};