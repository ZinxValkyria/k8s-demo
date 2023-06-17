import { IUserDocument, IUserModel } from "./users.types";

export async function findOneOrCreate(
    this: any,
    userId: string
  ): Promise<IUserDocument> {
    const record = await this.findOne({ userId });
    if (record) {
      return record;
    } else {
      return this.create({ userId });
    }
}