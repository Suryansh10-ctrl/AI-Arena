(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/get-me', {
            method: 'GET',
            headers: { Origin: 'http://localhost:5173' },
            credentials: 'include'
        });
        console.log('status', res.status);
        for (const [k, v] of res.headers)
            console.log(k + ':', v);
        const body = await res.text();
        console.log('body:', body);
    }
    catch (err) {
        console.error('error:', err.message || err);
        process.exit(1);
    }
})();
export {};
//# sourceMappingURL=test_cors.js.map