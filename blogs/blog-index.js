const blogs = [
  {
    "title": "The Map That No Longer Leads Home: Breaking Free from Outdated Dreams",
    "date": "Jul 17 2025",
    "href": "blogs/The-Map-That-No-Longer-Leads-Home.html"
  },
  {
    "title": "Installing Windows: A Complete Step-by-Step Guide",
    "date": "Jul 5 2025",
    "href": "blogs/installing-windows-step-by-step.html"
  },
  {
    "title": "Gemini CLI: The Free AI Agent That Actually Codes",
    "date": "Jun 28 2025",
    "href": "blogs/gemini-cli-the-free-ai-agent-that-actually-codes.html"
  },
  {
    "title": "The Sieve of Eratosthenes: The Ancient Algorithm Behind Modern Primes",
    "date": "Jun 20 2025",
    "href": "blogs/sieve-of-eratosthenes-prime-algorithm.html"
  },
  {
    "title": "C++ Maps: The Hidden Power of Automatic Initialization",
    "date": "Jun 8 2025",
    "href": "blogs/cpp-maps-the-hidden-power-of-automatic-initialization.html"
  },
  {
    "title": "Optimizing Factor Finding: The Square Root Symmetry Trick",
    "date": "Jun 6 2025",
    "href": "blogs/optimizing-factor-finding-the-square-root-symmetry-trick.html"
  },
  {
    "title": "The Hidden Input Order Bug",
    "date": "Jun 6 2025",
    "href": "blogs/the-hidden-input-order-bug.html"
  },
  {
    "title": "macOS GCC Setup: Fixing bits/stdc++.h",
    "date": "Jun 1 2025",
    "href": "blogs/macos-gcc-setup-fixing-bits-stdc++.html"
  }
];

const list = document.getElementById("blog-list");

blogs.forEach(({ title, date, href }) => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = href;
  a.textContent = title;

  const span = document.createElement("span");
  span.className = "blog-meta";
  span.textContent = date;

  li.appendChild(a);
  li.appendChild(span);
  list.appendChild(li);
});
