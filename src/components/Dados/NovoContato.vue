<template>
    <novoContato>
        <div>
            <main>

                <div class="Container">
                    <label for="">Nome</label><br>
                    <input type="text" v-model="nome"><br>

                    <label for="">Gmail</label>,<br>
                    <input type="text" v-model="gmail"><br>

                    <label for="">Telefone</label><br>
                    <input type="number" v-model="telefone"><br>

                    <label for="">Endereço</label>
                    <input type="text" v-model="endereço">

                    <button type="submit" class="btn btn-primary" @click.prevent.stop="Salvar()">Salvar</button><br>
                    <br>


                    Nome:{{ nome }} <br>
                    Gmail:{{ gmail }} <br>
                    Telefone:{{ telefone }} <br>
                    Endereço:{{ endereço }} <br>

                </div> 
            </main>
        </div>
    </novoContato>
</template>


<script>

export default {
    name: 'NovoContato'
}

</script>
<style scoped>

</style>

