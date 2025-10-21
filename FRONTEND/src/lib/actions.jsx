
// src/lib/actions.js
const COMPANY_PHONE_INTL = "919028251272"; // 91 + 9028251272 (no +, spaces, or dashes)
const COMPANY_EMAIL = "hello.xpertuse@gmail.com";

export const scrollToSection = (sectionId, cb) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  cb?.();
};


export function handleWhatsApp(text = "Hi!") {
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${COMPANY_PHONE_INTL}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function handleEmail(
  body = "Hi!",
  subject = "New inquiry"
) {
  const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

export function handleCall() {
  window.location.href = `tel:+${COMPANY_PHONE_INTL}`;
}

export const scrollToSectionAlt = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};