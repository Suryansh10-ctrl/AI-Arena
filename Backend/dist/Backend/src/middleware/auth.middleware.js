import jwt from "jsonwebtoken";
export function authUser(req, res, next) {
    console.log("========== AUTH ==========");
    console.log("Origin:", req.headers.origin);
    console.log("Cookie Header:", req.headers.cookie);
    console.log("Cookies:", req.cookies);
    let token = req.cookies?.token;
    if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    console.log("Token:", token);
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded:", decoded);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.log("JWT Error:", err.message);
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map