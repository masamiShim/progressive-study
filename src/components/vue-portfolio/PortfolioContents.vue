<template>
  <main class="c-content l-content">
    <section class="c-concept-section l-concept-section">
      <PortfolioSkills/>
    </section>
    <div class="c-concept-wrapper">
      <section class="c-concept-section l-concept-section">
        <h1 class="c-concept-section__title">Pick up</h1>
        <dl>
          <dt>Java</dt>
          <dd>
            <ul>
              <li>Spring, Springboot, Strutsの経験</li>
              <li>JSP/Servletを使ったスクラッチでのWebシステム開発経験</li>
              <li>Junit, Seleniumを使用したテストコード開発</li>
              <li>hibernateのN+1やパフォーマンスチューニング</li>
              <li>ThymeleafのdialectをカスタマイズしてViewを自動生成しようとしたけどSpringBoot2に上げて苦い経験</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>javascript</dt>
          <dd>
            <ul>
              <li>jQueryを使った表示制御</li>
              <li>Ajax経験</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>SQL</dt>
          <dd>
            <ul>
              <li>一通りできます</li>
              <li>テーブルの設計経験</li>
              <li>実行計画を見ながらパフォーマンスチューニング</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>css</dt>
          <dd>
            <ul>
              <li>デザイン見ながら一通り実装可能</li>
              <li>gulpツールを使ってスタイルガイドを作成</li>
              <li>レスポンシブでの実装経験あり(メディアクエリ、flex, float)</li>
            </ul>
          </dd>
        </dl>
      </section>
    </div>
    <section class="c-concept-section l-concept-section">
      <h1 class="c-concept-section__title">Feature</h1>
      <dl>
        <dt>経験してきたこと</dt>
        <dd>
          <ul>
            <li>要件定義～運用保守まで幅広く経験</li>
            <li>VMWare, VirtualBoxでの開発基盤の構築</li>
            <li>JSP/Servletを使ったスクラッチでのWebシステム開発経験</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>今取り組んでいること</dt>
        <dd>
          <ul>
            <li>Vue.jsを使ったSPA開発(開発中) javascriptについて学びなおし</li>
            <li>KotlinでのAPI開発(開発中) altJavaの経験もつけたい</li>
            <li>SQLはウィンドウ関数を使えるようになること</li>
            <li>cssについて曖昧な理解だったのでサイトの模写を通じて勉強中、あと動きとかつけたい</li>
            <li>設計技術を強化したいのでドメイン駆動設計やアジャイルソフトウェア開発などの書籍を読み実践中</li>
          </ul>
        </dd>
      </dl>
    </section>
    <div class="c-concept-wrapper">
      <section class="c-concept-section l-concept-section">
        <h1 class="c-concept-section__title">Portfolio</h1>
        <div style="text-align: center">【工事中】ScreenShot取ってURL貼り付けたい</div>
      </section>
    </div>
  </main>
</template>

<script>
import PortfolioSkills from '@/components/vue-portfolio/components/contents/PortfolioSkills';

export default {
  name: 'PortfolioContents',
  components: { PortfolioSkills },
};
</script>

<style scoped>
  .c-content {
    width: 100%;
    box-sizing: border-box;
    -ms-overflow-style: none;
  }

  .c-content::-webkit-scrollbar {
    display: none;
  }

  .l-content {
    margin: 0 auto;
  }

  .c-concept-section {
    box-sizing: border-box;
    width: 70%;
    margin: 0 auto;
    text-align: left;
    padding: 30px 0;
  }

  .l-concept-section {
    margin-bottom: 100px;
  }

  .c-concept-section__title {
    font-size: 42px;
    font-family: Spectral, serif;
    text-align: center;
    display: block;
  }

  .c-concept-wrapper {
    background-color: #2c3e50;
    color: white;
  }


</style>
