<template lang='pug'>
#vue-ui-component-library.eg-theme-agrume
  .eg-slideshow
    slide
      h1
        img(src="./assets/vuelogo.svg",
        :style="{height: '1em'}")
        div VUE-UI
      h3.grey The BuildingLink Component Library

    slide(steps=5, enter='bounceInDown')
      h3 Bizzarolink

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=2')
          img(src='./assets/cat-orca.jpg')
          h4 TEAM ACRO

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=3')
          img(src='./assets/cat-capy.jpg')
          h4 TEAM ARABYPAC

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 4")
         img(src='./assets/cat-taco.jpg')
         h4 TEAM TACOCAT

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 5")
         img(src='./assets/thinking.jpg')
         h4 Hmm.......

    slide(steps=3 enter='fadeIn' leave='fadeOut')
      h3 To the rescue
      .center
        img(src="./assets/spicy_peanuts.svg", :style="{marginTop: '1em'}")

      eg-transition(enter='fadeIn' leave='fadeOut')
        eg-modal(v-if='step === 2')
          h3 🔥
          .center
            img(src="./assets/prometheus.jpg",
                :style="{height: '10em'}")

    slide(steps=2 enter='fadeIn' leave='fadeOut')
      h3 Bizzarolink

      .quarter
        img(src='./assets/cat-orca.jpg')
        h4 TEAM ACRO

      .quarter
        img(src='./assets/cat-capy.jpg')
        h4 TEAM ARABYPAC

      .quarter
        img(src='./assets/cat-taco.jpg')
        h4 TEAM TACOCAT

      .quarter
        img(src='./assets/thinking.jpg')
        h4 Hmm.......

      eg-transition(enter='fadeIn' leave='fadeOut')
        eg-modal(v-if='step === 2')
          h3 Work smarter, not harder
          .center
            img(src="./assets/smarternotharder.png",
                :style="{height: '10em'}")

    slide(enter='fadeIn' leave='fadeOut')
      h3 VUE-UI Components
      p It's a set of shared & reusable building blocks (aka components) that make up the new BuildingLink web app.
      p A UI component can be anything from a button or checkbox to a sidesheet or data table.

      .center.clip
        img(src="./assets/legos-common.jpg", :style="{marginTop: '1em'}")

    slide(steps=5)
      h3 BuildingLink

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=2')
          img(src='./assets/tiger.jpg')
          h4 TEAM ORCA

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=3')
          img(src='./assets/tiger.jpg')
          h4 TEAM CAPYBARA

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 4")
          img(src='./assets/tiger.jpg')
          h4 TEAM TACOCAT

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 5")
          img(src='./assets/yes.gif')
          h4 Yesss!

    slide.happy-campers(enter='fadeIn' leave='fadeOut')
      h3(style={backgroundColor: 'grey', marginTop: '0.5em'}) Happy Campers

    slide(steps=2 leave='fadeOut')
      h3 TL/DR
      .center
        p A shared library of UI components used among teams.
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Consistency:</b> familiar UI/UX across product
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 2")
            <b>Modularity:</b> code reuse, code reuse, code reuse
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Flexibility:</b> adapt with the times
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Ease of Use:</b> predictable, plug & play

    slide(enter="fadeIn")
      h3 Let's dig a little deeper
      ul
        li  Anatomy of a component
        li  Component wrapping
        li  Component wrapping saves the day
        li  Oh my open source!
        li  TailwindCSS
        li  Vue Styleguidist
        li  The Design System
        li  The Schemers
        li  The Slides
        li  Q & A

    slide(steps=7 enter='fadeIn' )
      h3 Anatomy of a component
      div(v-if="step >= 2")
        p How a component is made
        .center(v-if="step === 2")
          img(src="./assets/birdsbees.png", :style="{marginTop: '1em', borderRadius: '4px'}")
        .center(v-if="step === 3" leave='fadeOut')
          img(src="./assets/protonquarktrans.png", :style="{marginTop: '1em'}")
        .center(v-if="step === 4" enter='fadeIn' )
          img(src="./assets/datepickeranatomy.png", :style="{marginTop: '1em'}")

      eg-transition(v-if="step >=5" enter='flipInX')
        eg-code-block(lang='html').
          bl-indicator
            type="line" <eg-code-comment :active='step >= 6' > Intellisense to cycle through display options</eg-code-comment>
            color="masBlue" <eg-code-comment :active='step >= 7'> Cycle through design team color pallette</eg-code-comment>
            text="Open"
            sub-text="08/27/21"

    slide(:steps=6, enter='fadeIn')
      h3 Component Wrapping
      p
         eg-transition(enter='bounceInRight' )
          img(v-if="step === 2" src="./assets/wrapping-gifts.gif")
      div(v-if="step >= 3"  style="border: 1px solid grey; padding: 30px; border-radius:4px")
        p(style="padding-top: 20px;") BuildingLink component
          span(style="color:tomato; font-weight:800; padding-left:24px;") bl-select
        div(v-if="step === 4" style="border: 1px solid tomato; border-radius:4px")
            p(style="padding-top: 20px;") Vuetify component
             span(style="color:tomato; font-weight:800; padding-left:24px;") v-select
        div(v-if="step === 5" style="border: 1px solid tomato; border-radius:4px")
            p(style="padding-top: 20px;") Another open source library component
             span(style="color:tomato; font-weight:800; padding-left:24px;") aoolc-select
        div(v-if="step >= 6" style="border: 1px solid tomato; border-radius:4px")
            p(style="padding-top: 20px;") DIY 💪

    slide(steps=2 enter='fadeIn' )
      h3 Component Wrapping
      p(v-if="step === 1") Why do we wrap components?

        .center.highlight(v-if="step === 1")
          div
            a Abstraction
          div
            a Data Massaging
          div
            a Predictability
          div
            a Documentation

        .center(v-if="step >= 2")
          img(src="./assets/legogif.gif" leave="fadeOut" :style="{marginTop: '1em', borderRadius: '4px'}")

    slide(steps=6 enter='fadeIn' )
      h3 Component Wrapping saves the day
      .center.large
        img(v-if="step === 2" src="./assets/wildwest.jpg", style="margin-top: 1em; border-radius: 4px;")
        img(v-if="step === 3" src="./assets/mikeorig.png", style="margin-top: 1em; border-radius: 4px;")
        img(v-if="step === 4" src="./assets/philosophie.png", style="margin-top: 1em; border-radius: 4px;")
        img(v-if="step === 5" src="./assets/sirmixalot.png", style="margin-top: 1em; border-radius: 4px;")
        img(v-if="step === 6" src="./assets/currentdesign.png", style="margin-top: 1em; border-radius: 4px;")

    slide(steps=2 enter='fadeIn' leave='fadeOut')
      h3 Oh my open source!

      .quarter(v-if="step === 2" enter='fadeIn' leave='fadeOut')
        img(src='./assets/vuetify.svg' style="object-fit: contain; transform: scale(0.75,0.75)")
        h4 Vuetify

      .quarter(v-if="step === 2" enter='fadeIn' leave='fadeOut')
        img(src="./assets/awesomelogo.svg" style="object-fit: contain;")
        h4 Vue Awesome

      .quarter(v-if="step === 2" enter='fadeIn' leave='fadeOut')
        img(src='./assets/vcalendar.png' style="object-fit: contain; transform: scale(0.75,0.75)")
        h4 v-calendar

      .quarter(v-if="step === 2" enter='fadeIn' leave='fadeOut')
        img(src='./assets/coollightbox.svg' style="object-fit: contain; transform: scale(0.5,0.5)")
        h4 cool lightbox

    slide(leave='fadeOut')
      h3 TailwindCSS
        img(src='./assets/tailwindcss.svg' style="object-fit: contain; transform: scale(0.5,0.5)")
      p "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
      p It's just a smart CSS library. Allows us to write minimal custom CSS, which can quickly become unmanagable.
      .center
        code(style="background-color: black; padding: 4px; color: white; border-radius: 4px;") <span style="color: red">bl-</span>pt-4 → padding-top: 1rem;

    slide(steps=2  leave='fadeOut')
      h3 Vue Styleguidist
      .center(v-if='step === 1')
        img(src="./assets/styleguidist.png" style="width: 100px; height: 100px; object-fit: contain; ")
      p An GUI explorer for the vue-ui component library
      DIV(style="display: flex; justify-content: center; margin-top: -20px;")
        ul(v-if='step === 1')
          li Features:
            ul
              li browse or search for existing components
              li clear auto-generated docs for how to use components
              li a sandbox for each component
              li code examples for how to implement
          li Where you can find it:
            ul
              li access it on the vdev environment at <b>/styleguide</B>
              li build it locally in vue-ui repo: <b>yarn styleguide</b>

      video(v-if='step === 2', enter='fadeIn', leave="fadeOut", autoplay, controls, height="auto", width="100%", style="border:2px solid grey; border-radius:4px; margin-bottom: 1em;" )
        source(src='./assets/styleguidist.mp4' type="video/mp4")

    slide
      h3 Chris-anthemum 3000
      .center
        img(src="./assets/chrisbow.png" style="border-radius:4px;")

    slide(enter='bounceInRight' leave='bounceOutDown')
      h3 The Design System
      p Our source of truth
      .center
        img(src="./assets/designsystem.png")

    slide(steps=2 enter='bounceInRight' leave='bounceOutDown')
      h3 The Schemers
      .center(v-if="step === 1")
        img(src="./assets/schemer.gif" leave="fadeOut" style="border-radius: 4px;" )
      ul
        li review design & implementation to make sure it works across teams
        li comprised of one representative from each of the Vue teams
        li hold bi-weekly meetings
        li point spicy peanuts to ui tasks that are outside squads
        li tasks get distributed among teams ?
        li responsible for vue-ui maintenance / refactoring
        li examples: bl-indicator, bl-avatar, bl-alert

    slide(enter='bounceInRight' leave='bounceOutDown')
      h3 The Slides
      .center
        img(src="./assets/eaglelogo.svg")
        p Eagle.js - A slideshow framework for hackers

        img(src="./assets/vuelogo.svg"  style="object-fit: contain; transform: scale(0.75,0.75)")
        p And of course, Vue

    slide.goodfellas(enter='fadeIn' leave='fadeOut')
      h3(style={backgroundColor: 'grey', marginTop: '10em'}) Are we almost done?

    slide(enter='bounceInRight' leave='bounceOutDown')
      h1 Q & A
</template>

<script>
import eagle from 'eagle.js'
import whatIsThisMagic from './assets/whatIsThisMagic.gif'
export default {
  name: 'VueUILibrarySlideShow',
  mixins: [ eagle.slideshow ],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'VUE-UI',
    description: 'The BuildingLink Component Library',
    path: 'vue-ui-presentation'
  },
  data () {
    return {
      preloadedImages: {
        youRightNow: whatIsThisMagic
      }
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import url(https://fonts.googleapis.com/css?family=Raleway);
.eg-theme-agrume .eg-slideshow {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%239ad1ec' fill-opacity='0.17' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
#vue-ui-component-library{
  .eg-slideshow{
    font-family: 'Raleway';
    background-color: #eef;
    .eg-slide{
      .eg-slide-content{
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }
  .eg-slide-content{
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
      p {
      margin-top: 0;
      text-align: center;
    }

}
  .center.clip img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
  }

  .center.large img{
      width: 1200px;
      aspect-ratio: 4/3;
      object-fit: cover;
      border-radius: 4px;
  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .happy-campers {
     @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      margin-top: 70%;
      text-align: left;
      color: rgba(255, 255, 255, .9);
    }
    background-image: url('./assets/happy-campers.jpg');
    background-position: center;
    background-size: cover;
  }

  .goodfellas {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      margin-top: 70%;
      text-align: left;
      color: rgba(255, 255, 255, .9);
    }
    background-image: url(https://s.abcnews.com/images/Entertainment/GTY_goodfellas_ml_150916_16x9_992.jpg);
    background-position: center;
    background-size: cover;
  }

  .highlight{
    a {
      position: relative;
      display: inline-block;
      font-size: 1em;
      font-weight: 800;
       margin-bottom: 1em;
      color: red;
      overflow: hidden;
      background: linear-gradient(to right, tomato, tomato 50%, slategray 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 600ms ease;
      text-decoration: none; // text decorations are clipped in WebKit browsers
      &:hover {
        background-position: 0 100%;
      }
    }
  }

</style>
