/** Escolha determinística: a mesma cidade recebe sempre a mesma variação. */
export function hash(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function picker(seed: string) {
  return {
    one<T>(salt: string, options: readonly T[]): T {
      return options[hash(`${seed}:${salt}`) % options.length];
    },
  };
}
