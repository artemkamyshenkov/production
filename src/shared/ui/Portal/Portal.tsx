import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  element = document.body,
}) => createPortal(children, element);
