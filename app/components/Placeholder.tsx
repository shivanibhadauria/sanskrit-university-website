/**
 * A swappable media block. Renders a real image when `src` is provided
 * (drop a file in /public and pass its path), otherwise a tasteful gradient
 * placeholder so layouts never look broken while assets are pending.
 */
export function GradientMedia({
  gradient,
  src,
  alt = "",
  className,
  children,
}: {
  gradient: string;
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className ?? ""}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.35) 0, transparent 32%), radial-gradient(circle at 78% 75%, rgba(255,255,255,0.18) 0, transparent 38%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
