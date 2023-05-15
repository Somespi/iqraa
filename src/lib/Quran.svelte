<script lang='ts'>

    import {play} from '../App.svelte'

    let versesArabic = []
    let versesEnglish = []
    let verses = []
    export let params = {}
    $: isLoaded = false
    fetch(`http://api.alquran.cloud/v1/surah/${params.id}/editions/ar.alafasy,en.asad`)
    .then(response => response.json())
    .then(data => {
        
        versesArabic = data.data[0].ayahs.map((verse) => [verse.text , verse.audio]);
        versesEnglish= data.data[1].ayahs.map((verse) => verse.text);
        verses = versesArabic.map((verse, index) => [verse, versesEnglish[index]]);
        $: isLoaded = true
    })
    
    </script>

<br><br><br><br>


{#if !isLoaded}
<h1 class=" text-center quranic-verse text-xl  mb-14">Loading...</h1>
{:else}

<h1
class=" text-center quranic-verse text-xl  mb-14"
>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
{#each verses as verse}
<button class='inline ml-5 p-2 btn btn-sm btn-primary rounded-full' on:click={()=> play(verse[0][1])}>Play</button>
<p class="quranic-verse mb-3 mx-2 font-bold text-md  leading-10" dir="rtl">{(params.id == 1)? verse[0][0] : verse[0][0].replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ','')} </p>
<br>
<p class='font-light text-sm mx-2'>{verse[1]}</p>


<hr class=" opacity-5"> <br>
{/each}
    
<h1 class=" text-center quranic-verse text-xl  mb-14">
    صَدَقَ اَللَّهُ اَلْعَظِيمُ
</h1>
{/if}
