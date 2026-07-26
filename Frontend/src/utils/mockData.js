/**
 * Mock data store & response generator for AI Arena Chat
 * Returns responses matching the required schema:
 * {
 *   problem: string,
 *   solution_1: string (markdown format),
 *   solution_2: string (markdown format),
 *   judgeResult: {
 *     solution_1_score: number,
 *     solution_2_score: number,
 *     solution_1_reasoning: string,
 *     solution_2_reasoning: string
 *   }
 * }
 */

export const PRESET_RESPONSES = {
  "factorial": {
    problem: "What is the code for factorial function in Python?",
    solution_1: `### Recursive & Iterative Approach

Here are two classic implementations of the **factorial** function in Python:

#### 1. Recursive Method
\`\`\`python
def factorial_recursive(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)
\`\`\`

#### 2. Iterative Method
\`\`\`python
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Example usage
print(factorial_iterative(5))  # Output: 120
\`\`\`

**Key Points:**
- Factorial of 0 is defined as \`1\`.
- Python's default recursion depth limit is 1000, so iterative is safer for large \`n\`.`,
    solution_2: `### Robust Solution with Input Validation

Here is an enterprise-ready factorial function with strict type checking and negative number error handling:

\`\`\`python
import math

def factorial(n: int) -> int:
    """Calculates the factorial of a non-negative integer n."""
    if not isinstance(n, int):
        raise TypeError("Input must be an integer.")
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    
    # Utilizing math.factorial for optimal C-speed computation
    return math.factorial(n)

# Example usage
try:
    print(factorial(5))    # 120
    print(factorial(-2))   # Raises ValueError
except ValueError as e:
    print(f"Error: {e}")
\`\`\`

**Key Improvements:**
- Includes explicit **Type Hinting** and docstrings.
- Raises appropriate Python exceptions for invalid inputs.
- Employs Python's built-in \`math.factorial\` which is implemented in standard C library for linear computational efficiency.`,
    judgeResult: {
      solution_1_score: 9.2,
      solution_2_score: 9.8,
      solution_1_reasoning: "Solution 1 clearly demonstrates both recursive and iterative paradigms with clean, easy-to-read Python code. However, it lacks input validation for negative numbers or floating point values.",
      solution_2_reasoning: "Solution 2 is highly production-ready: it includes type annotations, comprehensive error validation for negative inputs, and leverages Python's built-in C-optimized `math.factorial` module for optimal execution speed."
    }
  },

  "lru_cache": {
    problem: "How do I implement an LRU Cache in JavaScript?",
    solution_1: `### Using ES6 Map Class

JavaScript's built-in \`Map\` preserves key insertion order, making it an ideal choice for implementing a Least Recently Used (LRU) Cache:

\`\`\`javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    
    // Refresh key by re-inserting it
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict oldest item (first key in Map iterator)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}
\`\`\`

**Time Complexity:** O(1) average for both \`get\` and \`put\` operations.`,
    solution_2: `### Doubly Linked List + Hash Map

For a fundamental data-structures approach without relying on JS Map ordering quirks:

\`\`\`javascript
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.val;
  }

  put(key, val) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const newNode = new Node(key, val);
    this._add(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}
\`\`\`

**Pros:** Explicit memory layout and guaranteed O(1) operations irrespective of JS engine specs.`,
    judgeResult: {
      solution_1_score: 9.6,
      solution_2_score: 9.4,
      solution_1_reasoning: "Solution 1 is elegant, concise, and leverages idiomatic JavaScript ES6 Map semantics. It handles LRU eviction cleanly in under 25 lines of code.",
      solution_2_reasoning: "Solution 2 provides an excellent low-level structural implementation using a Doubly Linked List and Hash Map, which is great for computer science fundamentals, though slightly verbose for standard application code."
    }
  },

  "debounce": {
    problem: "Explain debounce function in JS with code",
    solution_1: `### Basic Debounce Implementation

A **debounce** function ensures that a given task is not triggered repeatedly until a specified delay has elapsed since the last call.

\`\`\`javascript
function debounce(func, delay) {
  let timerId;

  return function (...args) {
    const context = this;
    
    // Clear existing timer if called again within delay window
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Example usage:
const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

// Fast typing event calls:
handleSearch("A");
handleSearch("Ap");
handleSearch("App"); // Only this execution will trigger after 300ms!
\`\`\`

**Use Cases:**
- Search bar autocomplete
- Window resize listeners
- Form input validation`,
    solution_2: `### Enhanced Debounce with Immediate (Leading Edge) Option

Here is an advanced debounce function supporting both **leading** (immediate invocation) and **trailing** triggers:

\`\`\`typescript
function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, delay);

    if (callNow) func.apply(context, args);
  };
}

// Usage: Immediate execution on first click, then debounced for 500ms
const submitButton = debounce(() => {
  console.log("Form submitted!");
}, 500, true);
\`\`\`

**Highlights:**
- Fully typed with **TypeScript Generics**.
- Supports immediate execution on keydown/click for fast responsive UI feedback.`,
    judgeResult: {
      solution_1_score: 9.0,
      solution_2_score: 9.7,
      solution_1_reasoning: "Solution 1 gives a clear, minimal explanation of debounce in standard JavaScript with accurate closure management and context binding.",
      solution_2_reasoning: "Solution 2 excels by offering full TypeScript type definitions and adding leading-edge (immediate execution) support, which is vital for real-world UI button click debouncing."
    }
  }
};

/**
 * Generate a dynamic mock response for any user problem string
 */
export function generateMockResponse(problemString) {
  const queryLower = problemString.toLowerCase();
  
  if (queryLower.includes("factorial")) {
    return { ...PRESET_RESPONSES.factorial, problem: problemString };
  }
  if (queryLower.includes("lru") || queryLower.includes("cache")) {
    return { ...PRESET_RESPONSES.lru_cache, problem: problemString };
  }
  if (queryLower.includes("debounce") || queryLower.includes("throttle")) {
    return { ...PRESET_RESPONSES.debounce, problem: problemString };
  }

  // Generic dynamic fallback response matching exact schema
  return {
    problem: problemString,
    solution_1: `### Standard Solution

Here is a clean, standard approach to solve: **"${problemString}"**

\`\`\`javascript
/**
 * Solution 1: Standard & Functional
 */
function solveProblem(input) {
  if (!input) return null;

  // Transform input efficiently
  const data = Array.isArray(input)
    ? input.filter(Boolean).map(item => String(item).toUpperCase())
    : String(input).trim();

  return {
    success: true,
    result: data,
    processedAt: new Date().toISOString()
  };
}

// Test call
console.log(solveProblem(["hello", "world", null]));
\`\`\`

#### Key Highlights
- **Performance:** Single-pass processing with O(N) time complexity.
- **Maintainability:** Clear code layout leveraging functional JavaScript primitives.`,
    solution_2: `### Robust & Asynchronous Solution

Here is an alternate high-reliability implementation featuring asynchronous handling and fault tolerance:

\`\`\`javascript
/**
 * Solution 2: Asynchronous & Resilient
 */
async function solveProblemAsync(input, options = {}) {
  const { timeout = 5000, maxRetries = 3 } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await Promise.race([
        processData(input),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Request timed out")), timeout)
        )
      ]);
      return { ok: true, data: response };
    } catch (err) {
      if (attempt === maxRetries) throw err;
      await new Promise(res => setTimeout(res, attempt * 400));
    }
  }
}
\`\`\`

#### Key Highlights
- **Resilience:** Automatic retry loop with exponential backoff.
- **Safety:** Guards against unhandled promises and network latency.`,
    judgeResult: {
      solution_1_score: 8.9,
      solution_2_score: 9.7,
      solution_1_reasoning: "Solution 1 provides a concise, synchronous solution ideal for simple in-memory data processing.",
      solution_2_reasoning: "Solution 2 is optimal for production applications because it adds asynchronous streaming, explicit timeout control, and retry capabilities."
    }
  };
}
