"use client";

import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomLink = ({
  href,
  className,
  children,
  onClick,
}: CustomLinkProps) => {
  return (
    <RouterLink to={href} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  );
};

export default CustomLink;
