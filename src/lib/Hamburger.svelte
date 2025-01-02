<script lang="ts">
    export let pressed:boolean;

</script>
<button class="h-10 w-12 flex flex-col justify-between p-2" on:click>
    <div class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${pressed ? "rotate-[45deg] translate-y-2.5" : ""} transition-all duration-300`}/>
    <div class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${pressed ? "opacity-0" : "opacity-100 transition-opacity duration-300 ease-in"}`}/>
    <div class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${pressed ? "-rotate-[45deg] -translate-y-2.5" : ""} transition-all duration-300`}/>
</button>