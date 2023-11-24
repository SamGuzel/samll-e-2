export async function POST(request: Request) {
  const res = await request.json();
  const prompt = res.prompt;
  const response = await fetch("api/generateImage", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
