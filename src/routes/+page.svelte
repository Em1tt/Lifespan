<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { calculateAge, daysUntilNextBirthday } from '../lib/lib';

	const daysUntilBirthday = daysUntilNextBirthday('2005-09-23');
	const age = calculateAge('2005-09-23');

	const startDate = Date.parse('2005-09-23');
	const endDate = Date.parse('2105-09-23');
    const avgLifespanDate = Date.parse('2083-09-23');
	let currentDate = $state(Date.now());

	let percentage = $derived(((currentDate - startDate) / (endDate - startDate)) * 100);

	let percentageToLifespan = $derived(((currentDate - startDate) / (avgLifespanDate - startDate)) * 100);

	// Function to map percentage to gradient colors
	function mapPercentageToColor(percent: number): string {
		// Clamp percentage between 0 and 100
		const clampedPercent = Math.max(0, Math.min(100, percent));
		
		if (clampedPercent <= 50) {
			// Green to Yellow (0% to 50%)
			const ratio = clampedPercent / 50;
			const red = Math.round(34 + (251 - 34) * ratio);    // Green(34) -> Yellow(251)
			const green = Math.round(197 + (191 - 197) * ratio); // Green(197) -> Yellow(191) 
			const blue = Math.round(94 + (36 - 94) * ratio);     // Green(94) -> Yellow(36)
			return `rgb(${red}, ${green}, ${blue})`;
		} else {
			// Yellow to Red (50% to 100%)
			const ratio = (clampedPercent - 50) / 50;
			const red = Math.round(251 + (239 - 251) * ratio);   // Yellow(251) -> Red(239)
			const green = Math.round(191 + (68 - 191) * ratio);  // Yellow(191) -> Red(68)
			const blue = Math.round(36 + (68 - 36) * ratio);     // Yellow(36) -> Red(68)
			return `rgb(${red}, ${green}, ${blue})`;
		}
	}

	// Get the current color based on life percentage
	let currentLifeColor = $derived(mapPercentageToColor(percentageToLifespan));

    let interval = setInterval(() => {
        currentDate = Date.now();
    }, 100);

	onMount(() => {

		const testDiv = document.getElementById('test');
		const avgLifeSpan = document.getElementById('avgLifeSpan');
		if (testDiv) {
			testDiv.style = `width: ${100 - percentage}%; transition: width 1s ease-in-out;`;
		}
		if (avgLifeSpan) {
			avgLifeSpan.style = `left: calc(78.0170731707317% - 52.65px);`;
		}
	});

    onDestroy(() => {
        clearInterval(interval);
    })
</script>

<div class="w-screen h-screen grid place-items-center px-12 md:px-32 bg-gradient-to-br from-slate-800 to-slate-900">
	<h1 class="coiny text-4xl sm:text-5xl md:text-6xl text-slate-200 text-shadow-2xs text-stroke">
		Richard's lifespan calculator
	</h1>
	<div class="w-full h-fit relative">
		<div class="-left-10 -top-16 absolute flex flex-col">
			<p class="coiny text-slate-100 text-nowrap">23. 9. 2005</p>
			<div class="border-l-3 border-dashed border-slate-200 h-8 w-1/2 ml-auto"></div>
		</div>
		<div class="-right-10 -top-16 absolute flex flex-col">
			<p class="coiny text-slate-100 text-nowrap">23. 9. 2105</p>
			<div class="border-r-3 border-dashed border-slate-200 h-8 w-1/2 mr-auto"></div>
		</div>
		<div id="avgLifeSpan" class="-top-22 md:-top-16 absolute flex flex-col">
			<p class="coiny text-slate-100 text-nowrap">Avg. lifespan</p>
			<div class="border-r-3 border-dashed border-slate-200 h-14 md:h-8 w-1/2 mr-auto"></div>
		</div>
		<div
			class="w-full h-20 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg shadow-lg overflow-hidden relative"
		>
			<!-- Animated diagonal stripes -->
			<div class="absolute inset-0 diagonal-stripes"></div>
			<!-- Progress indicator showing current life stage -->
			<div 
				class="absolute left-0 top-0 h-full rounded-lg transition-all duration-1000 ease-out z-5"
				style="width: {percentageToLifespan}%; background-color: {currentLifeColor}; opacity: 0.3;"
			></div>
			<div id="test" class="h-full bg-slate-700 ml-auto relative z-10"></div>
		</div>
	</div>
	<div class="mt-6 text-center space-y-2">
        <p class="coiny text-lg text-slate-200 text-shadow-2xs md:hidden">
			Richard is <span style="color: {currentLifeColor}">{percentageToLifespan.toFixed(10)}%</span> done with life according to the average lifespan in Slovakia.
		</p>
		<p class="coiny text-lg text-slate-200 text-shadow-2xs hidden md:block">
			Richard is <span style="color: {currentLifeColor}">{percentageToLifespan.toFixed(14)}%</span> done with life according to the average lifespan in Slovakia.
		</p>
        <p class="coiny text-lg text-slate-200 text-shadow-2xs">
			{#if daysUntilBirthday == 0}
            Richard's birthday is TODAY!!! 🎉🎉🎉
            {:else}
            Richard's birthday is in <span class="text-green-400">{daysUntilBirthday} days</span>.
            {/if}
		</p>
        <p class="coiny text-lg text-slate-200 text-shadow-2xs">
			Richard is <span class="text-green-400">{age} years old</span>.
		</p>
	</div>
</div>

<style>
	.text-stroke {
		-webkit-text-stroke: 1px #f1f5f9;
	}

	.diagonal-stripes {
		background: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 10px,
			rgba(255, 255, 255, 0.08) 10px,
			rgba(255, 255, 255, 0.08) 20px
		);
		animation: moveStripes 3s linear infinite;
	}

	@keyframes moveStripes {
		0% {
			transform: translateX(-28px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
