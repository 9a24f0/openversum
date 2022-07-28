<script lang="ts">
	import { interpolateString as interpolate } from 'd3-interpolate';

	import { onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const P1 =
		'M132.9 -125C193.4 -107.5 278.4 -85.8 325.3 -26.8C372.2 32.3 380.9 128.6 334.5 178C288 227.4 186.2 229.7 96 261.6C5.8 293.5 -72.9 354.9 -120 335.3C-167.1 315.7 -182.7 215.1 -229.7 133C-276.7 50.9 -355 -12.8 -353.4 -69.4C-351.9 -126 -270.4 -175.6 -198.2 -191C-126 -206.5 -63 -187.7 -13.4 -171.7C36.2 -155.8 72.3 -142.5 132.9 -125';
	const P2 =
		'M218.2 -245C276.9 -210.7 314.7 -136.4 339.8 -51.4C364.9 33.6 377.3 129.3 330.1 171.4C283 213.6 176.2 202.2 101.6 191.1C27 180 -15.3 169.3 -86.7 172C-158 174.7 -258.3 190.9 -304.8 154.5C-351.3 118.2 -344 29.4 -316.2 -43.1C-288.4 -115.7 -240 -172 -183.8 -206.8C-127.7 -241.5 -63.9 -254.8 7.9 -264.2C79.7 -273.7 159.4 -279.3 218.2 -245';
	const P3 =
		'M190 -237.1C235.1 -188.5 253 -118.1 264.8 -47.2C276.7 23.7 282.5 95.1 250.8 139.7C219 184.4 149.6 202.3 83.3 224.7C17 247.1 -46.2 273.9 -110 266.3C-173.7 258.6 -238 216.6 -281.3 155.6C-324.6 94.6 -346.9 14.8 -328.6 -52.5C-310.3 -119.8 -251.2 -174.4 -189.7 -220.1C-128.1 -265.7 -64.1 -302.3 4.2 -307.3C72.4 -312.3 144.8 -285.6 190 -237.1';
	const duration = 3000;
	const path = tweened(P1, {
		duration: duration,
		easing: linear,
		interpolate: interpolate
	});

	const animateOnce = () => {
		path.set(P2);
		setTimeout(() => {
			path.set(P3);
			setTimeout(() => path.set(P1), duration);
		}, duration);
	};
	animateOnce();
	let intervalId = setInterval(animateOnce, 3 * duration);

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
