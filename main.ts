const kv = await Deno.openKv();

Deno.serve(async () => {
  await kv.set(["1"], 1)
  await kv.set(["feat/this-branch-has-very-very-long-name"], true)
  return new Response("hi");
});
