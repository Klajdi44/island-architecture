<script> 
import {site} from '../store/nanoStore'
</script>

{#each  $site as child}
	<h2> {child.name}</h2>
{/each}