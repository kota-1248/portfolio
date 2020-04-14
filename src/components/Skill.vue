<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Sets
    </div>
    <div id="skillExplain">
      <p>
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
      </p>
    </div>
    <label id="gitHubLabel">
      Github:
      <a
        id="gitHubLink"
        href="https://github.com/kota-1248/portfolio"
      > https://github.com/kota.ozawa</a>
    </label>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="F_change"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="B_change"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="D_change"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': frontChange}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': backChange}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': devChange}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div
      v-if="frontChange"
    >
      <FrontChart />
    </div>
    <div
      v-if="backChange"
    >
      <BackChart />
    </div>
    <div
      v-if="devChange"
    >
      <DevChart />
    </div>
  </div>
</template>

<script>
