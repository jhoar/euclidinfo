<script lang='ts'>

    interface IEvent {
        start: Date;
        end: Date;
        summary: string;
        tags: string[];
        gspass?: boolean;
    }

    async function getEvents() {
        let jsonresp = await fetch('\\data\\timeline.json');
        let eventsjson = await jsonresp.json(); 
        let events: IEvent[] = []; 
        for (var index in eventsjson) {

            var entry: IEvent = {
                start: new Date(eventsjson[index]['start']),
                end: new Date(eventsjson[index]['end']),
                summary: eventsjson[index]['summary'],
                tags: eventsjson[index]['type']
            }

            console.log(eventsjson[index]['tags']);

            if (entry.tags != undefined && entry.tags.find(elem => elem === 'GsPass')) {
                entry.gspass = true;
            }



            events.push(entry);
        }
        return events;
    }

    let promise = getEvents();

</script>

{#await promise}
	<p>...waiting</p>
{:then events}
    <div class="table-container">
        <table class="table table-auto table-hover">
            <tr>
                <th>Start</th>
                <th>End</th>
                <th>GS</th>
                <th>CalBlock</th>
            </tr>
            {#each events as event}
                {#if event.gspass}
                <tr>
                    <td>{event.start.toISOString()}</td>
                    <td>{event.end.toISOString()}</td>
                    <td>{event.summary}</td>
                    <td></td>
                </tr>
                {:else}
                <tr>
                    <td>{event.start.toISOString()}</td>
                    <td>{event.end.toISOString()}</td>
                    <td></td>
                    <td>{event.summary}</td>
                </tr>
                {/if}
            {/each}
        </table>
    </div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

