import mongoose from "mongoose";
declare const chatModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    } & mongoose.DefaultTimestampProps>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }, {}, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    user: mongoose.Types.ObjectId;
    title: string;
    messages: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }, {}, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
        problem: string;
        solution_1: string;
        solution_2: string;
        judgeResult?: {
            solution_1_score: number;
            solution_2_score: number;
            solution_1_reasoning: string;
            solution_2_reasoning: string;
        } | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default chatModel;
//# sourceMappingURL=chat.model.d.ts.map