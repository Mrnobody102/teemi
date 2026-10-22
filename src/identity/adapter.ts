export interface IdentitySession {
  readonly personId: string;
  readonly issuedAt: Date;
  readonly expiresAt: Date;
}

export interface RecoveryLinkRequest {
  readonly bookId: string;
  readonly personId: string;
}

export interface RecoveryLink {
  readonly url: string;
  readonly expiresAt: Date;
}

/**
 * Danh tính của Teemi không được chỉ dựa vào localStorage.
 *
 * MVP web có thể dùng cookie HttpOnly + mirror localStorage, nhưng recovery phải
 * đi qua một cơ chế server-side như magic link hoặc provider identity khác.
 * TODO(spec): founder cần chốt nơi lưu/nhận magic link mà không phá nguyên tắc
 * "person không lưu email/phone" của 04 §1.2.
 */
export interface IdentityAdapter {
  createSession(personId: string): Promise<IdentitySession>;
  verifySessionToken(token: string): Promise<IdentitySession | null>;
  createRecoveryLink(request: RecoveryLinkRequest): Promise<RecoveryLink>;
}
