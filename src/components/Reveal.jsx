import { useEffect, useRef } from "react";

/**
 * Поява при скрол.
 *
 * Обикновените (opacity) елементи се следят с IntersectionObserver.
 * Clip-аните (clip-path) обаче НЕ могат: Chrome включва clip-а на самия
 * елемент при изчисляването на пресечната точка, което прави
 * intersectionRatio = 0 и елементът никога не получава .is-inview —
 * остава скрит завинаги. Затова за тях проверяваме позицията ръчно.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  clip = false,
  as = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-inview");

    if (clip) {
      const onScroll = () => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.94) {
          show();
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        }
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [clip]);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`${clip ? "reveal-clip" : "reveal"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
