<script lang="ts">
    interface Props {
        img: any,
        alt: string,
        text: string
        padding?: string,
        imgSize?: string
    }

    let { img, alt, text, padding = "", imgSize = ""}: Props = $props();
</script>

<!-- <div class="outline mx-auto flex flex-col flex-1 {padding}">
    <enhanced:img class="outline mx-auto object-scale-down min-h-0 min-w-0 {imgSize} w-min" 
        src={img} alt={alt} />
    <p class="outline mx-auto text-center text-sm italic">{text}</p>
</div> -->

<figure class="mx-auto {padding} table">
    <enhanced:img class="mx-auto object-scale-down min-h-0 min-w-0 {imgSize} w-min" 
        src={img} alt={alt} />
    <figcaption class="table-caption caption-bottom text-center text-sm italic">{@html text}</figcaption>
</figure>
