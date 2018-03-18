export const ERROR_NO_CONNECTION = ["Gagal terhubung ke server. Cek koneksimu dan refresh halaman ini."];
export const RESPONSE_SUCCESS = "SUCCESS";
export const RESPONSE_ERROR = "ERROR";
export const RESPONSE_ERROR_CONNECTION = { status: RESPONSE_ERROR, errors: ERROR_NO_CONNECTION };

const stringifyPrimitive = (v) => {
    switch (typeof v) {
    case "string": return v;
    case "boolean": return v ? "true" : "false";
    case "number": return isFinite(v) ? v : "";
    default: return "";
    }
};

const stringify = (obj, sep, eq, name) => {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) {
        obj = undefined;
    }

    if (typeof obj === "object") {
        return Object.keys(obj).map(function(k) {
            const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
            if (Array.isArray(obj[k])) {
                return obj[k].map(function(v) {
                    return ks + encodeURIComponent(stringifyPrimitive(v));
                }).join(sep);
            } else {
                return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
        }).join(sep);
    }

    return (!name) ? "" : encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

export const fetchGet = (urlPath) => {
    return fetch(urlPath, {credentials: "include"})
        .then(response => {
            return (response.ok) ? response.json() : Promise.reject(new Error("error"));
        })
        .catch(error => {
            return Promise.reject(new Error(error));
        });
};

export const fetchPost = (urlPath, params, contentType, emptyResponse = false) => {
    let requestBody = stringify(params);
    let requestHeaders = {"Content-Type": "application/x-www-form-urlencoded"};

    if (contentType === "json") {
        requestBody = JSON.stringify(params);
        requestHeaders = {"Content-Type": "application/json"};
    }

    return fetch(urlPath, {
        credentials: "include",
        headers: requestHeaders,
        body: requestBody,
        method: "POST"
    })
        .then(response => {
            if (emptyResponse) {
                return (response.ok) ? response : Promise.reject(new Error("error"));
            }
            return (response.ok) ? response.json() : Promise.reject(new Error("error"));
        })
        .catch(error => {
            return Promise.reject(new Error(error));
        });
};