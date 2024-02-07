
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

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}

	.marqueeDiv {
		width: 100%;
		margin-top: 10rem;
	}

	.party-button {
		width: 100%;
		margin-left: 40rem;
		margin-top: 5rem;
	}
</style>
