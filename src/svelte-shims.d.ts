declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
      "bind:blur"?: () => void;
      "bind:focus"?: () => any;
    }
  }
  