import { useState, type FormEvent } from "react";
import { Heart } from "lucide-react";
import { paymentMethods } from "@/app/data/home";
import { TextInput, TextLabel, SelectInput } from "@/app/components/shared/PageShell";

const PRESET_AMOUNTS = ["1000", "2000", "5000", "10000", "25000", "50000"] as const;

function sanitizeAmount(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  return digits || "";
}

export function DonateSection() {
  const [donateAmount, setDonateAmount] = useState("5000");
  const [donorName, setDonorName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mtn");

  const formattedAmount = donateAmount ? `${parseInt(donateAmount, 10).toLocaleString("fr-FR")} FCFA` : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info("Don simulé", { amount: donateAmount, donorName, paymentMethod });
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
      <div className="lg:sticky lg:top-24">
        <p className="label-caps text-accent text-xs mb-3">Soutenir la mission</p>
        <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
          Votre générosité fait la différence
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm max-w-lg">
          Chaque don contribue à la formation des jeunes servants, aux retraites spirituelles et au développement de
          la communauté dans tous les diocèses du Bénin.
        </p>

        <div className="bg-secondary rounded-lg p-5 mb-6 border border-border">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-sm">Campagne Retraite Nationale 2026</span>
            <span className="label-caps text-accent text-xs">68 %</span>
          </div>
          <div
            className="h-2 bg-muted rounded-full overflow-hidden mb-3"
            role="progressbar"
            aria-valuenow={68}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full bg-accent rounded-full" style={{ width: "68%" }} />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>340 000 FCFA collectés</span>
            <span>Objectif : 500 000 FCFA</span>
          </div>
        </div>

        <div>
          <p className="label-caps text-muted-foreground text-xs mb-3">Moyens de paiement acceptés</p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className="px-3 py-1.5 rounded-md border border-border text-muted-foreground text-xs"
                title={method.name}
              >
                {method.abbr}
              </span>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border" noValidate>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-6">Faire un don</h2>

        <fieldset className="mb-5 border-0 p-0">
          <TextLabel>Montant (FCFA)</TextLabel>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setDonateAmount(amount)}
                className={`py-2 text-sm font-semibold rounded-md border transition-all ${
                  donateAmount === amount
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary/40"
                }`}
              >
                {parseInt(amount, 10).toLocaleString("fr-FR")}
              </button>
            ))}
          </div>
          <TextInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={donateAmount}
            onChange={(e) => setDonateAmount(sanitizeAmount(e.target.value))}
            placeholder="Montant libre"
            aria-label="Montant libre en FCFA"
            maxLength={9}
          />
        </fieldset>

        <div className="mb-5">
          <TextLabel htmlFor="donor-name">Votre nom (optionnel)</TextLabel>
          <TextInput
            id="donor-name"
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value.slice(0, 100))}
            placeholder="Pour le mur des bienfaiteurs"
            autoComplete="name"
            maxLength={100}
          />
        </div>

        <div className="mb-4">
          <TextLabel htmlFor="payment-method">Moyen de paiement</TextLabel>
          <SelectInput
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="mtn">MTN Mobile Money</option>
            <option value="moov">Moov Money</option>
            <option value="celtiis">Celtiis Cash</option>
            <option value="card">Carte bancaire (Visa / Mastercard)</option>
            <option value="paypal">PayPal</option>
            <option value="transfer">Virement bancaire</option>
          </SelectInput>
        </div>

        <button
          type="submit"
          disabled={!donateAmount || parseInt(donateAmount, 10) < 100}
          className="w-full py-3.5 bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground font-bold text-sm rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4" aria-hidden="true" />
          Donner {formattedAmount}
        </button>
        <p className="text-center text-[10px] text-muted-foreground mt-3">
          Un reçu sera envoyé par email après réception de votre don.
        </p>
      </form>
    </div>
  );
}
