import { ReactNode } from 'react';

export type PrimaryButtonStyledType = {
  background?: string;
};

export type PrimaryButtonType = {
  disabled?: boolean;
  children: ReactNode;
  background?: string;
  className?: string;
};
