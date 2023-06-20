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

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">LAUNCH AND EARLY OPERATIONS PHASE</span></div>
<div class="pt-2 px-2">The launch of Euclid is scheduled for the 1st of July, 2023 from the Cape Canaveral Space Force Station in Florida, USA. At launch, the mission enters the Launch and Early Operations Phase (LEOP). After approximately 40 minutes, the spacecraft separates from the launcher, and the spacecraft performs an automated sequence to put the spacecraft in a safe attitude and ready to communicate with the ESA New Norcia ground station. Once the ground station acquires the signal from the spacecraft, the flight control team at the mission control centre checks the spacecraft's health after the launch and switches on core spacecraft systems; communication, orbital control and storage functions. A day after launch, the flight dynamics team calculates the trajectory of the spacecraft from ground station data and calculates the first manoeuvre to correct the spacecraft's bearing on its way onto L2.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">DECONTAMINATION AND COOLDOWN</span></div>
<div class="pt-2 px-2">To preserve Euclid's immaculate telescope and payload, the spacecraft and instruments have been built and launched in extremely clean conditions. Nonetheless, some residual contaminants remain on the spacecraft, sometimes embedded in the spacecraft material. The spacecraft will also take water vapour from the Earth's atmosphere with it into space. The freezing vacuum of space naturally causes the contaminants to emerge into the interior spaces ('out-gassing'). This combination of contaminants and water vapour will naturally condense onto the coldest surface, and the spacecraft is kept warm for several days and left to cool under carefully managed conditions to ensure the optical surfaces remain at their highest possible performance. The NISP instrument is partially activated during the LEOP phase to control the temperature with its enclosure.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">SPACECRAFT COMMISSIONING PHASE</span></div>
<div class="pt-2 px-2">With Euclid on its way to L2, the other spacecraft systems and cameras can be switched on. One week after launch the high-power antenna that transmits the science images to ground is deployed. This antenna has a narrow beam and thus is steerable to point at the ground station receiving the data. With the high-power antenna switched on and the storage system available, the instruments can be switched on and start taking images.</div>
<div class="pt-2 px-2">After 13 days the spacecraft has cooled and the VIS instrument is working correctly. The telescope will be focused through a painstaking process of searching for the best focus, moving the mirror motor mechanism by tiny amounts in 2 axes, and measuring the focus of stars in VIS images. The Fine Guidance System uses the telescope to track the positions of stars in the sky and with the telescope in focus it can be activated to achieve the necessary precise pointing performance. With all elements in place, the spacecraft, instruments, and telescope work together to capture Euclid's pristine images of the extra-galactic sky.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">PERFORMANCE VERIFICATION PHASE</span></div>
<div class="pt-2 px-2">1 month after launch and the spacecraft is now in orbit around L2 and the mission enters the Performance Verification phase, where the ability of the instruments to meet the exacting mission requirements is checked in space. Most of these measurements will not be possible to make on ground since they need the full spacecraft operating at the nominal temperate observing distant stars and galaxies, something that is impossible to achieve in laboratories on Earth. This phase also includes an initial assessment of the survey design in-flight, and the collection of data for the Early Release Observations, an early showcase of the Euclid mission. This mission phase lasts two months, after which ESA will review the results of the Spacecraft Commissioning and Performance Verification phases and authorise the start of the science mission phase.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">EARLY SURVEY PHASE</span></div>
<div class="pt-2 px-2">The initial months of the mission will be spent starting the Euclid survey and collecting the calibration data needed when transforming Euclid images into the measurements used by astronomers addressing the core questions of the Euclid mission. This calibration data includes data that captures the response of the telescope point spread function to tiny changes in the telescope structure due to changes in temperature. This requires the spacecraft temperature to have stabilised.</div>
<div class="pt-2 px-2">During the first six months of the survey phase special attention to the evolution of the calibration and data processing. As the processing adapts to the in-flight performance of the instruments and calibration, the scientists and engineers responsible for the processing software ensure that the software is inline with the mission requirements. 
</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">ROUTINE SURVEY PHASE</span></div>
<div class="pt-2 px-2">With the spacecraft, telescope, instrument, and processing at full speed, the routine survey begins. There are three main elements to the Euclid Survey; the Wide Survey covers 14,000 square degrees of the extragalactic sky; the Deep Survey consists of three areas of the sky observed to much greater depth, with a total area of 50 square degrees. The last component is calibration observations that monitor the performance of VIS and NISP and help understand the measurements made with the observations. The data processing system uses this data to ensure the best use of the science images from the instruments.</div>
<div class="pt-2 px-2">Two great circles on the sky are not suitable for the Euclid survey. The first is the Galactic Plane, which obscures the distant galaxies we wish to observe. The second is the Ecliptic Plane, where the planets and minor bodies orbit around the Sun. the ecliptic plane contains a lot of dust which contaminates the measurements of the galaxies. Both the Galactic and Ecliptic Planes are excluded from the survey, leaving approximately one-third of the sky available for the science of the mission.</div>

<div class="pt-4"><span class="text-white text-1xl bg-red-600 px-2">EUCLID'S DATA RELEASES</span></div>
<div class="pt-2 px-2">The Euclid mission will produce three major data releases during its nominal lifetime. Each release contains data products derived from an increasingly large sky area from the Euclid Survey. Smaller releases of data will be made with smaller or specialised subsets of data products. These data releases will be accompanied by the major scientitific results from the mission reflecting the quest to understand the mysteries of dark energy and dark manner.</div>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
