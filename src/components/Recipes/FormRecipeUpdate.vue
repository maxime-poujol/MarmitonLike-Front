<template>
    <FormContainer>
        <Form method="post" @submit="onSubmit($event)">
            <FieldContainer>
                <input type="hidden" name="bddId" :value="bddId">
                <FormRow>
                    <label for="name">Name</label>
                    <Field id="name" v-model="name" autofocus name="name" tabindex="1" type="text"/>
                </FormRow>
                <FormRow>
                    <label for="preparationTime">Preparation (min)</label>
                    <Field id="preparationTime" v-model="preparationTime" name="preparationTime" tabindex="2"
                           type="number"/>
                </FormRow>
                <FormRow>
                    <label for="cookingTime">Cooking (min)</label>
                    <Field id="cookingTime" v-model="cookingTime" name="cookingTime" tabindex="3" type="number"/>
                </FormRow>
                <FormRow>
                    <label for="restTime">Rest (min)</label>
                    <Field id="restTime" v-model="restTime" name="restTime" tabindex="4" type="number"/>
                </FormRow>
                <FormRow>
                    <label for="difficulty">Difficulty</label>
                    <Field id="difficulty" v-model="difficulty" name="difficulty" tabindex="5" type="text"/>
                </FormRow>
                <FormRow>
                    <label for="image">Image</label>
                    <Field id="image" v-model="image" name="image" tabindex="6" type="text"/>
                </FormRow>
                <FormRow>
                    <label>Ingredients</label>
                    <FormGroup>
                        <IngredientRow id="ingredients-row">
                            <div v-for="(ingredient,key) in ingredients" :key="key">
                                <input type="text" v-model="ingredient.name">
                                <input type="text" v-model="ingredient.qte">
                                <button v-if="ingredients.length !== 1" type="button" @click="suppressIngredient(key)">
                                    X
                                </button>
                            </div>
                        </IngredientRow>
                        <div>
                            <button type="button" @click="createIngredientRow()">PLUS</button>
                        </div>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <label>Steps</label>
                    <textarea v-model="steps"></textarea>
                </FormRow>

                <Submit type="submit" value="button"/>

            </FieldContainer>
        </Form>
    </FormContainer>

</template>

<script>
import {Field, FieldContainer, Form, Submit} from "@/styles/Home/Form.style";
import {FormContainer, FormGroup, FormRow, IngredientRow} from '@/styles/recipes/FormRecipe.style'

export default {
    name: "FormRecipe",
    components: {
        Form,
        FieldContainer,
        Field,
        FormContainer,
        FormRow,
        Submit,
        IngredientRow,
        FormGroup
    },
    data() {
        return {
            name: "",
            preparationTime: 0,
            cookingTime: 0,
            restTime: 0,
            difficulty: "",
            image: "",
            ingredients: [],
            steps: "",
            bddId: ""
        }
    },
    mounted() {
        const recipe = this.$store.getters.getUserRecipe(this.$route.params.id);
        this.name = recipe.name;
        this.preparationTime = recipe.preparationTime;
        this.cookingTime = recipe.cookingTime;
        this.restTime = recipe.restTime;
        this.difficulty = recipe.difficulty;
        this.ingredients = JSON.parse(recipe.ingredients);
        this.steps = recipe.steps;
        this.bddId = recipe._id;
    },
    methods: {
        createIngredientRow() {
            this.ingredients.push({
                name: "",
                qte: ""
            })
        },
        suppressIngredient(index) {
            this.ingredients.splice(index, 1);
        },
        onSubmit(event) {
            event.preventDefault();
            this.$store.dispatch("updateRecipe", {
                data: this.$data,
                id: this.$route.params.id
            });

            this.$router.push("/myrecipe");

        }
    }
}
</script>
