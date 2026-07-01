import { useEffect, useState } from 'react';
import { getStorage, setStorage, STORAGE_KEYS, defaultUIPrefs, type UIPrefs } from '@/lib/storage';

type SectionId = UIPrefs['lastVisitedSection'];

const SECTION_IDS: SectionId[] = [
  'hero',
  'about',
  'metodo',
  'services',
  'projetos',
  'planos',
  'avaliacoes',
  'contato',
];

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('hero');

  useEffect(() => {
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null,
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const next = visible[0]?.target.id as SectionId | undefined;
        if (next && SECTION_IDS.includes(next)) {
          setActive(next);
          const prev = getStorage<UIPrefs>(STORAGE_KEYS.uiPrefs, defaultUIPrefs);
          setStorage<UIPrefs>(STORAGE_KEYS.uiPrefs, {
            ...prev,
            lastVisitedSection: next,
            visitedAt: new Date().toISOString(),
          });
        }
      },
      { threshold: [0.3, 0.6] },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}
