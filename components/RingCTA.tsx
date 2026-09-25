import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RingCTA({
  href,
  label,
  variant = "solid",
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-4 font-head font-semibold text-[15px] tracking-tight whitespace-nowrap";
  const solid = "bg-amber text-ink hover:bg-amber-dark transition-colors";
  const outline =
    "bg-transparent text-mist border border-white/30 hover:border-white/70 transition-colors";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "solid" ? solid : outline}`}
    >
      {/* Ring pulses live on absolutely-positioned siblings so the button
          itself never changes size or shifts layout. */}
      {variant === "solid" && (
        <>
          <span className="pointer-events-none absolute inset-0 rounded-[2px] bg-amber animate-ring" />
          <span className="pointer-events-none absolute inset-0 rounded-[2px] bg-amber animate-ring-delay" />
        </>
      )}
      <span className="relative z-10">{label}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4" strokeWidth={2.5} />
    </Link>
  );
}
