<script lang="ts">
	import { t } from '$lib/translations';
	export let color = '#76D0CD';
</script>

<button class="hover:" on:click>
	<div class="flex">
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_28_650)">
				<path
					d="M15 29.25C22.8701 29.25 29.25 22.8701 29.25 15C29.25 7.12994 22.8701 0.75 15 0.75C7.12994 0.75 0.75 7.12994 0.75 15C0.75 22.8701 7.12994 29.25 15 29.25Z"
					stroke={color}
					stroke-width="1.5"
				/>
				<mask
					id="mask0_28_650"
					style="mask-type:luminance"
					maskUnits="userSpaceOnUse"
					x="11"
					y="8"
					width="10"
					height="14"
				>
					<path d="M20.8651 8.28003H11.5281V21.72H20.8651V8.28003Z" fill="white" />
				</mask>
				<g mask="url(#mask0_28_650)">
					<path
						d="M11.5281 21.219V8.78003C11.5281 8.68717 11.5539 8.59615 11.6028 8.51716C11.6516 8.43818 11.7214 8.37434 11.8045 8.33282C11.8875 8.29129 11.9805 8.27371 12.073 8.28205C12.1655 8.29039 12.2538 8.32432 12.3281 8.38003L20.6641 14.599C20.7262 14.6456 20.7766 14.706 20.8113 14.7754C20.846 14.8449 20.8641 14.9214 20.8641 14.999C20.8641 15.0767 20.846 15.1532 20.8113 15.2226C20.7766 15.2921 20.7262 15.3525 20.6641 15.399L12.3281 21.62C12.2538 21.6757 12.1655 21.7097 12.073 21.718C11.9805 21.7263 11.8875 21.7088 11.8045 21.6672C11.7214 21.6257 11.6516 21.5619 11.6028 21.4829C11.5539 21.4039 11.5281 21.3119 11.5281 21.219Z"
						fill={color}
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_28_650">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
		<span class="whitespace-nowrap mr-8 ml-2 font-semibold my-auto">{$t('common.watchVideo')}</span>
	</div>
</button>
