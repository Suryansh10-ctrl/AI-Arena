import { useState } from 'react';

/**
 * Enhanced Markdown renderer component for rendering solution strings.
 * Handles headings, bold, inline code, syntax-highlighted code blocks, copy code, lists, and quotes.
 */
export function MarkdownRenderer({ content, accentColor = 'cyan' }) {
  if (!content) return null;

  return (
    <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
      {renderBlocks(content, accentColor)}
    </div>
  );
}

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
      title="Copy code"
    >
      <span className="material-symbols-outlined text-[14px]">
        {copied ? 'check' : 'content_copy'}
      </span>
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}

function CodeBlock({ lang, code, accentColor }) {
  const isCyan = accentColor === 'cyan';
  const headerAccentClass = isCyan ? 'text-cyan-400 border-cyan-500/20' : 'text-purple-300 border-purple-500/20';

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-white/10 bg-[#070b10] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-white/5 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span className={`ml-2 uppercase tracking-widest text-[11px] font-semibold ${headerAccentClass}`}>
            {lang || 'code'}
          </span>
        </div>
        <CopyButton code={code} />
      </div>
      <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed">
        <code>{highlightSyntax(code)}</code>
      </pre>
    </div>
  );
}

function renderBlocks(text, accentColor) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <CodeBlock
          key={`code-${i}`}
          lang={lang}
          code={codeLines.join('\n')}
          accentColor={accentColor}
        />
      );
      i++; // skip closing ```
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-sm font-semibold text-slate-200 mt-4 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          {renderInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-base font-bold text-slate-100 mt-5 mb-2 border-b border-white/5 pb-1">
          {renderInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} className="text-lg font-bold text-white mt-6 mb-3 border-b border-white/10 pb-2">
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${i}`} className="text-xl font-extrabold text-white mt-6 mb-3">
          {renderInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={`quote-${i}`} className="pl-4 py-1 my-3 border-l-2 border-slate-500 text-slate-400 italic bg-white/[0.02] rounded-r">
          {renderInline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bullet lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listItems = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        const itemText = lines[i].trim().slice(2);
        listItems.push(
          <li key={`li-${i}`} className="flex items-start gap-2 text-slate-300 my-1">
            <span className="text-cyan-400 mt-1 text-xs">•</span>
            <span>{renderInline(itemText)}</span>
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-3 space-y-1 pl-1">
          {listItems}
        </ul>
      );
      continue;
    }

    // Numbered lists
    const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      const listItems = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)\.\s+(.*)/);
        if (!m) break;
        listItems.push(
          <li key={`nli-${i}`} className="flex items-start gap-2 text-slate-300 my-1">
            <span className="font-mono text-xs text-slate-400 font-semibold">{m[1]}.</span>
            <span>{renderInline(m[2])}</span>
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-3 space-y-1 pl-1">
          {listItems}
        </ol>
      );
      continue;
    }

    // Empty space
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={`p-${i}`} className="my-2 leading-relaxed text-slate-300">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderInline(text) {
  if (!text) return null;
  const parts = [];
  const regex = /(\*\*.*?\*\*|\*.*?\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match[0].length === 0) {
      regex.lastIndex++;
      continue;
    }
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic text-slate-200">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={match.index}
          className="font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}

function highlightSyntax(code) {
  if (!code) return null;
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => {
    // Comment line
    if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
      return (
        <div key={lineIdx} className="text-slate-500 italic">
          {line}
        </div>
      );
    }

    const tokens = tokenizeLine(line);
    return (
      <div key={lineIdx} className="min-h-[1.25rem]">
        {tokens.map((tok, tokIdx) => (
          <span key={tokIdx} className={tok.cls}>
            {tok.text}
          </span>
        ))}
      </div>
    );
  });
}

function tokenizeLine(line) {
  if (!line || line.trim() === '') {
    return [{ cls: 'text-slate-200', text: line || '' }];
  }

  const KEYWORDS = /\b(def|function|const|let|var|return|if|else|elif|for|in|while|import|from|raise|class|pass|try|except|catch|async|await|type|interface|export|default|new|this)\b/g;
  const STRINGS = /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*'|`[^`]*`)/g;
  const NUMBERS = /\b(\d+(\.\d*)?)\b/g;
  const COMMENTS = /(#.+|\/\/.+)$/g;

  const ranges = [];

  function addMatches(regex, cls) {
    // FORCE global flag so regex.exec advances lastIndex safely
    const flags = regex.flags.includes('g') ? regex.flags : regex.flags + 'g';
    const r = new RegExp(regex.source, flags);
    let m;
    let safeguard = 0;
    while ((m = r.exec(line)) !== null && safeguard < 200) {
      safeguard++;
      if (m[0].length === 0) {
        r.lastIndex++;
        continue;
      }
      ranges.push({ start: m.index, end: m.index + m[0].length, cls, text: m[0] });
    }
  }

  addMatches(STRINGS, 'text-emerald-400');
  addMatches(COMMENTS, 'text-slate-500 italic');
  addMatches(KEYWORDS, 'text-purple-400 font-semibold');
  addMatches(NUMBERS, 'text-amber-400');

  ranges.sort((a, b) => a.start - b.start || b.end - a.end);

  const merged = [];
  let cursor = 0;

  for (const r of ranges) {
    if (r.start < cursor) continue;
    if (r.start > cursor) {
      merged.push({ cls: 'text-slate-200', text: line.slice(cursor, r.start) });
    }
    merged.push(r);
    cursor = r.end;
  }
  if (cursor < line.length) {
    merged.push({ cls: 'text-slate-200', text: line.slice(cursor) });
  }

  return merged;
}
