<!-- +page.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let visible = false;

	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}
</script>

<main style="margin-bottom: 50em;">
	{#if !visible}
		<div class="party-button">
			<input
				class="btn btn-primary"
				type="checkbox"
				bind:checked={visible}
				aria-label="Click Here 2 Party 🥳"
			/>
		</div>
	{:else}
	<div class="party-button">
		<input
			class="btn btn-primary"
			type="checkbox"
			bind:checked={visible}
			aria-label="Click Here 2 End Party 😔"
		/>
	</div>
	{/if}

	{#if visible}
		<div class="content-center text-center marqueeDiv">
			<h1 class="text-3xl font-bold underline">
				<marquee class="underline">Howdy Pardner!</marquee>
			</h1>
		</div>
		<div class="centered" in:spin={{ duration: 8000 }} out:fade>
			<span>Howdy Pardner!</span>
		</div>
		<div class="centered" in:spin={{ duration: 12000 }} out:fly>
			<span>Broncos & Mustangs</span>
		</div>
		<div class="content-center text-center marqueeDiv">
			<h1 class="text-3xl font-bold underline">
				<marquee class="underline">Howdy Pardner!</marquee>
			</h1>
		</div>
	{/if}
</main>