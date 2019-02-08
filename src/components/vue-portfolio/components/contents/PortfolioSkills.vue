<template>
  <section class="c-skill-section l-skill-section">
    <h1 class="c-skill-section__title">Skills</h1>
    <article class="c-skill-section__content">
      <PortfolioSkillItem :skills="skillSet.programming" >
        <i class="fas fa-code fa-2x"></i>
      </PortfolioSkillItem>
      <PortfolioSkillItem :skills="skillSet.frameworks" >
        <i class="fas fa-plug fa-2x"></i>
      </PortfolioSkillItem>
      <PortfolioSkillItem :skills="skillSet.server" >
        <i class="fas fa-server fa-2x"></i>
      </PortfolioSkillItem>
      <PortfolioSkillItem :skills="skillSet.database" >
        <i class="fas fa-database fa-2x"></i>
      </PortfolioSkillItem>
      <PortfolioSkillItem :skills="skillSet.tool" >
        <i class="fas fa-tools fa-2x"></i>
      </PortfolioSkillItem>
    </article>
  </section>
</template>

<script>
import PortfolioSkillItem from '@/components/vue-portfolio/components/contents//PortfolioSkillItem';

export default {
  name: 'PortfolioSkills',
  components: { PortfolioSkillItem },
  data() {
    return {
      skillSet: {
        programming: [
          { label: 'Java', study: false },
          { label: 'javascript', study: false },
          { label: 'PHP', study: false },
          { label: 'SQL', study: false },
          { label: 'HTML', study: false },
          { label: 'CSS', study: false },
          { label: 'SCSS', study: false },
          { label: 'VB', study: false },
          { label: 'TypeScript', study: true },
          { label: 'Scala', study: true },
          { label: 'GO', study: true },
          { label: 'Python', study: true },
          { label: 'Ruby', study: true },
        ],
        server: [
          { label: 'Tomcat', study: false },
          { label: 'Apache', study: false },
          { label: 'IIS', study: false },
          { label: 'AWS', study: false },
          { label: 'firebase', study: true },
          { label: 'GCP', study: true },
        ],
        database: [
          { label: 'MySQL', study: false },
          { label: 'Oracle', study: false },
          { label: 'SQLServer', study: false },
          { label: 'postgresSQL', study: false },
          { label: 'Redis', study: false },
          { label: 'SQLlite', study: true },
          { label: 'H2database', study: true },
        ],
        tool: [
          { label: 'Jenkins', study: false },
          { label: 'Docker', study: false },
          { label: 'Git', study: false },
          { label: 'SVN', study: false },
          { label: 'confluence', study: false },
          { label: 'jira', study: false },
          { label: 'Trello', study: false },
          { label: 'redmine', study: false },
          { label: 'backlog', study: false },
          { label: 'slack', study: false },
          { label: 'chatwork', study: false },
        ],
        frameworks: [
          { label: 'Spring4', study: false },
          { label: 'SpringBoot1', study: false },
          { label: 'JavaEE7', study: false },
          { label: 'Junit4', study: false },
          { label: 'JQuery', study: false },
          { label: 'ASP.NET', study: false },
          { label: 'PlayFramework', study: true },
          { label: 'Node.js', study: true },
          { label: 'React', study: true },
          { label: 'Vue', study: true },
          { label: 'angular', study: true },
          { label: 'Ruby on Rails', study: true },
          { label: 'Django', study: true },
        ],
      },
    };
  },
};
</script>

<style scoped>

  .c-skill-section {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
  }

  .l-skill-section {
    margin-bottom: 100px;
  }

  .c-skill-section__title {
    font-size: 42px;
    font-family: Spectral, serif;
    text-align: center;
    display: block;
  }

  .c-skill-section__content {
    text-align: center;
  }

</style>
