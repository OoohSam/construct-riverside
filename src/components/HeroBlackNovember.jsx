import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero/sunlit-luxury-balcony-overlooking-nairobi.webp";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

// These are cropped concept images, not verified photos of the actual units.
const rooms = [
  { name: "Bedroom", image: "/images/black-november/bedroom.webp" },
  { name: "Living room", image: "/images/black-november/living.webp" },
  { name: "Dining", image: "/images/black-november/dining.webp" },
];

const ribbons = [
  { x: "2%", y: "7%", size: 64, delay: -2, duration: 13, tilt: -32 },
  { x: "36%", y: "13%", size: 34, delay: -7, duration: 18, tilt: 28 },
  { x: "44%", y: "7%", size: 48, delay: -4, duration: 16, tilt: -18 },
  { x: "3%", y: "57%", size: 32, delay: -8, duration: 15, tilt: 45 },
  { x: "40%", y: "42%", size: 26, delay: -11, duration: 20, tilt: -20 },
  { x: "47%", y: "83%", size: 60, delay: -6, duration: 19, tilt: 42 },
  { x: "14%", y: "88%", size: 23, delay: -14, duration: 17, tilt: -10 },
];

function FloatingGold() {
  return (
    <div className="bn-gold-layer" aria-hidden="true">
      {ribbons.map((r, i) => (
        <span
          key={i}
          className="bn-ribbon"
          style={{
            left: r.x, top: r.y, width: r.size,
            height: Math.max(12, r.size * 0.31),
            "--tilt": `${r.tilt}deg`,
            animationDelay: `${r.delay}s`,
            animationDuration: `${r.duration}s`,
          }}
        />
      ))}
      {Array.from({ length: 28 }, (_, i) => (
        <span key={`spark-${i}`} className="bn-spark" style={{
          left: `${(i * 47.3 + 5) % 57}%`,
          top: `${(i * 29.1 + 12) % 98}%`,
          animationDelay: `${-(i * 0.71)}s`,
          animationDuration: `${3 + (i % 5)}s`,
        }} />
      ))}
    </div>
  );
}

export default function HeroBlackNovember({ onCtaClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCta = () => {
    try {
      trackMetaEvent("Contact", {
        eventID: createEventId(),
        content_name: "Black November Fully Furnished 1BR Offer",
        content_category: "Hero CTA",
        contact_method: "Lead Modal",
      });
    } catch (error) {
      console.warn("Meta Pixel tracking failed:", error);
    }
    if (typeof onCtaClick === "function") onCtaClick();
  };

  return (
    <>
      <section className="bn-hero" aria-label="Riverside Azure Black November offer">
        <div className="bn-background" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className={`bn-hero-img ${imageLoaded ? "bn-loaded" : ""}`}
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
            style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.08, 60)}px, 0) scale(1.05)` }}
          />
        </div>
        <div className="bn-shade" aria-hidden="true" />
        <FloatingGold />

        {/* Navbar stays in your existing app; this section sits beneath it. */}
        <div className="bn-copy">
          <div className="bn-eyebrow">RIVERSIDE AZURE</div>
          <h1 className="bn-headline">
            <span className="bn-black">BLACK</span>
            <span className="bn-november">NOVEMBER</span>
          </h1>
          <div className="bn-subtitle">EXCLUSIVE OFFER</div>

          <div className="bn-offer">
            <div className="bn-offer-half">
              <span>Pay <strong>20%</strong> Deposit</span>
              <span>for a <b>1 or 2 Bedroom</b></span>
            </div>
            <div className="bn-offer-rule" />
            <div className="bn-offer-half bn-offer-gift">
              <span className="bn-gift-icon" aria-hidden="true">♔</span>
              <span>Get it</span>
              <b>Furnished</b>
            </div>
          </div>

          <div className="bn-benefits" aria-label="Illustrative furnishing categories">
            <div><span aria-hidden="true">▱</span><p>Modern<br/>Furniture</p></div>
            <div><span aria-hidden="true">♧</span><p>Kitchen<br/>Appliances</p></div>
            <div><span aria-hidden="true">▢</span><p>Living Room<br/>Set</p></div>
            <div><span aria-hidden="true">✧</span><p>Lighting<br/>&amp; Décor</p></div>
          </div>

          <button type="button" className="bn-cta" onClick={handleCta}>
            BOOK A UNIT TODAY <span aria-hidden="true">→</span>
          </button>
          <div className="bn-footnote">LIMITED TIME OFFER <span>|</span> RIVERSIDE AZURE, RIVERSIDE DRIVE</div>
        </div>

        <div className="bn-tag" aria-hidden="true"><span>BLACK<br/>NOVEMBER</span><b>%</b></div>
        <div className="bn-rooms" aria-label="Illustrative furnishing moodboard">
          {rooms.map((room) => (
            <div className="bn-room" key={room.name}>
              <img src={room.image} alt={`${room.name} interior concept, for illustration only`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      <style>{`
        .bn-hero { position: relative; isolation: isolate; width: 100%; min-height: 680px; height: 100svh; overflow: hidden; background: #090a0c; color: white; }
        .bn-background, .bn-shade, .bn-gold-layer { position: absolute; inset: 0; pointer-events: none; }
        .bn-background { z-index: -3; }
        .bn-hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 1s ease; will-change: transform; }
        .bn-hero-img.bn-loaded { opacity: 1; }
        .bn-shade { z-index: -2; background: linear-gradient(90deg, #08090c 0%, rgba(8,9,12,.97) 24%, rgba(8,9,12,.85) 39%, rgba(8,9,12,.36) 55%, rgba(8,9,12,.02) 78%), linear-gradient(0deg, rgba(5,6,7,.48), transparent 42%); }
        .bn-copy { position: absolute; left: clamp(25px, 5.1vw, 98px); top: 50%; transform: translateY(-46%); z-index: 3; width: min(720px, 51vw); }
        .bn-eyebrow { font: 500 clamp(10px,1.05vw,17px)/1.2 Montserrat, sans-serif; letter-spacing: .42em; color: #e3c98b; margin-bottom: 10px; }
        .bn-headline { font-family: Georgia, 'Times New Roman', serif; font-weight: 700; letter-spacing: -.065em; line-height: .77; margin: 0; text-transform: uppercase; }
        .bn-headline span { display: block; white-space: nowrap; }
        .bn-black { font-size: clamp(72px, 9.2vw, 164px); background: linear-gradient(125deg,#fff1ba 0%,#f5c55c 26%,#aa681e 49%,#ffe59c 67%,#bc8237 100%); -webkit-background-clip: text; background-clip: text; color: transparent; padding: .06em 0 .13em; }
        .bn-november { font-size: clamp(56px, 7vw, 124px); color: #f7f4ef; text-shadow: 0 2px 5px rgba(0,0,0,.4); }
        .bn-subtitle { margin: 21px 0 17px 5px; font: 500 clamp(14px,1.7vw,27px)/1.2 Montserrat,sans-serif; letter-spacing: .35em; color: #f3cf85; }
        .bn-offer { display: flex; align-items: center; width: min(100%,700px); min-height: 135px; padding: 18px 26px; border: 2px solid #dcaf59; border-radius: 28px; background: rgba(8,9,11,.73); box-shadow: 0 0 25px rgba(233,178,73,.11),inset 0 0 20px rgba(255,212,125,.04); }
        .bn-offer-half { flex: 1; display:flex; flex-direction:column; justify-content:center; font-family: Georgia,serif; font-size: clamp(20px,2vw,34px); line-height:1.2; white-space:nowrap; }
        .bn-offer-half strong { font-size: 1.55em; color: #f5cf81; }
        .bn-offer-half b { color: #f4d28a; font-weight:700; }
        .bn-offer-rule { width:1px; height:80px; background:#dbb56c; margin:0 24px; flex:none; }
        .bn-offer-gift { position:relative; padding-left: 4px; }
        .bn-gift-icon { position:absolute; right:12px; top:-18px; font-family:Georgia,serif; color:#edc46f; font-size:34px; line-height:1; }
        .bn-benefits { display:flex; justify-content:space-between; gap:8px; margin:24px 0 29px; max-width:655px; }
        .bn-benefits > div { display:flex; gap:10px; align-items:center; }
        .bn-benefits span { font-size:30px; min-width:30px; text-align:center; color:#e4bc68; }
        .bn-benefits p { margin:0; font:400 clamp(10px,.9vw,14px)/1.4 Montserrat, sans-serif; color:#f0eae2; }
        .bn-cta { width: min(325px,100%); min-height:60px; padding:0 32px; display:flex; align-items:center; justify-content:space-between; gap:25px; border:1px solid #ffe3a3; border-radius:9px; background:linear-gradient(125deg,#fff0bb,#dca855 85%,#f0c579); color:#181615; font:700 13px Montserrat,sans-serif; letter-spacing:.12em; cursor:pointer; box-shadow:0 5px 35px rgba(232,164,53,.17); transition:transform .2s ease,filter .2s ease; }
        .bn-cta:hover { transform:translateY(-3px); filter:brightness(1.08); }
        .bn-cta span { font-size:25px; font-weight:400; }
        .bn-footnote { margin:25px 0 0 4px; color:#e9e7e1; font:500 clamp(8px,.69vw,11px) Montserrat,sans-serif; letter-spacing:.31em; }
        .bn-footnote span { margin:0 12px; }
        .bn-rooms { position:absolute; z-index:2; width:46.5%; right:2.8%; bottom:5.2%; height:26%; min-height:140px; display:grid; grid-template-columns:repeat(3,1fr); border:3px solid #e2be79; border-radius:23px; overflow:hidden; box-shadow:0 15px 45px rgba(0,0,0,.36); }
        .bn-room { overflow:hidden; background:linear-gradient(135deg,#b5a38e,#5c4938); border-right:2px solid #e2be79; }
        .bn-room:last-child { border-right:0; }
        .bn-room img { width:100%; height:100%; object-fit:cover; display:block; }
        .bn-tag { position:absolute; z-index:2; left:38.5%; top:12%; width:105px; height:145px; border:2px solid #b78940; border-radius:15px; transform:rotate(-18deg); background:#0a0a0a; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 8px 20px rgba(0,0,0,.7); font:600 15px/1.25 Montserrat,sans-serif; text-align:center; color:#f1cb80; }
        .bn-tag:before { content:''; position:absolute; width:13px; height:13px; border-radius:50%; border:2px solid #ba9655; top:9px; left:calc(50% - 8px); }
        .bn-tag b { font-size:34px; margin-top:8px; }
        .bn-gold-layer { z-index:1; overflow:hidden; }
        .bn-ribbon { position:absolute; display:block; border-radius:45% 10% 45% 12%; opacity:.9; background:linear-gradient(105deg,#73420a 3%,#ffea9b 24%,#b17a30 45%,#ffdc7e 70%,#805016 100%); box-shadow:0 0 12px rgba(235,168,62,.32); transform:rotate(var(--tilt)); animation:bnRibbonFloat 15s ease-in-out infinite alternate; filter:drop-shadow(0 2px 4px rgba(0,0,0,.6)); }
        .bn-ribbon:nth-child(2n) { clip-path:polygon(0 0,100% 18%,90% 84%,2% 100%); }
        .bn-spark { width:3px; height:3px; position:absolute; border-radius:50%; background:#ffdb82; box-shadow:0 0 6px 2px rgba(246,178,65,.35); animation:bnSparkle 4s ease-in-out infinite; }
        @keyframes bnRibbonFloat { 0%{transform:translate3d(0,-13px,0) rotate(var(--tilt)) rotateY(0);opacity:.5} 50%{transform:translate3d(25px,25px,0) rotate(calc(var(--tilt) + 24deg)) rotateY(55deg);opacity:1} 100%{transform:translate3d(-14px,75px,0) rotate(calc(var(--tilt) - 18deg)) rotateY(180deg);opacity:.65} }
        @keyframes bnSparkle {0%,100%{opacity:.05;transform:scale(.6)}45%{opacity:.85;transform:scale(1.8)} }
        @media(max-width:1250px){.bn-copy{width:54vw}.bn-offer{padding:16px}.bn-offer-half{font-size:clamp(16px,1.8vw,29px)}.bn-offer-rule{margin:0 14px}.bn-tag{left:43%;top:14%;transform:rotate(-16deg) scale(.8)}.bn-rooms{width:45%;height:23%}}
        @media(max-width:900px){.bn-hero{height:auto;min-height:100svh;padding:130px 22px 300px;box-sizing:border-box}.bn-copy{position:relative;left:auto;top:auto;transform:none;width:min(100%,650px)}.bn-shade{background:linear-gradient(90deg,#08090bea 0%,rgba(8,9,11,.77) 66%,rgba(8,9,11,.3) 100%),linear-gradient(0deg,rgba(4,4,5,.6),transparent 65%)}.bn-rooms{width:calc(100% - 44px);height:225px;right:22px;bottom:34px}.bn-tag{left:auto;right:5%;top:105px;transform:rotate(-14deg) scale(.7);transform-origin:top right}.bn-headline .bn-black{font-size:clamp(74px,12vw,124px)}.bn-headline .bn-november{font-size:clamp(53px,9vw,95px)}}
        @media(max-width:560px){.bn-hero{min-height:880px;padding:125px 18px 230px}.bn-eyebrow{font-size:10px;letter-spacing:.28em}.bn-headline .bn-black{font-size:clamp(63px,17vw,95px)}.bn-headline .bn-november{font-size:clamp(45px,11.6vw,65px)}.bn-subtitle{font-size:14px;letter-spacing:.23em;margin:20px 0 16px}.bn-offer{border-radius:17px;min-height:108px;padding:12px 10px}.bn-offer-half{font-size:clamp(13px,3.6vw,21px)}.bn-offer-rule{height:62px;margin:0 9px}.bn-gift-icon{display:none}.bn-benefits{margin:22px 0 23px;display:grid;grid-template-columns:1fr 1fr;gap:14px}.bn-benefits span{font-size:24px}.bn-benefits p{font-size:11px}.bn-cta{min-height:54px}.bn-footnote{font-size:8px;letter-spacing:.12em;line-height:1.6}.bn-footnote span{margin:0 5px}.bn-rooms{height:165px;width:calc(100% - 36px);right:18px;bottom:28px;border-radius:14px}.bn-tag{top:80px;right:1%;transform:rotate(-14deg) scale(.52)}.bn-ribbon:nth-child(n+5){display:none}}
        @media(prefers-reduced-motion:reduce){.bn-ribbon,.bn-spark{animation:none!important}.bn-hero-img{transform:none!important;transition:none}.bn-cta{transition:none}}
      `}</style>
    </>
  );
}
