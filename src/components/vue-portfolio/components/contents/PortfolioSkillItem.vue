<template>
  <div class="c-skill--card__container l-skill--card__container">
    <div class="c-skill--card__label">
           <span class="c-skill-label__icon">
             <slot><i class="fas fa-code fa-2x"></i></slot>
           </span>
    </div>
    <div class="c-skill--card__content">
      <ul class=" l-skill--card__title">
        <li class="c-skill-content__item" v-for="(skill,index) in skills" :key="index">
          <span v-if="skill.study">{{skill.label}}(独学)</span>
          <span v-else>{{skill.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSkillItem',
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

  .c-skill-content__item {
    display: inline-flex;
    text-align: left;
    line-height: 2.5em;
    font-size: .8em;
    letter-spacing: .1em;
    margin-right: .5em;
  }

  .c-skill--card__container {
    display: flex;
    text-align: left;
    width: 100%;
    height: fit-content;
  }

  .l-skill--card__container {
    margin-bottom: 32px;
  }

  .c-skill--card__label {
    widht: 20%;
    margin: auto 0;
  }
  .c-skill-label__icon {
    display: block;
    width: 5em;
    height: 5em;
    background-color: #dfdfdf;
    border-radius: 50%;
    line-height: 5.5em;
    text-align: center;
  }

  .c-skill--card__content {
    widht: 80%;
  }

  .l-skill--card__title {
  }

  h2 {
    margin: 0;
  }

</style>
