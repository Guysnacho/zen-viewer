<template>
  <div class="about">
    <h1>The Zen Vuewer</h1>

    <Card :title="'Me fighting for my life'">
      <template #header>
        <it-avatar
          src="https://lh3.googleusercontent.com/iRIv7mjz8eZzeXuQ4WQy0jctGM4KCc5h7ih9FL_i6nlLWqzMLWB0WLfI7aJ_vNwPgl7-99CQ_62c6nGJ6z_sC84DVNkEucYBiiHsipfBo51LhQQJp4PWFma-_1WLCrFHAo41dW1xaGq02vLVbz184Z-SjlYZJrP5lmD2jqFMvxxSmeJUppihXKaekQfcjsTZ1VPwwYLTPKa8US5JMc7BzI7yPMF6HCF7hEE-_5RE5ivtUcMtnOr0t2aQ8wRpaMc0tA09j_cydai6hzUdD1pKHHRGoe9QNgFAfkA2FjCEW8spm37flkjUqHg7rw4lxXp2bsfyu2LrdNwd4tH_N1W0--UFFM_9-SevzEAM6QqbrEHPXPvLvjnKk7Ari5NTt4J_XnseBGvHuv5SOa8eL7n2-gJj1kGs3vZIY_rYHuConjAqtVKYGliDktDHeJPdfkYvomY2M50hW0hLdrLuiC-rj6Sdy-ilp2icl0Ji-XCSunyyQsdieRprHEeXZOyDbf6Lw4z_wAhO3vzw-msm4s9Jo-sz4t4vPMNVkpVhCM5v_ub5wDrC6GSHyEOgSqk87FFqakBlwskeu8R9zyDFMFuW9ml45s-GLtda3nmXRVr4YfgAHczIPySpLQbZ9W4GQ-d1dhaPU9lXvxVWRj95rIk7JEFYMpfs-cVC4EPuSuT7QxowOiT-lVgjqQXxa1Q9wf5yYn_c2XgMiWEV3qQTjDCf4ONjLA=s250-k-rw-no"
          text="Fighting for my life"
          size="70px"
        />
      </template>
      <template #title> Samuel Adetunji </template>
      <template #content justify>
        <p>
          This was a really fun exercise, I haven't used Vue in about a year or
          so so I wanted to use the latest available. Turns out, a lot of the
          tools I'm used to aren't available yet with Vue 3 so that took some
          working around.<br /><br />There were a lot of challenges but believe
          it or not, the thing that took up the most time for me was figuring
          out how to get past CORS. I thought it was a death sentence, I tried a
          million and one ways until I landed on using node like the
          requirements recommended. I thought that since Vue ran with node, the
          requests were going through that underlying node service. Clearly I
          was wrong so I started looking into api gateways so I could abstract
          the request but that felt like running away so I decided to learn how
          to make an api with something besides Java (Spring Boot).
        </p>
        <br />
        <h4>Thank you so much for the opportunity!</h4>
      </template>
    </Card>
  </div>
</template>

<style>
.p-card-content {
  text-align: left;
}
.p-card-header {
  padding-top: 15px;
}
h4 {
  text-align: center;
  margin-top: 1em;
}
</style>
