"use client"

import { MessageCircle, Mail, Phone, CheckCircle2, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export default function CTAContactsSlide() {
  const benefits = [
    "Познайомимось із вашою клінікою",
    "Обговоримо, які завдання стоять перед вами",
    "Підкажемо, який тариф підійде краще",
    "Відповімо на всі запитання",
  ]

  const contacts = [
    {
      id: "telegram",
      icon: MessageCircle,
      label: "Telegram",
      value: "@vlada_finance",
      href: "https://t.me/vlada_finance",
      color: "text-[#0088cc]",
      bgColor: "bg-[#0088cc]/10",
      hoverBg: "hover:bg-[#0088cc]/20",
    },
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "finance@vlada.dental",
      href: "mailto:finance@vlada.dental",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverBg: "hover:bg-primary/20",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Телефон",
      value: "+380 67 123 45 67",
      href: "tel:+380671234567",
      color: "text-[#1E3A5F]",
      bgColor: "bg-[#1E3A5F]/10",
      hoverBg: "hover:bg-[#1E3A5F]/20",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289889132-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-base px-5 py-2 animate-slide-in-down">
            Готові почати?
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none animate-fade-in delay-200 fill-backwards">
            Наступний <span className="text-primary">крок</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: CTA Content */}
          <div className="space-y-6 animate-slide-in-left delay-400 fill-backwards">
            {/* CTA Card */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-syne text-2xl md:text-3xl font-bold text-foreground">
                    Почніть із безкоштовної консультації
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    За 30 хвилин ми:
                  </p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-slide-in-left fill-backwards"
                      style={{ animationDelay: `${index * 100 + 500}ms` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust Signal */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-primary font-semibold text-lg">
                    Це безкоштовно і ні до чого не зобов&apos;язує
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="space-y-4 animate-slide-in-right delay-500 fill-backwards">
            <h3 className="font-syne text-xl font-bold text-foreground/80 mb-4">
              Зв&apos;яжіться з нами:
            </h3>

            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.id === "telegram" ? "_blank" : undefined}
                  rel={contact.id === "telegram" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card
                    className={`border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${contact.hoverBg} cursor-pointer animate-scale-in fill-backwards`}
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${contact.bgColor} shrink-0`}>
                          <IconComponent className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground font-medium">
                            {contact.label}
                          </p>
                          <p className="text-lg font-semibold text-foreground truncate">
                            {contact.value}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}

            {/* CTA Button */}
            <div className="pt-4 animate-fade-in delay-900 fill-backwards">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-glow text-lg py-6"
              >
                <a href="https://t.me/vlada_finance" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Записатися на консультацію
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center pt-8 animate-slide-in-up delay-1000 fill-backwards">
          <p className="font-syne text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Ви займаєтесь зубами.
          </p>
          <p className="font-syne text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Ми займемось цифрами.
          </p>
        </div>
      </div>
    </section>
  )
}
