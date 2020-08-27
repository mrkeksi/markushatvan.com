<script>
  export let href: string;
  export let title: string | undefined = undefined;
  export let customClass: string = '';
  export let ariaLabel: string | undefined = undefined;
  export let rel: string = '';
  export let isAffiliateLink: boolean = false;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer {rel}"
  class="cursor-pointer {customClass}"
  {title}
  aria-label="{ariaLabel}"
>
  <slot />
  {isAffiliateLink ? '*' : ''}
</a>
