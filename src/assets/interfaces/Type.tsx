import type { ReactNode } from "react";

export type BtnCustomProps = {
    name: string;
    classExtra?: string;
    onClick?: () => void;
    [key: string]: any;
  };
  export type ModalProps = {
    show: boolean;
    body: string | ReactNode;
    submitText?: string;
    cancelText?: string;
    onHide: () => void;
    onSubmit?: () => void;
  };
  export type ImageCustomProps = {
      src:File|string;
      fallbackSrc: string;
      alt: string;
      [key: string]: any;
    };