import React, { useMemo } from "react";
import { Download, ShieldCheck, Zap, Star, CheckCircle2, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TweakPackStorefront() {
  const config = {
    productName: "Ruffy Tweak Pack",
    price: "£10",
    tagline: "Boost performance. Lower delay. Clean setup.",
    stripePaymentLink: "https://buy.stripe.com/replace-this-with-your-link",
    downloadUrl: "https://your-domain.com/files/replace-with-your-zip.zip",
    supportEmail: "support@yourdomain.com",
    accent: "from-cyan-400 via-blue-500 to-purple-500",
  };

  const isSuccess = useMemo(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    return params.get("paid") === "1" || params.get("success") === "true";
  }, []);

  const handleBuyNow = () => {
    window.location.href = config.stripePaymentLink;
  };

  const handleDownload = () => {
    window.location.href = config.downloadUrl;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className={`absolute inset-0 bg-gradient-to-br ${config.accent} opacity-10`} />
      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <header className="mb-12 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div>
            <div className="text-xl font-bold tracking-wide">{config.productName}</div>
            <div className="text-sm text-white/70">Digital download storefront</div>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Instant access after payment
          </div>
        </header>

        <section className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              <Zap className="h-4 w-4" />
              Performance pack for Windows gamers
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              Sell your tweak pack with a clean checkout and instant download.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              {config.tagline} Buyers pay once, then get redirected to the download page.
              This template is built for a {config.price} one-time purchase.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                className="rounded-2xl px-8 py-6 text-base font-semibold"
                onClick={handleBuyNow}
              >
                Buy now for {config.price}
              </Button>
              <div className="text-sm text-white/60">
                Secure checkout powered by Stripe
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["One-time payment", "No subscription"],
                ["Fast checkout", "Card / Apple Pay"],
                ["Digital delivery", "ZIP download"],
              ].map(([title, text]) => (
                <Card key={title} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
                  <CardContent className="p-5">
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-white/60">{text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
            <CardContent className="p-7 md:p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">Digital product</div>
                  <div className="mt-2 text-3xl font-black">{config.productName}</div>
                </div>
                <div className="rounded-2xl bg-white px-4 py-2 text-lg font-black text-black">
                  {config.price}
                </div>
              </div>

              <div className="space-y-4 text-sm text-white/80">
                {[
                  "Tweak pack download in ZIP format",
                  "Simple install guide included",
                  "Instant access after checkout",
                  "One-time payment with no recurring fees",
                ].map((item) => (
                  <div className="flex items-center gap-3" key={item}>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  Recommended setup
                </div>
                <p className="text-sm leading-6 text-white/65">
                  Keep your ZIP off the public page. Use a Stripe success redirect for the buyer,
                  then send or unlock the file only after a confirmed payment. For real protection,
                  connect Stripe webhooks to a private file delivery link.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <Lock className="h-5 w-5" />,
              title: "Protected delivery",
              text: "Do not hard-link the ZIP on your homepage. Use a private URL or a backend-generated signed link.",
            },
            {
              icon: <Star className="h-5 w-5" />,
              title: "Simple launch",
              text: "Drop in your Stripe payment link, upload the site, and you can start selling straight away.",
            },
            {
              icon: <Download className="h-5 w-5" />,
              title: "Instant download",
              text: "This template includes a built-in success view that can reveal the download button after checkout.",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                  {item.icon}
                </div>
                <div className="text-lg font-bold">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Buyer success page
            </div>
            <h2 className="mt-3 text-3xl font-black">{isSuccess ? "Payment received" : "Demo success state"}</h2>
            <p className="mt-3 text-white/75">
              {isSuccess
                ? "Thanks for your payment. Your download is ready below."
                : "After Stripe sends the buyer back to your site, this section can act as the download page. In this demo, adding ?paid=1 to the URL shows the download button."}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {isSuccess ? (
                <Button className="rounded-2xl px-8 py-6 text-base font-semibold" onClick={handleDownload}>
                  Download ZIP
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="rounded-2xl px-8 py-6 text-base font-semibold text-black"
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set("paid", "1");
                    window.location.href = url.toString();
                  }}
                >
                  Preview success page
                </Button>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-white/45">
          Need help with your order? Contact {config.supportEmail}
        </footer>
      </div>
    </div>
  );
}
