import https from "node:https";

type HttpsJsonResponse = {
  status: number;
  data: unknown;
  raw: string;
};

export function postJsonHttps(url: string, payload: unknown): Promise<HttpsJsonResponse> {
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    const parsed = new URL(url);

    const request = https.request(
      {
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (response) => {
        let raw = "";
        response.on("data", (chunk: Buffer | string) => {
          raw += chunk.toString();
        });
        response.on("end", () => {
          try {
            resolve({
              status: response.statusCode ?? 0,
              data: JSON.parse(raw),
              raw,
            });
          } catch {
            resolve({
              status: response.statusCode ?? 0,
              data: null,
              raw,
            });
          }
        });
      },
    );

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}
