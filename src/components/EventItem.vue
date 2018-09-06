<template>
<div calss='col-md-4'>
    <div class='event-card'>
        <h4 class='card-title'>{{event.title}} </h4>
        <p class='card-text'>{{event.description}}</p>
    </div>
    <ul class='list-group list-items-flush'>
        <li class='list-group-item'>Date:{{event.date}} </li>
          <li class='list-group-items'>Location:{{event.location}} </li>
            <li class='list-group-items'>Host:{{event.email}} </li>
    </ul>
</div>
    
</template>
<script>
export default {
    props:['event']
}
</script>
