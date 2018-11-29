<template lang="pug">
  .recommend-container
    h3.recommend-title.border-bottom 去哪儿推荐
    .ticket-item
      .ticket-left
        h6.ticket-left-title [上午场] 故宫成人票凭身份证快速入园( 淡季 )
        .ticket-left-tip
          img.tip-img(src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png")
          span.tip-img-text 23:59可订明日
        .ticket-left-desc.border-bottom
          span.ticket-left-label.border
            img.ticket-left-tagicon(src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png")
            span 自营
          span.ticket-left-label.border 无需换票
          span.ticket-left-label.border 条件退
          span.ticket-left-label-1.border 赠券 ¥ 1.0
      .ticket-right
        strong.ticket-right-sale ¥
          em.ticket-price-num 41
        em.ticket-right-btn 预定
    .ticket-item
      .ticket-left
        h6.ticket-left-title [上午场] 故宫成人票凭身份证快速入园( 淡季 )
        .ticket-left-tip
          img.tip-img(src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png")
          span.tip-img-text 23:59可订明日
        .ticket-left-desc.border-bottom
          span.ticket-left-label.border
            img.ticket-left-tagicon(src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png")
            span 自营
          span.ticket-left-label.border 无需换票
          span.ticket-left-label.border 条件退
          span.ticket-left-label-1.border 赠券 ¥ 1.0
      .ticket-right
        strong.ticket-right-sale ¥
          em.ticket-price-num 41
        em.ticket-right-btn 预定
    .ticket-item
      .ticket-left
        h6.ticket-left-title [上午场] 故宫成人票凭身份证快速入园( 淡季 )
        .ticket-left-tip
          img.tip-img(src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png")
          span.tip-img-text 23:59可订明日
        .ticket-left-desc.border-bottom
          span.ticket-left-label.border
            img.ticket-left-tagicon(src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png")
            span 自营
          span.ticket-left-label.border 无需换票
          span.ticket-left-label.border 条件退
          span.ticket-left-label-1.border 赠券 ¥ 1.0
      .ticket-right
        strong.ticket-right-sale ¥
          em.ticket-price-num 41
        em.ticket-right-btn 预定

</template>
<script type="text/ecmascript-6">
export default {
  name: 'DetailRecommend'
}
</script>
<style lang="scss" scoped>
  @mixin common-label($color) {
    margin-top: .08rem;
    padding: 0 .04rem;
    height: .32rem;
    color: $color;
    font-size: .2rem;
    line-height: .32rem;
    white-space: nowrap;
  }

  @mixin border($color) {
    border-color: $color;
  }

  .recommend-container {
    position: relative;
    background: #fff;
    margin-bottom: .2rem;
    padding-left: .2rem;
    .recommend-title {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrklEQVRYR8XWS2jUQBgH8P83cTfRKtaKvSnSq91H6nYTBaF68+ClXgQRtCKeRPAmFusL6cWbBw9qRVBR8IF3EXuQbLtrsosHexBBT2qLD6hOdk0+WWlrs7tdsmzT5pYwk/9v5ptJhrDKF61yPtoGTMaTvT6JhyBaD59PG2XnWSuDahuQ09IjAF34F8rsCvipfrc0FRbRNsDS0mMEOroQyPzUcJ3BlQS8JNDAfwB+Ga7dsSKAD9iufVE7p0EUCIxJdPfB/hoG0VYJrLh+iAQe1AaRrGzL4u2nSAF57Ix5qvcORD21QYoUWzIoTEcKyGnpKwCdqwthVLKurRLAkQEm4qlBFuJxowBmlEzXToUJr7ZpeQ1Y8d4kKGYRYW3DEB+3jbJ9PBLApKrv98CPqPrVW/LiE4Z0brYMmBvZKBGvW9yZGVOm65wsIbHpt6rMgKj5rDGKIP7esDwAC/D4rCxe3gv8CZRgQktdZIjz9YuK2XAdUUSyW2rK57Aja9aO4Q+ZsjgWAORU/QwI1xp1NKRNywrwMWKW7UsBgKWlhgji1koACHwsK507wRI02VrLPgOet8uslKxgCbTkPkB5EfkMMCqKKzoyKFQCgHws2ecpSiFyAJA3pN0/n7OwpSa1RI+PNe8jBzCuG659qg7wGju6FC0+EznA58NG2blfB2CAJjTdjxqgSNGZQeFHHaD6wFLTP4loQy1i2XYBo2i4dnrx+wOf1ZymfwSwNSoAA6OmtM8uCbBUvUSERFQAAgay0n7VbAbGAeyJBMA8m3WdjQR4SwNU/TkIB6IAMOOJ6doHa98dWAOWpt8l4EgjwNwuqZ50N7f8R2RmxfczmUrpTXNA9ZRLfA9EYr4hg7+Z0umq3ufjiYQnlBsA7Q6NYGYwho2yc7VRn5aPZKGDQzZcdcBfng8uMC67a9cAAAAASUVORK5CYII=) no-repeat;
      background-size: .36rem .36rem;
      background-position: 0 center;
      text-indent: .6rem;
      font-size: .32rem;
    }
    & .border-bottom{
      bottom: -.2rem;
    }
    .ticket-item {
      position: relative;
      height: 1.76rem;
      top: .2rem;
      padding: .2rem .2rem .24rem 0;
      display: flex;
      flex-flow: row nowrap;
      .ticket-left {
        flex: 2.92;
        .ticket-left-title {
          margin-right: .1rem;
          line-height: .52rem;
          padding: 0;
          font-size: .3rem;
        }
        .ticket-left-tip {
          .tip-img {
            display: inline-block;
            width: .2rem;
            max-height: .32rem;
            margin-right: .04rem;
            vertical-align: 0;
          }
          .tip-img-text {
            font-size: .2rem;
          }
        }
        .ticket-left-desc {
          .ticket-left-label {
            @include common-label(#00afc7);
            .ticket-left-tagicon {
              display: inline-block;
              width: .2rem;
              max-height: .32rem;
              margin-right: .04rem;
              vertical-align: 0;
            }
          }
          & .border::before {
            @include border(#00bcd454);
          }
          .ticket-left-label:not(:last-child) {
            margin-right: .1rem;
          }
          .ticket-left-label-1 {
            @include common-label(#f55);
            /* #ffb2b2*/
             .border::before {
              @include border(#ffb2b2);
            }
          }
        }
      }
      .ticket-right {
        flex: 1;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: #ff9800;
        .ticket-right-sale{
          height: .4rem;
          font-size: .24rem;
          line-height: .28rem;
          .ticket-price-num{
            margin-left: .04rem;
            font-size: .4rem;
            line-height: .4rem;
          }
        }
        .ticket-right-btn{
          width: 100%;
          display: block;
          height: .6rem;
          color: #fff;
          font-size: .28rem;
          line-height: .6rem;
          border-radius: .08rem;
          background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
        }
      }
    }
  }
</style>
