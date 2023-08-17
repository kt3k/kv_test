const kv = await Deno.openKv();

Deno.serve(async () => {
  await kv.set(["1"], 1)
  await kv.set(["2"], 2)
  await kv.set(["3"], 3)
  await kv.set(["branch-1"], true)
  return new Response("hi");
});
