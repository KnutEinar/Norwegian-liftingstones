<script lang="ts">
    interface Props {
        heading: string;
        body: string;
    }

    let { heading, body }: Props = $props();
</script>

<div>
    <h1>{heading}</h1>
    <p>{body}</p>
</div>