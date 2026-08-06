import mongoose from "mongoose";
declare const userModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    email: string;
    password?: string | null;
    googleId?: string | null;
    avatar?: string | null;
    role: "admin" | "user";
    savedQueries: string[];
    lastLoginAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default userModel;
//# sourceMappingURL=user.model.d.ts.map