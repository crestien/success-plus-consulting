"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import type MiniSearchType from "minisearch";

type Doc = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  body: string;
};
type Hit = { doc: Doc; terms: string[] };

const SNIPPET = 170;

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const termRe = (terms: string[], capture: boolean) => {
  const alt = terms.map(escapeRe).join("|");
  return new RegExp(
    `(?<![\\p{L}\\p{N}])${capture ? `(${alt})` : `(?:${alt})`}(?![\\p{L}\\p{N}])`,
    capture ? "giu" : "iu",
  );
};

/** Wraps matched terms in <mark>. Built as React nodes, never raw HTML. */
function highlight(text: string, terms: string[]): ReactNode {
  if (!terms.length) return text;
  return text.split(termRe(terms, true)).map((part, i) =>
    i % 2 ? (
      <mark key={i} className="rounded-[2px] bg-gold/60 px-0.5 text-ink">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

/** A window of body text around the first matched term. */
function snippet(doc: Doc, terms: string[]): string {
  const body = doc.body;
  const at = terms.length ? body.search(termRe(terms, false)) : -1;
  if (at < 0) return doc.excerpt || body.slice(0, SNIPPET);
  let start = Math.max(0, at - 60);
  if (start > 0) start = body.indexOf(" ", start) + 1 || start;
  let end = Math.min(body.length, start + SNIPPET);
  if (end < body.length) {
    const sp = body.lastIndexOf(" ", end);
    if (sp > start) end = sp;
  }
  return `${start > 0 ? "…" : ""}${body.slice(start, end)}${end < body.length ? "…" : ""}`;
}

const dateFmt = (iso: string) =>
  iso
    ? new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      })
    : "";

const linkBtn =
  "font-medium text-navy underline decoration-gold decoration-2 underline-offset-4";

/**
 * Search box + results for the blog. The index (/blog/search-index.json) and
 * MiniSearch are only downloaded the first time the box is focused or used.
 * While a query is active the normal article listing (children) is hidden.
 */
export function BlogSearch({ children }: { children: ReactNode }) {
  const router = useRouter();
  const uid = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const engine = useRef<MiniSearchType<Doc> | null>(null);
  const loading = useRef<Promise<void> | null>(null);
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );
  const [active, setActive] = useState(0);

  const load = useCallback(() => {
    if (loading.current) return loading.current;
    setState("loading");
    loading.current = (async () => {
      try {
        const [{ default: MiniSearch }, res] = await Promise.all([
          import("minisearch"),
          fetch("/blog/search-index.json"),
        ]);
        if (!res.ok) throw new Error(String(res.status));
        const docs: Doc[] = await res.json();
        const ms = new MiniSearch<Doc>({
          fields: ["title", "tags", "excerpt", "body"],
          storeFields: ["title", "excerpt", "tags", "date", "body"],
          searchOptions: {
            boost: { title: 4, tags: 2, excerpt: 2 },
            prefix: true,
            fuzzy: 0.2,
          },
        });
        ms.addAll(docs);
        engine.current = ms;
        setState("ready");
      } catch {
        loading.current = null;
        setState("error");
      }
    })();
    return loading.current;
  }, []);

  // "/" focuses search from anywhere on the page (unless typing in a field).
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (
        t &&
        (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
      )
        return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim();
  const hits: Hit[] = useMemo(() => {
    if (!q || state !== "ready" || !engine.current) return [];
    const ms = engine.current;
    // Prefer posts containing every word; fall back to any word.
    let res = ms.search(q, { combineWith: "AND" });
    if (!res.length) res = ms.search(q, { combineWith: "OR" });
    return res.slice(0, 20).map((r) => ({
      doc: {
        id: r.id,
        title: r.title,
        excerpt: r.excerpt,
        tags: r.tags,
        date: r.date,
        body: r.body,
      } as Doc,
      terms: r.terms,
    }));
  }, [q, state]);

  useEffect(() => setActive(0), [q]);
  useEffect(() => {
    document
      .getElementById(`${uid}-opt-${active}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, uid]);

  const open = (hit: Hit) => router.push(`/blog/${hit.doc.id}`);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && hits.length) {
      e.preventDefault();
      setActive((a) => (a + 1) % hits.length);
    } else if (e.key === "ArrowUp" && hits.length) {
      e.preventDefault();
      setActive((a) => (a - 1 + hits.length) % hits.length);
    } else if (e.key === "Enter" && hits[active]) {
      e.preventDefault();
      open(hits[active]);
    } else if (e.key === "Escape" && query) {
      e.preventDefault();
      setQuery("");
    }
  };

  const listId = `${uid}-results`;
  const status = !q
    ? ""
    : state === "error"
      ? "Search is unavailable right now."
      : state !== "ready"
        ? "Loading search…"
        : hits.length
          ? `${hits.length} ${hits.length === 1 ? "article" : "articles"} found.`
          : `No articles match “${q}”.`;

  return (
    <>
      <div className="bg-cream">
        <div className="container-x relative z-10 -translate-y-7">
          <form
            role="search"
            aria-label="Search articles"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto max-w-2xl"
          >
            <label htmlFor={`${uid}-input`} className="sr-only">
              Search articles
            </label>
            <div className="relative">
              <Search
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-navy-light"
              />
              <input
                ref={inputRef}
                id={`${uid}-input`}
                type="search"
                role="combobox"
                aria-expanded={!!q && hits.length > 0}
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={
                  hits.length ? `${uid}-opt-${active}` : undefined
                }
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="search"
                placeholder="Search articles…"
                value={query}
                onFocus={() => void load()}
                onChange={(e) => {
                  setQuery(e.target.value);
                  void load();
                }}
                onKeyDown={onKeyDown}
                className="field h-14 rounded-full border-navy/15 bg-white pr-24 pl-14 shadow-[0_18px_40px_-20px_rgb(20_21_47/0.45)] [&::-webkit-search-cancel-button]:hidden"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="absolute top-1/2 right-4 grid size-9 -translate-y-1/2 place-items-center rounded-full text-navy hover:bg-navy/5"
                  aria-label="Clear search"
                >
                  <X aria-hidden className="size-5" />
                </button>
              ) : (
                <kbd
                  aria-hidden
                  className="absolute top-1/2 right-5 hidden -translate-y-1/2 rounded border border-navy/15 px-2 py-0.5 text-xs font-semibold text-navy-light sm:block"
                >
                  /
                </kbd>
              )}
            </div>
            <p role="status" aria-live="polite" className="sr-only">
              {status}
            </p>
          </form>
        </div>
      </div>

      {q ? (
        <section
          className="bg-cream py-12 sm:py-16"
          aria-label="Search results"
        >
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <p aria-hidden className="eyebrow mb-6 text-navy-light">
                {state === "ready"
                  ? hits.length
                    ? `${hits.length} ${hits.length === 1 ? "result" : "results"}`
                    : "No results"
                  : state === "error"
                    ? "Search unavailable"
                    : "Searching…"}
              </p>
              {state === "ready" && !hits.length && (
                <p className="text-lg text-muted-foreground">
                  Nothing matched “{q}”. Try fewer or different words, or{" "}
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className={linkBtn}
                  >
                    browse all articles
                  </button>
                  .
                </p>
              )}
              {state === "error" && (
                <p className="text-lg text-muted-foreground">
                  We couldn’t load search.{" "}
                  <button
                    type="button"
                    onClick={() => void load()}
                    className={linkBtn}
                  >
                    Try again
                  </button>
                  .
                </p>
              )}
              <ul
                id={listId}
                role="listbox"
                aria-label="Search results"
                className="divide-y divide-navy/10 border-y border-navy/10 empty:hidden"
              >
                {hits.map((hit, i) => (
                  <li
                    key={hit.doc.id}
                    id={`${uid}-opt-${i}`}
                    role="option"
                    aria-selected={i === active}
                    onMouseMove={() => i !== active && setActive(i)}
                    onClick={() => open(hit)}
                    className={`relative cursor-pointer px-4 py-6 transition-colors sm:px-6 ${i === active ? "bg-white" : ""}`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-y-0 left-0 w-1 bg-gold transition-opacity ${i === active ? "opacity-100" : "opacity-0"}`}
                    />
                    <p className="text-xs font-semibold tracking-[0.14em] text-navy-light uppercase">
                      {[hit.doc.tags[0], dateFmt(hit.doc.date)]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    <h3 className="font-display mt-2 text-xl leading-snug font-medium text-ink sm:text-2xl">
                      {highlight(hit.doc.title, hit.terms)}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {highlight(snippet(hit.doc, hit.terms), hit.terms)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        children
      )}
    </>
  );
}
