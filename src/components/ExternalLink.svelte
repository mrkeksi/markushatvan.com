<script>
  export let href: string;
  export let title: string | undefined = undefined;
  export let customClass: string = '';
  export let ariaLabel: string | undefined = undefined;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="cursor-pointer {customClass}"
  {title}
  aria-label="{ariaLabel}"
>
  <slot />
</a>
