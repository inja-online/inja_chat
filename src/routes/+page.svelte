<script lang="ts">
	let count = $state(0);
	let message = $state('Welcome to InjaChat!');

	function increment() {
		count += 1;
	}

	let displayMessage = $derived(`${message} You've clicked ${count} times.`);
</script>

<svelte:head>
    <title>Inja Chat - Coming Soon</title>
    <meta name="description" content="Inja Chat - Coming Soon" />
</svelte:head>

<main
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4"
>
    <div class="text-center">
        <h1 class="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
            Inja Chat
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-8">Coming Soon</p>
        <div class="inline-block px-6 py-3 bg-white rounded-full shadow-lg">
            <p class="text-lg text-gray-700">
                a try for <a href="https://cloneathon.t3.chat" target="_blank">cloneathon.t3.chat</a> from <span class="font-semibold"
                    >
                    <a href="https://a15d.at" target="_blank">Alireza</a>
                    + 
                    <a href="https://mamad.dev" target="_blank">Mamad</a>
                    </span
                >
            </p>
        </div>

        <div class="mt-12 space-y-6">
            

            <script>
                let progressItems = [
                    { text: "Create repo", completed: true },
                    { text: "Connect to Cloudflare", completed: true },
                    { text: "CI/CD", completed: true },
                    { text: "Design landing page", completed: false },
                    { text: "Develop core features", completed: false },
                ];
            </script>

            <div
                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto"
            >
                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                    Progress
                </h3>
                <ul class="text-left space-y-2 text-gray-600 flex flex-col">
                    {#each progressItems as item}
                        <li class="flex items-center">
                            <span
                                class:text-green-500={item.completed}
                                class:text-yellow-500={!item.completed}
                                class="mr-2"
                            >
                                {item.completed ? "✓" : "●"}
                            </span>
                            {item.text}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</main>

<div class="max-w-4xl mx-auto text-center space-y-8">
	<h1 class="text-4xl font-bold text-gradient">
		{message}
	</h1>

	<p class="text-lg text-neutral-600">
		Advanced Client-First AI Chat Platform built with SvelteKit 5 and Tailwind CSS v4
	</p>

	<div class="space-y-4">
		<p class="text-xl">{displayMessage}</p>
		
		<button 
			onclick={increment}
			class="chat-button primary"
		>
			Click me!
		</button>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
		<div class="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm">
			<h3 class="text-lg font-semibold mb-2">🚀 Client-First Architecture</h3>
			<p class="text-neutral-600">Optimized for performance with offline capabilities and edge computing.</p>
		</div>
		
		<div class="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm">
			<h3 class="text-lg font-semibold mb-2">🤖 Advanced LLM Integration</h3>
			<p class="text-neutral-600">Support for multiple AI models with streaming responses and context management.</p>
		</div>
		
		<div class="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm">
			<h3 class="text-lg font-semibold mb-2">🎨 Modern UI/UX</h3>
			<p class="text-neutral-600">Beautiful interface with Tailwind CSS v4 and custom animations.</p>
		</div>
	</div>
</div>
