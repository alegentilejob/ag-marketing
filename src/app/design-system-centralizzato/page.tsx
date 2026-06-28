"use client";

import React from 'react';

// ==========================================
// TOKEN COMPONENTS & CONSTANTS
// ==========================================

export const ANIMATION_DURATION = '400ms';
export const ANIMATION_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

interface VisualTextProps {
  type: 'menu' | 'h1' | 'h2' | 'h3' | 'p' | 'caption' | 'section-name' | 'display-number' | 'lead';
  children: React.ReactNode;
  className?: string;
}

export function VisualText({ type, children, className = '' }: VisualTextProps) {
  switch (type) {
    case 'menu':
      return (
        <span className={`font-inter text-[14px] font-normal tracking-normal text-black normal-case leading-none ${className}`}>
          {children}
        </span>
      );
    case 'h1':
      return (
        <h1 className={`text-[54px] font-inter font-normal text-gray-950 tracking-[0.03em] leading-tight ${className}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`text-[40px] font-inter font-normal text-gray-950 tracking-[0.03em] leading-tight ${className}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`text-[33px] font-inter font-normal text-gray-950 tracking-[0.03em] leading-tight ${className}`}>
          {children}
        </h3>
      );
    case 'p':
      return (
        <p className={`text-[15px] font-inter font-normal text-gray-900 leading-normal tracking-normal ${className}`}>
          {children}
        </p>
      );
    case 'caption':
      return (
        <span className={`text-[13px] font-inter font-normal text-[#0D1016]/50 leading-normal tracking-normal ${className}`}>
          {children}
        </span>
      );
    case 'section-name':
      return (
        <span className={`text-[13px] font-inter font-normal text-gray-400 uppercase tracking-[0.05em] ${className}`}>
          {children}
        </span>
      );
    case 'display-number':
      return (
        <span className={`text-[87px] font-inter font-normal text-gray-950 tracking-[0.03em] leading-none ${className}`}>
          {children}
        </span>
      );
    case 'lead':
      return (
        <span className={`text-[22px] font-inter font-normal text-gray-900 leading-normal tracking-[0.03em] ${className}`}>
          {children}
        </span>
      );
    default:
      return <span className={className}>{children}</span>;
  }
}

interface ColorSwatchProps {
  name: string;
  hex: string;
  bgClass: string;
}

export function ColorSwatch({ name, hex, bgClass }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`w-full aspect-square rounded-none ${bgClass}`} />
      <div className="flex flex-col">
        <span className="text-[11px] font-inter font-normal text-gray-900 leading-none">{name}</span>
        <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase">{hex}</span>
      </div>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0038A8] text-white text-[14px] font-inter font-normal tracking-normal normal-case rounded-full p-3 leading-none transition-none select-none cursor-pointer w-fit ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <div 
      onClick={onClick}
      className={`group flex items-center gap-2 text-gray-900 w-fit cursor-pointer h-[38px] ${className}`}
    >
      <svg className="w-4 h-4 text-gray-900 transform translate-x-[2px] -translate-y-[2px] overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6v10h10" strokeLinecap="square" strokeLinejoin="miter" />
        <path 
          d="M12 12l4 4-4 4" 
          className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
        />
      </svg>
      <span className="text-[14px] font-inter font-normal tracking-normal normal-case leading-none transition-transform duration-400 ease-out group-hover:translate-x-[2px]">
        {children}
      </span>
    </div>
  );
}

export function TertiaryButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent text-[#0D1016] text-[14px] font-inter font-normal tracking-normal normal-case rounded-full p-3 leading-none border border-transparent hover:border-[#0D1016]/20 transition-colors duration-400 cursor-pointer w-fit ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryLargeButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <div 
      onClick={onClick}
      className={`group flex items-center gap-2.5 text-[#0D1016]/50 w-fit cursor-pointer transition-colors duration-400 ${className}`}
    >
      <svg className="w-5 h-5 text-[#0D1016]/50 transition-colors duration-400 group-hover:text-[#0D1016] transform translate-x-[2px] -translate-y-[2px] overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6v10h10" strokeLinecap="square" strokeLinejoin="miter" />
        <path 
          d="M12 12l4 4-4 4" 
          className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
        />
      </svg>
      <span className="text-[22px] font-inter font-normal tracking-[0.03em] normal-case leading-none transition-all duration-400 ease-out group-hover:text-[#0D1016] group-hover:translate-x-[2px]">
        {children}
      </span>
    </div>
  );
}

interface TokenImageProps {
  aspectRatio?: string;
  className?: string;
}

export function TokenImage({ aspectRatio = '3/4', className = '' }: TokenImageProps) {
  return (
    <div 
      className={`bg-[#0D1016] rounded-none transition-none cursor-default ${className}`} 
      style={{ aspectRatio }}
    />
  );
}

interface TokenTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TokenTransition({ children, className = '', style = {}, ...props }: TokenTransitionProps) {
  return (
    <div
      className={`transition-all ${className}`}
      style={{
        transitionDuration: ANIMATION_DURATION,
        transitionTimingFunction: ANIMATION_EASING,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN SANDBOX PAGE
// ==========================================

export default function CentralizedSandboxPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start py-20">
      <div className="w-full max-w-xl px-8 border-b border-gray-200 pb-4 mb-8">
        <h1 className="text-xl font-inter font-normal tracking-[0.03em] text-gray-500 uppercase">
          Visual Identity Sandbox
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Drafting new tokens & components (Step 1)
        </p>
      </div>

      {/* Row container matching the user's specific request */}
      <div className="w-full max-w-xl px-8 flex flex-col gap-6 py-4">
        {/* Menu item Row */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="text-gray-900 font-sans text-base tracking-normal">
            Voce a menu (Standard)
          </span>
          <VisualText type="menu">Voce a menu</VisualText>
        </div>

        {/* H1 Row container */}
        <div className="flex flex-col gap-2 pt-4 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview H1 (54px, Inter, normal, kerning 0%)</span>
          <VisualText type="h1">Voce a menu</VisualText>
        </div>

        {/* H2 Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview H2 (40px, Inter, normal, kerning 0%)</span>
          <VisualText type="h2">Voce a menu</VisualText>
        </div>

        {/* H3 Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview H3 (33px, Inter, normal, kerning 0%)</span>
          <VisualText type="h3">Voce a menu</VisualText>
        </div>

        {/* Paragraph (p) Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Paragraph (15px, Inter, normal, kerning 0%)</span>
          <VisualText type="p">Voce a menu</VisualText>
        </div>

        {/* Didascalia Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Didascalia (13px, Inter, normal, opacità 50% nero, kerning 0%)</span>
          <VisualText type="caption">Voce a menu</VisualText>
        </div>

        {/* Gruppo Combinato: Titolo Didascalia (p 15px) + Didascalia (13px) */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Relazione: Titolo Didascalia (p 15px) + Didascalia (13px)</span>
          <div className="flex flex-col gap-1">
            <VisualText type="p">Titolo della didascalia (p 15px)</VisualText>
            <VisualText type="caption">Didascalia descrittiva dell'elemento o dell'immagine (13px)</VisualText>
          </div>
        </div>

        {/* Nomi Sezioni Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Nomi Sezioni (13px, Inter, normal, kerning 0%)</span>
          <VisualText type="section-name">Voce a menu</VisualText>
        </div>

        {/* Numero Grande Display Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Numero Grande Display (87px, Inter, normal, kerning 0%)</span>
          <VisualText type="display-number">01</VisualText>
        </div>

        {/* Lead Paragraph / Subhead (22px) Row container */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Lead Paragraph / Subhead (22px, Inter, normal, kerning 0%)</span>
          <VisualText type="lead">Voce a menu</VisualText>
        </div>

        {/* Vertical Image Placeholder */}
        <div className="flex flex-col gap-2 pt-2 border-b border-gray-100 pb-4">
          <span className="text-xs text-gray-400 font-sans">Preview Stile Immagine (Rapporto 3:4, rounded-none, no hover/effects)</span>
          <TokenImage className="w-48" />
        </div>

        {/* Colori / Tokens Grid */}
        <div className="flex flex-col gap-3 pt-2 border-b border-gray-100 pb-6">
          <span className="text-xs text-gray-400 font-sans">Preview Colori / Visual Identity Tokens</span>
          <div className="grid grid-cols-5 gap-4 w-full">
            <ColorSwatch name="Bianco" hex="#FFFFFF" bgClass="bg-white border border-gray-200" />
            <ColorSwatch name="Grigio" hex="#E1DFDA" bgClass="bg-[#E1DFDA] border border-gray-200" />
            <ColorSwatch name="Giallo Panna" hex="#E1D5B6" bgClass="bg-[#E1D5B6] border border-gray-200" />
            <ColorSwatch name="Blu" hex="#0038A8" bgClass="bg-[#0038A8]" />
            <ColorSwatch name="Nero" hex="#0D1016" bgClass="bg-[#0D1016] border border-gray-200" />
          </div>
        </div>

        {/* Bottoni / Elementi di Azione (Primario, Secondario e Terziario sullo stesso livello) */}
        <div className="flex flex-col gap-3 pt-2 border-b border-gray-100 pb-6">
          <span className="text-xs text-gray-400 font-sans">Preview Pulsanti (Primario, Secondario e Terziario sullo stesso livello)</span>
          <div className="flex items-center gap-8">
            {/* Pulsante Primario */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] text-gray-400 font-sans uppercase">Primario</span>
              <PrimaryButton>Primario</PrimaryButton>
            </div>

            {/* Pulsante Secondario */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] text-gray-400 font-sans uppercase">Secondario</span>
              <SecondaryButton>Secondario</SecondaryButton>
            </div>

            {/* Pulsante Terziario */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] text-gray-400 font-sans uppercase">Terziario</span>
              <TertiaryButton>Terziario</TertiaryButton>
            </div>
          </div>
        </div>

        {/* Pulsante Secondario Grande / Lead Action Row container */}
        <div className="flex flex-col gap-3 pt-2 border-b border-gray-100 pb-6">
          <span className="text-xs text-gray-400 font-sans">Preview Elemento Secondario Grande (22px, Inter, normal, opacità 50% nero, kerning 0%)</span>
          <SecondaryLargeButton>Voce a menu</SecondaryLargeButton>
        </div>

        {/* Token Animazioni Row container */}
        <div className="flex flex-col gap-3 pt-2 border-b border-gray-100 pb-8">
          <span className="text-xs text-gray-400 font-sans">Preview Token Animazioni & Transizioni</span>
          <div className="flex flex-col gap-4 border border-gray-100 p-6 rounded-none">
            <div className="flex justify-between text-[13px] font-inter">
              <span className="text-gray-500">Duration Token</span>
              <span className="text-gray-950 font-mono">400ms (0.4s)</span>
            </div>
            <div className="flex justify-between text-[13px] font-inter border-t border-gray-100 pt-3">
              <span className="text-gray-500">Easing Curve Token</span>
              <span className="text-gray-950 font-mono">cubic-bezier(0.16, 1, 0.3, 1) (Slow Deceleration)</span>
            </div>
            
            {/* Visual Demo Box using the custom ease and duration */}
            <div className="mt-3">
              <span className="text-[10px] text-gray-400 font-sans uppercase block mb-2">Demo Interattiva (Hover per testare transizione)</span>
              <div 
                className="w-full h-12 bg-[#E1D5B6] border border-gray-200 flex items-center px-4 cursor-pointer group relative overflow-hidden"
              >
                <TokenTransition 
                  className="w-4 h-4 bg-[#0038A8] rounded-none group-hover:translate-x-[350px]"
                />
                <span 
                  className="text-[13px] font-inter font-normal text-gray-900 ml-4 absolute left-12 group-hover:opacity-0 transition-opacity duration-150"
                >
                  Passa il mouse per testare la curva fluida (Slow Deceleration)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SEZIONE COMPONENTI */}
        <div className="w-full max-w-xl pt-4">
          <span className="text-[13px] font-inter font-normal text-gray-400 uppercase tracking-[0.05em] block mb-6">
            Componenti
          </span>

          <div className="flex flex-col gap-4">
            {/* FAQ Titolo in stile H2 */}
            <h2 className="text-[40px] font-inter font-normal text-gray-900 tracking-[0.03em] leading-tight">
              FAQ & Elenchi Puntati (Interattivo: Clicca per aprire)
            </h2>

            {/* Container Lista FAQ con righe sopra e sotto */}
            <div className="border-t border-[#0038A8]/10 flex flex-col mb-10">
              <FaqItem 
                title="Che cos'è l'ecosistema narrativo di Wolly?"
                content="Un ecosistema narrativo e strategico dedicato alla rivoluzione della finanza personale tramite l'intelligenza artificiale. Segue lo sviluppo dell'app dal prototipo fino alla pubblicazione finale."
              />
              <FaqItem 
                title="Come vengono gestiti i token di visual identity?"
                content="Tutti i colori, font, spaziature e curve di animazione sono centralizzati come token atomici. Questo garantisce coerenza e pulizia su tutte le pagine del sito."
              />
            </div>

            {/* Grid Card Immagini Neutre */}
            <span className="text-xs text-gray-400 font-sans block mb-2">
              Griglia Card Immagini (Rapporto 3:4, spazio stretto, titolo + didascalia + CTA secondaria piccola)
            </span>
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Card 1 */}
              <div className="group flex flex-col gap-2">
                <TokenImage className="w-full cursor-pointer" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[15px] font-inter font-normal text-gray-900 leading-tight">
                      Progetto Alpha
                    </h4>
                    <span className="text-[13px] font-inter font-normal text-[#0D1016]/50 leading-normal">
                      Visual Identity, Design System
                    </span>
                  </div>
                  {/* Tasto Secondario Piccolo - si attiva con l'hover dell'intera card */}
                  <div className="flex items-center gap-1.5 text-gray-900 w-fit cursor-pointer mt-1">
                    <svg className="w-3.5 h-3.5 text-gray-900 transform translate-x-[1px] -translate-y-[1px] overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6v10h10" strokeLinecap="square" strokeLinejoin="miter" />
                      <path d="M12 12l4 4-4 4" className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                    <span className="text-[13px] font-inter font-normal tracking-normal normal-case leading-none transition-transform duration-400 ease-out group-hover:translate-x-[2px]">
                      Scopri di più
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col gap-2">
                <TokenImage className="w-full cursor-pointer" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[15px] font-inter font-normal text-gray-900 leading-tight">
                      Progetto Beta
                    </h4>
                    <span className="text-[13px] font-inter font-normal text-[#0D1016]/50 leading-normal">
                      App Development, Prototypes
                    </span>
                  </div>
                  {/* Tasto Secondario Piccolo - si attiva con l'hover dell'intera card */}
                  <div className="flex items-center gap-1.5 text-gray-900 w-fit cursor-pointer mt-1">
                    <svg className="w-3.5 h-3.5 text-gray-900 transform translate-x-[1px] -translate-y-[1px] overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6v10h10" strokeLinecap="square" strokeLinejoin="miter" />
                      <path d="M12 12l4 4-4 4" className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                    <span className="text-[13px] font-inter font-normal tracking-normal normal-case leading-none transition-transform duration-400 ease-out group-hover:translate-x-[2px]">
                      Scopri di più
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Full-Screen Mockup */}
            <div className="flex flex-col gap-2 mt-10">
              <span className="text-xs text-gray-400 font-sans block mb-2">
                Controlli Slider / Carousel (Interattivo: clicca i punti per cambiare slide)
              </span>
              <SliderDemo />
            </div>

            {/* Pulsanti Navigazione Slider */}
            <div className="flex flex-col gap-2 mt-6 mb-10">
              <span className="text-xs text-gray-400 font-sans block mb-2">
                Pulsanti Navigazione Slider (Cerchi opachi, frecce orizzontali, senza animazioni)
              </span>
              <SliderNavDemo />
            </div>

            {/* List Row Case Studies */}
            <span className="text-xs text-gray-400 font-sans block mb-2">
              Case Studies List Component (3:4 ratio, L-shape arrow, 15px title, 13px didascalia 50%, primary blue borders, hover animation)
            </span>
            <div className="border-t border-[#0038A8]/10 flex flex-col w-full">
              <CaseStudyRow 
                title="Wolly: L'Ecosistema Strategico per la Finanza Personale"
                category="Growth Marketing"
                date="Giugno 2026"
              />
              <CaseStudyRow 
                title="Branding & Visual Identity per NextGen Fintech"
                category="Brand Design"
                date="Maggio 2026"
              />
            </div>
          </div>
        </div>
      </div>
      
      <ImpressiveBanner />
    </div>
  );
}

// Componente Demo per lo Slider con indicatore "cavo e a tempo"
function SliderDemo() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const totalSlides = 4;
  const slideDuration = 4000; // 4 secondi per slide

  // Effect per il cambio slide automatico a tempo
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <div className="w-full relative bg-[#0D1016] overflow-hidden flex flex-col justify-between p-6" style={{ aspectRatio: '16 / 9' }}>
      {/* Contenuto di mockup della slide corrente */}
      <div className="flex flex-col gap-1.5 text-white/90">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#E1D5B6]">
          Slide {activeSlide + 1} di {totalSlides}
        </span>
        <h3 className="text-2xl font-inter font-normal leading-none tracking-[0.03em]">
          {activeSlide === 0 && "Wolly: Prototipo Iniziale"}
          {activeSlide === 1 && "L'Architettura del Brand"}
          {activeSlide === 2 && "Sviluppo Tecnico & Ecosistema"}
          {activeSlide === 3 && "Preparazione al Lancio"}
        </h3>
      </div>

      {/* Riquadro bianco con opacità da token contenente i dot e la linea cava a tempo */}
      <div className="self-center mt-auto bg-white/70 backdrop-blur-md border border-[#0038A8]/10 px-4 py-2.5 rounded-full flex items-center gap-2 select-none shadow-sm">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className="focus:outline-none cursor-pointer relative flex items-center justify-center h-2"
              style={{
                width: isActive ? '36px' : '8px',
                transitionProperty: 'width',
                transitionDuration: ANIMATION_DURATION,
                transitionTimingFunction: ANIMATION_EASING
              }}
            >
              {isActive ? (
                /* Linea trasparente (cava) con riempimento a tempo */
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden border border-[#0038A8]/10 relative">
                  <div 
                    key={activeSlide} // Resetta l'animazione al cambio slide
                    className="h-full bg-[#0D1016] rounded-full"
                    style={{
                      animation: `slideProgress ${slideDuration}ms linear forwards`
                    }}
                  />
                </div>
              ) : (
                /* Dot inattivo normale dello stesso diametro/altezza della linea (2) */
                <div className="w-2 h-2 rounded-full bg-black/25 transition-colors duration-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* CSS Keyframes inline per l'animazione di riempimento a tempo */}
      <style jsx global>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

// Componente Demo per i Pulsanti di Navigazione dello Slider in UI Standalone
function SliderNavDemo() {
  return (
    <div className="w-full h-32 bg-gray-50 border border-[#0038A8]/10 flex items-center justify-center relative rounded-none select-none">
      <div className="absolute top-2 left-3 text-[10px] text-gray-400 font-sans uppercase">
        Standalone UI Context (Frecce 50% Opacità Nera - Allineato a Secondario)
      </div>
      
      <div className="flex items-center gap-3">
        {/* Bottone Prev (Sinistra) - 50% Opacità Nera da token */}
        <button className="w-10 h-10 rounded-full bg-[#0D1016]/50 flex items-center justify-center text-white select-none cursor-pointer pointer-events-none border-none">
          {/* Freccia orizzontale verso sinistra */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        {/* Bottone Next (Destra) - 50% Opacità Nera da token */}
        <button className="w-10 h-10 rounded-full bg-[#0D1016]/50 flex items-center justify-center text-white select-none cursor-pointer pointer-events-none border-none">
          {/* Freccia orizzontale verso destra */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Subcomponent per FAQ con stato e transizioni coerenti coi token
function FaqItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-[#0038A8]/10 py-1.5 flex flex-col w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left cursor-pointer focus:outline-none py-1"
      >
        {/* Titolo principale in stile p (15px, Inter, normal, kerning 0%) */}
        <span className="text-[15px] font-inter font-normal text-gray-900 pr-4 leading-snug tracking-normal">
          {title}
        </span>
        
        {/* Icona + che ruota a X e rimane ferma in posizione usando il token di ease */}
        <svg 
          className="w-3 h-3 text-[#0D1016] flex-shrink-0 transition-transform" 
          style={{
            transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)',
            transitionDuration: ANIMATION_DURATION,
            transitionTimingFunction: ANIMATION_EASING
          }}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </button>

      {/* Contenuto di dettaglio (15px, Inter, 50% opacità) con transizione */}
      <div 
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
          transitionDuration: ANIMATION_DURATION,
          transitionTimingFunction: ANIMATION_EASING,
          marginTop: isOpen ? '12px' : '0px'
        }}
      >
        <p className="text-[15px] font-inter font-normal text-[#0D1016]/50 leading-relaxed pb-2">
          {content}
        </p>
      </div>
    </div>
  );
}

// Componente CaseStudyRow allineato ai token e regole del sandbox
function CaseStudyRow({ title, category, date }: { title: string; category: string; date: string }) {
  return (
    <div className="group w-full flex items-center justify-between py-4 border-b border-[#0038A8]/10 transition-colors duration-400 cursor-pointer">
      <div className="flex items-center gap-4 w-full">
        {/* Immagine Quadrata neutra nera senza arrotondamenti */}
        <div className="w-12 h-12 shrink-0 bg-[#0D1016] rounded-none aspect-square">
          {/* Riempitivo nero */}
        </div>

        {/* Titolo e Categoria (con animazione hover di slittamento e fade blur per testo mozzato) */}
        <div className="flex-1 flex flex-col justify-center min-w-0 pr-4">
          <h4 
            className="text-[15px] font-inter font-normal text-gray-900 leading-tight transition-transform duration-400 ease-out group-hover:translate-x-[2px] overflow-hidden whitespace-nowrap w-full"
            style={{
              maskImage: 'linear-gradient(to right, #000 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, #000 80%, transparent 100%)'
            }}
          >
            {title}
          </h4>
          <span 
            className="text-[13px] font-inter font-normal text-[#0D1016]/50 leading-normal mt-0.5 transition-transform duration-400 ease-out group-hover:translate-x-[2px] overflow-hidden whitespace-nowrap w-full"
            style={{
              maskImage: 'linear-gradient(to right, #000 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, #000 85%, transparent 100%)'
            }}
          >
            {category}
          </span>
        </div>

        {/* Data e Freccia orizzontale come slide senza cerchio */}
        <div className="flex items-center gap-5 shrink-0">
          <span className="text-[13px] font-inter font-normal text-[#0D1016]/50 transition-transform duration-400 ease-out group-hover:translate-x-[2px]">
            {date}
          </span>
          <div className="flex items-center justify-center w-5 h-5">
            {/* Freccia orizzontale verso destra, con animazione hover di traslazione */}
            <svg className="w-4 h-4 text-gray-900 transform transition-transform duration-400 ease-out group-hover:translate-x-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Banner a tutta larghezza nero con layout ad alto impatto visivo
export function ImpressiveBanner() {
  return (
    <div className="w-full Background_gradientfootersection py-28 px-8 relative overflow-hidden flex items-center justify-center border-t border-gray-900 mt-16">
      {/* Subtle breathe glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #0038A8 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'bannerGlowBreathe 8s infinite ease-in-out',
        }}
      />
      
      {/* Golden grid pattern / lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-between px-12 sm:px-24 max-w-7xl mx-auto">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white hidden sm:block" />
        <div className="w-px h-full bg-white hidden sm:block" />
        <div className="w-px h-full bg-white" />
      </div>

      {/* Rettangolo Bianco Card con vertici smussati, dimensioni e margini ridotti */}
      <div className="relative z-10 bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl flex flex-col justify-between gap-6 min-h-[220px] border border-gray-100 shadow-2xl">
        <div className="text-left">
          <VisualText 
            type="h2" 
            className="!text-[#0D1016] max-w-[20ch] select-none text-[32px] sm:text-[40px] leading-tight font-normal"
          >
            Collaboriamo a qualcosa di grandioso
          </VisualText>
        </div>
        
        <div className="self-end">
          <PrimaryButton
            className="hover:!bg-[#1D0CA8] hover:shadow-[0_4px_24px_rgba(0,56,168,0.15)] motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]"
            style={{
              transitionProperty: 'all',
              transitionDuration: ANIMATION_DURATION,
              transitionTimingFunction: ANIMATION_EASING,
            }}
          >
            Primario
          </PrimaryButton>
        </div>
      </div>

      <style>{`
        .Background_gradientfootersection {
          background: linear-gradient(135deg, #0D1016 0%, #151b26 50%, #0038A8 100%);
        }
        @keyframes bannerGlowBreathe {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(0.9); }
          50% { opacity: 0.18; transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>
    </div>
  );
}
