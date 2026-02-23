import { QueryResult, WixDataItem } from ".";

const notConfigured = () => {
  throw new Error("CMS backend is not configured. Connect WordPress/Cafe24 API before using CMS services.");
};

export class BaseCrudService {
  static async create<T extends WixDataItem>(
    _collectionId: string,
    _itemData: Partial<T> | Record<string, unknown>,
    _multiReferences?: Record<string, any>
  ): Promise<T> {
    notConfigured();
  }

  static async getAll<T extends WixDataItem>(
    _collectionId: string,
    _includeReferencedItems?: string[]
  ): Promise<QueryResult<T>> {
    notConfigured();
  }

  static async getById<T extends WixDataItem>(
    _collectionId: string,
    _itemId: string,
    _includeReferencedItems?: string[]
  ): Promise<T | null> {
    notConfigured();
  }

  static async update<T extends WixDataItem>(
    _collectionId: string,
    _itemId: string,
    _updateData: Partial<T> | Record<string, unknown>
  ): Promise<T> {
    notConfigured();
  }

  static async delete(_collectionId: string, _itemId: string): Promise<void> {
    notConfigured();
  }
}
