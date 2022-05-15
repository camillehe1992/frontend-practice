<template>
  <div class="com-footer">
    <div class="footer-content">
      <div class="footer-link clearfix">
        <div
          v-for="col in 5"
          :key="col"
          class="footer-column"
        >
          <dl
            v-for="item in list.filter(i => i.col === col)"
            :key="item.id"
          >
            <dt>{{ item.title }}</dt>
            <dd
              v-for="i in item.items"
              :key="i.id"
            >
              <a href="">{{ i }}</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="footer-copyright clearfix">
        <div class="footer-copyright-left">
          <p>
            ©美团网团购 meituan.com
            <a href="">京ICP证070791号</a>
            <a href="">京ICP备10211739号</a>
          </p>
          <p>
            <a href="">广播电视节目制作经营许可证（京）字第03889号</a>
          </p>
          <p>
            <a href="">食品经营许可证</a>
            <a href="">互联网药品信息服务资格证</a>
          </p>
          <p>
            <a href="">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
          </p>
        </div>
        <div class="footer-copyright-right">
          <a href="">京公网安备11010502025545号</a>
          <div class="footer-copyright-cert">
            <a
              class="bus-license"
              href=""
            >
              <img
                src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"
                alt=""
              >
              <p>北京三快科技有限公司</p>
            </a>
            <a
              href=""
              class="sp-ft sp-ft--knet"
              title="可信网站认证"
              target="_black"
            >可信网站</a>
            <a
              href=""
              class="sp-ft sp-ft--record"
              title="备案信息"
              target="_black"
            >备案信息</a>
            <a
              href=""
              class="sp-ft sp-ft--12315"
              title="12315消费争议"
              target="_black"
            >12315消费争议</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { title: '用户帮助', col: 1, items: ['申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告', '消费者权益保障'] },
          { title: '美团服务', col: 1, items: ['美团外卖', '美团酒店', '猫眼电影', '美团配送', '美团云', '大众点评', '美团民宿', '无人配送'] },
          { title: '商家合作', col: 2, items: ['美团餐饮商户中心', '美食商家入驻(非外卖)', '美团外卖开店申请', '美团收银官网', '外卖配送加盟申请', '美食商家入驻(非外卖)', '美团外卖开店申请', '美团收银官网', '外卖配送加盟申请', '美食商家入驻(非外卖)', '美团外卖开店申请', '美团收银官网', '外卖配送加盟申请'] },
          { title: '代理商加盟', col: 3, items: ['美团外卖代理商招募', '美团外卖代理商招募', '美团外卖代理商招募', '美团外卖代理商招募', '美团外卖代理商招募', '美团外卖代理商招募', '美团外卖代理商招募'] },
          { title: '美团规则', col: 3, items: ['规则中心', '规则目录', '规则评议院'] },
          { title: '关注美团', col: 4, items: ['美团新浪微博'] },
          { title: '公司信息', col: 4, items: ['关于我们', '关于我们', '关于我们', '关于我们', '关于我们'] },
          { title: '廉政举报', col: 4, items: ['廉正举报平台'] },
          { title: '知识产权', col: 4, items: ['知识产权维权平台'] },
          { title: '消费者服务热线', col: 5, items: ['外卖消费者：10109777', '外卖消费者：10109777', '外卖消费者：10109777'] },
          { title: '商家服务热线', col: 5, items: ['外卖&餐饮商家：10105557 休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107'] },
          { title: '投诉举报热线', col: 5, items: ['违法和不良信息举报电话：4006018900 举报邮箱：tousujubao@meituan.com'] },
          { title: '商家自助入驻美团入口', col: 5, items: [] },
          { title: '供应商注册入口', col: 5, items: [] }
        ],
        layout: [

        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/footer.scss";
</style>