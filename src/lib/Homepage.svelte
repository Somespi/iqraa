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

    let checkIfMobile = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;});
        return check;
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
                    class="absolute card bg-base-100 shadow-xl {(checkIfMobile()) ? "mb-96" : "mt-16"} max-w-xs w-52 h-48 max-h-48 "
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
