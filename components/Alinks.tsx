import React from "react";
import Link from "next/link";

export interface Ilinks {
  url: string;
  textLink?: string;
  icon?: React.ReactNode;
}

export interface IAlinks extends Ilinks {
  className?: string;
}

const Alinks: React.FC<IAlinks> = ({
  url,
  textLink = "",
  children,
  className,
}) => {
  return (
    <Link href={url}>
      <a className={className}>{textLink ? textLink : children}</a>
    </Link>
  );
};

export default Alinks;
