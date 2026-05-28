import Link from "next/link";
import RevealText from "./RevealText";

interface TertiaryButtonProps {
  href: string;
  id?: string;
  text: string;
  variant?: "default" | "white";
  className?: string;
}

export default function TertiaryButton({ 
  href, 
  id, 
  text, 
  variant = "default", 
  className = "" 
}: TertiaryButtonProps) {
  const isWhite = variant === "white";
  
  const linkClassName = isWhite ? "btn-tertiary-white" : "btn-tertiary";
  const revealLineClassName = isWhite ? "inline-block text-white!" : "inline-block";

  return (
    <Link
      href={href}
      id={id}
      className={`${linkClassName} ${className}`}
    >
      <RevealText
        lines={[text]}
        lineClassName={revealLineClassName}
        stagger={0}
      />
    </Link>
  );
}
