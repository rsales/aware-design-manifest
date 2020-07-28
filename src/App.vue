<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
body #app,
html #app {
  height: 100%;
}
.content-zh.JobDetail-Page .PageHeader-Title,
.JobHeader-Title,
.PageHeader--tertiary .PageHeader-Title,
.ProfileHeader-Name {
  font-family: "Lora", serif;
  font-weight: 400;
  font-style: italic;
}
.TextBlock p,
.TextField-input,
.TextStyles h1,
.TextStyles h2,
.TextStyles ol,
.TextStyles p,
.TextStyles ul,
.TextTile-MainContainer p,
.TextTile-Title,
.TextTile p,
body,
html {
  font-family: "Lora", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
