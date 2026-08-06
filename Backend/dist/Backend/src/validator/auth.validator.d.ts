declare const validateRequest: (req: any, res: any, next: any) => any;
declare const registerValidator: (import("express-validator").ValidationChain | typeof validateRequest)[];
declare const loginValidator: (import("express-validator").ValidationChain | typeof validateRequest)[];
export { registerValidator, loginValidator };
//# sourceMappingURL=auth.validator.d.ts.map