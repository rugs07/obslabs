"use client";

interface ShardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ShardButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ShardButtonProps) {
  // Significantly increased sizes for bold, spatial presence
  const sizeClasses = {
    sm: "px-4 py-3 text-sm tracking-widest gap-3",
    md: "px-8 py-4 text-base tracking-widest gap-4",
    lg: "px-12 py-5 text-xl tracking-[0.2em] gap-5",
    xl: "px-18 py-6 text-2xl tracking-[0.25em] gap-6",
  };

  const baseClasses = `
        group relative inline-flex items-center justify-center font-bold uppercase
        transition-all duration-500 ease-out cursor-pointer
        ${sizeClasses[size]}
    `;

  const variantClasses = {
    primary: `
            bg-white/[0.05]
            text-white
            rounded-full
            border border-white/20
            backdrop-blur-md
            shadow-[0_0_15px_rgba(255,255,255,0.05)]

        `,
    outline: `
            bg-transparent text-white/60
            border border-white/10
            rounded-full
            backdrop-blur-sm
   
        `,
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const ButtonValues = (
    <>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      {/* Subtle inner reflection */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>
    </>
  );

  if (href) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <a href={href} className={buttonClasses} {...(props as any)}>
        {ButtonValues}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {ButtonValues}
    </button>
  );
}
