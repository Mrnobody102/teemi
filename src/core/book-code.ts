export interface BookCodeOptions {
  readonly alphabet: string;
  readonly length: number;
}

export function generateBookCode(randomBytes: Uint8Array, options: BookCodeOptions): string {
  if (options.alphabet.length === 0 || options.length <= 0) {
    throw new Error("INVALID_BOOK_CODE_OPTIONS");
  }

  if (randomBytes.length < options.length) {
    throw new Error("NOT_ENOUGH_RANDOM_BYTES");
  }

  let code = "";
  for (let i = 0; i < options.length; i += 1) {
    const byte = randomBytes[i];
    if (byte === undefined) {
      throw new Error("NOT_ENOUGH_RANDOM_BYTES");
    }
    code += options.alphabet[byte % options.alphabet.length];
  }

  return code;
}

export function isValidBookCode(code: string, alphabet: string, length: number): boolean {
  if (code.length !== length) {
    return false;
  }

  return [...code].every((char) => alphabet.includes(char));
}

export function slugContainsCode(slug: string, code: string): boolean {
  return slug.toLocaleLowerCase("en-US").includes(code.toLocaleLowerCase("en-US"));
}
