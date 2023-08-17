const kv = await Deno.openKv();

Deno.serve(async () => {
  await kv.set(["1"], 1)
  return new Response("hi");
});
