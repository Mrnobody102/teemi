export interface StorageObjectRef {
  readonly key: string;
}

export interface SignedStorageUrl {
  readonly url: string;
  readonly expiresAt: Date;
}

export interface PutObjectOptions {
  readonly contentType: "image/jpeg" | "image/png";
  readonly contentLengthBytes: number;
}

export interface StorageObjectMetadata {
  readonly exists: boolean;
  readonly contentLengthBytes: number | null;
  readonly updatedAt: Date | null;
}

/**
 * Interface thuần cho media storage.
 *
 * R2 chỉ là provider đầu tiên. Nếu phải chuyển máy chủ/storage về VN, phần app
 * chỉ đổi implementation phía sau interface này.
 */
export interface StorageAdapter {
  createSignedPutUrl(ref: StorageObjectRef, options: PutObjectOptions): Promise<SignedStorageUrl>;
  createSignedGetUrl(ref: StorageObjectRef, ttlSeconds: number): Promise<SignedStorageUrl>;
  headObject(ref: StorageObjectRef): Promise<StorageObjectMetadata>;
  deleteObject(ref: StorageObjectRef): Promise<void>;
}
