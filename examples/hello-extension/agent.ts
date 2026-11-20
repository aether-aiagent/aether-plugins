// Minimal Aether extension: one tool + one chat command.
// Aether is an open-source AI agent for Android; extensions run in its Node runtime.
export default function helloExtension(api: any) {
  api.registerTool({
    name: "hello_device",
    description: "Say hello from an Aether extension and report the device model.",
    parameters: { type: "object", properties: {} },
    async execute() {
      return { ok: true, message: "Hello from an Aether extension on this Android device." };
    },
  });

  api.registerCommand?.("hello", async () => "Aether extension says hello.");
}
