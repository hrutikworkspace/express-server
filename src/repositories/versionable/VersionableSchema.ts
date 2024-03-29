import * as mongoose from "mongoose";

class VersionableSchema extends mongoose.Schema {
  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign(
      {
        createdAt: {
          default: Date.now,
          type: Date,
        },
        deletedAt: {
          required: false,
          type: Date,
        },
        OriginalId: {
          required: true,
          type: String,
        },
      },
      options
    );
    super(versionedOptions, collections);
  }
}
export default VersionableSchema;
