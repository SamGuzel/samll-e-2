export async function GET(request: Request) {
  const response = await fetch(
    "http://127.0.0.1:7071/api/getChatGPTSuggestion",
    {
      cache: "no-cache",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
