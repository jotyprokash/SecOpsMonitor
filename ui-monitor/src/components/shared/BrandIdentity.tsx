interface LogoProps {
  size?: number;
  className?: string;
}

export default function BrandIdentity({ size = 32, className = '' }: LogoProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="SecOpsMonitor"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
      loading="lazy"
      aria-label="SecOpsMonitor Home"
    />
  );
}
