<template>
   <div class="columns">
    <div class="column is-3 is-primary">
        <slot name="sidebar"></slot>
    </div>
    <div class="column is-9">
        <slot name="main"></slot>
    </div>
   </div> 
</template>