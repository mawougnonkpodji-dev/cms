import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const inputClass =
  "flex h-10 w-full rounded-md border border-border bg-input-background px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50";

export function TextInput(props: React.ComponentProps<"input">) {
  return <input className={cn(inputClass, props.className)} {...props} />;
}

export function TextLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("label-caps text-muted-foreground text-xs block mb-2", className)} {...props} />;
}

export function SelectInput({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select className={cn(inputClass, "appearance-none", className)} {...props}>
      {children}
    </select>
  );
}

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-rule mb-10 max-w-3xl">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function BackLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex text-sm font-semibold text-primary hover:text-accent transition-colors">
      {children}
    </Link>
  );
}
