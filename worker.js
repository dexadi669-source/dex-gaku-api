export default {
  async fetch(request) {

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({
          error: "Gunakan POST"
        }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const data = await request.json();

    return new Response(
      JSON.stringify({
        success: true,
        received: data.text
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
