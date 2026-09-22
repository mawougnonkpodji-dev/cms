import { useState, type FormEvent } from "react";
import { Bell, Mail } from "lucide-react";
import { TextInput } from "@/app/components/shared/PageShell";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
    console.info("Newsletter simulée", { email: email.trim() });
  }

  return (
    <section className="py-14 bg-background border-t border-border" aria-labelledby="newsletter-title">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <Bell className="w-7 h-7 text-primary mx-auto mb-3" aria-hidden="true" />
        <h2 id="newsletter-title" className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          Restez informé(e)
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Recevez chaque mois les actualités, événements et prières de la communauté.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.slice(0, 254));
              setStatus("idle");
            }}
            placeholder="votre@email.com"
            autoComplete="email"
            required
            aria-invalid={status === "error"}
            aria-describedby={status !== "idle" ? "newsletter-status" : undefined}
            className="flex-1"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" aria-hidden="true" /> S&apos;abonner
          </button>
        </form>
        {status === "error" && (
          <p id="newsletter-status" className="text-destructive text-xs mt-2" role="alert">
            Veuillez saisir une adresse email valide.
          </p>
        )}
        {status === "success" && (
          <p id="newsletter-status" className="text-primary text-xs mt-2 font-medium" role="status">
            Merci ! Votre inscription sera confirmée par email.
          </p>
        )}
        <p className="text-[10px] text-muted-foreground mt-3">
          Conformité RGPD et loi béninoise. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
}
