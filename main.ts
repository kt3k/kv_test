const kv = await Deno.openKv();

Deno.serve(async () => {
  await kv.set(["1"], 1)
  await kv.set(["main"], true)
  return new Response("hi");
});
