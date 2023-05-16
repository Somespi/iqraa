<script lang="ts">
    import { suras } from "../assets/data";
    import { push } from "svelte-spa-router";

    let isSearcherHidden: boolean = true;
    const toggleSearcherVisibility = () => {
        isSearcherHidden = !isSearcherHidden;
    };
    let isButtonDisabled: boolean = true;
    let suraId: number;
    let suraName: string = "";
    function handleInput(event) {
        suraName = event.target.value;
        let surasname = [];
        suras.forEach((sura) => surasname.push(sura.name));
        if (surasname.includes(suraName)) {
            isButtonDisabled = false;
        } else {
            isButtonDisabled = true;
        }
    }

    function handleSelect(event) {
        suraName = event.target.dataset.name;
        suraId = event.target.dataset.id;
        let surasname = [];
        suras.forEach((sura) => surasname.push(sura.name));
        if (surasname.includes(suraName)) {
            isButtonDisabled = false;
        } else {
            isButtonDisabled = true;
        }
    }


</script>

<br /><br /><br /><br />
<div class="flex items-center justify-center w-screen h-96">
    <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
            <h2 class="card-title">Holy Quran</h2>
            <div class="card-body">
                <input
                    type="text"
                    name=""
                    class="input input-base-200 input-bordered w-full max-w-xs"
                    placeholder="Enter a sura to search"
                    on:focus={toggleSearcherVisibility}
                    bind:value={suraName}
                    on:input={handleInput}
                />
                <br />
                <div
                    class="absolute card bg-base-100 shadow-xl mt-16 max-w-xs w-52 h-48 max-h-48 "
                    id="searcher"
                    class:hidden={isSearcherHidden}
                >
                    <div class="card-body">
                        <div class="card-actions justify-end" />
                        <p class="overflow-y-scroll m-0 p-0 h-32">
                            {#each suras as sura}
                                {#if sura.name
                                    .toLowerCase()
                                    .includes(suraName.toLowerCase())}
                                    <button
                                        class="btn rounded-none w-full"
                                        on:click={handleSelect}
                                        data-id={sura.id}
                                        data-name={sura.name}
                                        >{sura.name}</button
                                    >
                                {/if}
                            {/each}
                            <button
                                class="btn btn-ghost text-error rounded-none w-full"
                                on:click={toggleSearcherVisibility}
                                >Close</button
                            >
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-actions justify-end">
                <button
                    class=" btn btn-primary w-full btn-disabled"
                    class:btn-disabled={isButtonDisabled}
                    on:click={() => push(`/quran/${suraId}`)}
                >
                    Go to the surah page</button
                >
            </div>
        </div>
    </div>
</div>
