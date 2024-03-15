<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
       <div class="container cont-footer">
            Footer
       </div> 
    </footer>
</template>

<style scoped>
footer{
    background-color: black;
    width: 100%;
    padding: 1.5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;

    >.cont-footer{
        color: white;
    }
}
</style>