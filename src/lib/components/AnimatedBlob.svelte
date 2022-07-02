<script lang="ts">
	import { interpolateString as interpolate } from 'd3-interpolate';

	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const P1 =
		'M132.9 -125C193.4 -107.5 278.4 -85.8 325.3 -26.8C372.2 32.3 380.9 128.6 334.5 178C288 227.4 186.2 229.7 96 261.6C5.8 293.5 -72.9 354.9 -120 335.3C-167.1 315.7 -182.7 215.1 -229.7 133C-276.7 50.9 -355 -12.8 -353.4 -69.4C-351.9 -126 -270.4 -175.6 -198.2 -191C-126 -206.5 -63 -187.7 -13.4 -171.7C36.2 -155.8 72.3 -142.5 132.9 -125';
	const P2 =
		'M218.2 -245C276.9 -210.7 314.7 -136.4 339.8 -51.4C364.9 33.6 377.3 129.3 330.1 171.4C283 213.6 176.2 202.2 101.6 191.1C27 180 -15.3 169.3 -86.7 172C-158 174.7 -258.3 190.9 -304.8 154.5C-351.3 118.2 -344 29.4 -316.2 -43.1C-288.4 -115.7 -240 -172 -183.8 -206.8C-127.7 -241.5 -63.9 -254.8 7.9 -264.2C79.7 -273.7 159.4 -279.3 218.2 -245';
	const duration = 6000;
	const path = tweened(P1, {
		duration: duration,
		easing: linear,
		interpolate: interpolate
	});

	const animateOnce = () => {
		path.set(P2);
		setTimeout(() => path.set(P1), duration);
	};
	animateOnce();
	let intervalId = setInterval(animateOnce, 2 * duration);

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<svg
	id="visual"
	viewBox="0 0 900 600"
	class="w-full h-full overflow-visible -z-10"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
>
	<g transform="translate(444.10826415830815 228.8524952525583)"
		><path id="blob1" d={$path} fill="url(#paint0_linear_1)" fill-opacity="0.88" />
	</g>

	<defs>
		<linearGradient
			id="paint0_linear_1"
			x1="155.9578"
			y1="626.197"
			x2="520.6108"
			y2="-45.7976"
			gradientUnits="userSpaceOnUse"
			gradientTransform="rotate(15)"
		>
			<stop stop-color="#C3F46A" />
			<stop offset="0.46875" stop-color="#3298C8" />
			<stop offset="0.760417" stop-color="#056B41" stop-opacity="0.76" />
			<stop offset="1" stop-color="#AEF9D2" />
		</linearGradient>
	</defs>
</svg>
