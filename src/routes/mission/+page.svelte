<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
	import { locale } from '$lib/Store';

    let header : { [lang: string]: string } = {
        'en' : 'Mission timeline',
        'fr' : 'Événements de la mission',
        'es' : 'Misión Eventos',
        'de' : 'Ereignisse der Mission',
        'it' : 'Eventi della missione',
        'nl' : 'Missie Evenementen'
    };

</script>

<Navigation left={""} right={""}/>

<h1 class="pt-8 text-white text-2xl"><span class="px-2 bg-red-600">{header[$locale].toUpperCase()}</span></h1>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">LAUNCH</span></div>
<div class="pt-2 px-2">The launch of Euclid is hypotectically scheduled for the 1st of July, 2023 from the Cape Canaveral Space Force Station in Florida, USA.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">LAUNCH AND EARLY OPERATIONS PHASE</span></div>
<div class="pt-2 px-2">At launch, the mission enters the Launch and Early Operations Phase (LEOP). After approximately 40 minutes, the spacecraft separates from the launcher, and the spacecraft performs an automated sequence to put the spacecraft in a safe attitude and ready to communicate with the ESA New Norcia ground station. Once the ground station acquires the signal from the spacecraft, the flight control team at the mission control centre checks the spacecraft health after the launch and switches on core spacecraft systems; communication, orbital control and storage functions. A day after launch, the flight dynamics team calculates the trajectory of the spacecraft from ground station data and calculates the first manoeuvre to correct the spacecraft's bearing on its way on to L2.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">DECONTAMINATION AND COOLDOWN</span></div>
<div class="pt-2 px-2">In order to preserve Euclid's immaculate telescope and payload, the spacecraft and instruments have been built and launched in extremely clean conditions. Nonetheless some residual contaminants remain on the spacecraft, sometimes embedded in the spacecraft material. The spacecraft will also take water vapour from the Earth's atmosphere with it into space. The freezing vacuum of space naturally causes the contaminants to emerge into the interior spaces ('outgassing'). This combination of contaminants and water vapour will naturally condense onto the coldest surface, and spacecraft is kept warm for several data and left to cool under carefully managed coniditions to ensure the best optical performance of the mission. The NISP instrument is partially activated during the LEOP phase to control the temperature with its enclosure.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">SPACECRAFT COMMISSIONING PHASE</span></div>
<div class="pt-2 px-2">With Euclid on its way to L2, the other spacecraft systems and cameras can be switched on. One week after launch the high-power antenna that transnits the science images to ground is deployed. This antenna has a narrow beam and thus is steerable to point at the gropund station receiving the data. With the high-power antenna switched on and storage system available, the instruments can be switched on and start taking images.</div>
<div class="pt-2 px-2">The spacecraft has cooled and the VIS instrument is working correctly. The telescope will be focused through a painstaking process of searching for the best focus. The Fine Guidance System uses the telescope to track the positions of stars on the sky and with the telescope in focus it can be activated to achieve the necessary precise pointing performance. With all elemnts in place, the spacecraft, instruments and telescope work together to capture Euclid's pristine images of the extra-galactic sky.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">PERFORMANCE VERIFICATION PHASE</span></div>
<div class="pt-2 px-2"></div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">EARLY SURVEY PHASE</span></div>
<div class="pt-2 px-2"></div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">ROUTINE SURVEY PHASE</span></div>
<div class="pt-2 px-2"></div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">EUCLID'S DATA RELEASES</span></div>
<div class="pt-2 px-2"></div>


<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
