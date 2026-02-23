export type WixDataItem = {
  _id?: string;
  _createdDate?: Date;
  _updatedDate?: Date;
};

export type QueryResult<T> = {
  items: T[];
  totalCount: number;
};
