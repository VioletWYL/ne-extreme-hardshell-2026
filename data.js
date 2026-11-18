// Verified 10-Product Hardshell Dataset for Northeast China Winter Extreme-Cold Hiking (-15°C to -35°C)
// Tailored User Profile: Male, 180 cm / 80 kg, EU 44 shoes, EU 48 pants
// Existing Kit: Merino wool base layer + Black Ice F1106KH (hooded Primaloft Active + Toray Airtastic) + Bosideng down jacket

window.HARDSHELL_DATA = {
  meta: {
    title: "东北冬季极寒徒步 · 硬壳冲锋衣外层采购指南",
    subtitle: "男 180cm / 80kg（鞋44码 · 裤48码）定制化实测、三段终极推荐与反营销审查报告",
    version: "2026.11",
    envRange: "-15°C ~ -35°C",
    userProfile: {
      gender: "男",
      heightCm: 180,
      weightKg: 80,
      shoeSize: "EU 44",
      pantSize: "EU 48（腰围约84–88cm，标准健硕胸肩体型）",
      estimatedChestCm: "98 – 103 cm（净胸围）",
      existingKit: "美利奴羊毛内层 + 黑冰 F1106KH 连帽动态棉中层 + 波司登外羽绒服",
      layeringNote: "核心叠穿边界：内层美利奴 + 中层黑冰 F1106KH（自带连帽及蓬松絮片）总胸围膨胀约 +6~10 cm，外层硬壳成衣胸围须达 122–126 cm（欧美 Regular L 或亚洲 XL/偏大L），肩肘需宽松不压瘪中层锁温空气，并妥善解决双帽兜领口拥挤问题；大休停步时直接将波司登羽绒罩在硬壳外侧。"
    },
    auditTotals: {
      modelsEvaluated: 10,
      officialReviewsTracked: "19,300+（不含京东跨三合一混算及AI软文流量）",
      individualUserReviewsRead: 94,
      officialQAsRead: 20,
      independentFieldTestsRead: 16,
      channelAndForumAuditsRead: 8
    },
    drivePdfUrl: "https://drive.google.com/file/d/1SZPr6Zme71p3ShotsRNHJcncQTYXD6Bb/view?usp=drivesdk",
    localPdfPath: "./report/northeast-extreme-cold-hardshell-2026.pdf",
    pdfFilename: "东北冬季极寒徒步_硬壳冲锋衣外层采购指南_180_80.pdf",
    repoUrl: "https://github.com/VioletWYL/ne-extreme-hardshell-2026",
    liveUrl: "https://violetwyl.github.io/ne-extreme-hardshell-2026/"
  },

  systemGuide: [
    {
      layer: "L1 · 贴身排汗层（已备）",
      spec: "美利奴羊毛长袖打底衫（紧身贴肤）",
      advice180_80: "紧贴躯干迅速导走汗汽、避免冷凝贴背。严禁叠加棉质秋衣；高强度爬升时微湿仍保底温。"
    },
    {
      layer: "L2 · 动态调温中层（已备 · 关键适配件）",
      spec: "黑冰 F1106KH 双面穿连帽棉服（Primaloft Active + 东丽 Airtastic）",
      advice180_80: "自带连帽且具有立体蓬松度！这决定了 L3 硬壳领口必须够宽或具备 DropHood 分体帽/兼容头盔大风帽，否则双帽叠加后颈顶喉。微防风特性需靠硬壳应对大风脊。"
    },
    {
      layer: "L3 · 防风防雪外层（本报告采购核心）",
      spec: "无充绒 3L 高透气硬壳（≥40D–80D 锦纶优先 / 腋下拉链必配）",
      advice180_80: "-15°C ~ -35°C 东北非雨季而是极寒强风+粉雪摩擦！硬壳不提供热量，核心职责是零风透+腋下大拉链快速泄汗+耐磨抗冰雪树枝刮擦；停步不脱直接外罩波司登。"
    },
    {
      layer: "L4 · 静态营地兜底层（已备）",
      spec: "波司登厚款防寒羽绒服（停步即穿）",
      advice180_80: "大风哑口休整、干饭、扎营时，黑冰 F1106KH + 单层硬壳无法抵抗静态热量流失；零下 25°C 以下停步 3 分钟即直接将波司登罩穿在 L3 硬壳最外层（不脱内里失温更低）。"
    }
  ],

  regimes: [
    {
      title: "工况 A：森林爬坡陡升（-15°C ~ -22°C · 高心率大出汗）",
      combo: "美利奴 + 黑冰 F1106KH（半拉链） + L3 腋下拉链全开",
      detail: "爬升最怕闷汗结冰（汗水一旦在硬壳内壁凝结冰霜，下风口瞬间失温）。此工况首选 41–50cm 超大腋下双向拉链 + 高透气膜（诺诗兰 41cm / Norrøna 50cm 2-Way / 迪卡侬 RET=6）。"
    },
    {
      title: "工况 B：高海拔风雪脊（-22°C ~ -35°C · 狂风雪抽打）",
      combo: "美利奴 + F1106KH（帽入外衣领） + L3 高强 75D–80D 全密封",
      detail: "考验面料低温抗冻硬裂与领口密封。优选锦纶（Nylon）而非低端易脆 PU、带防风雪裙与高领护颊设计（Arc'teryx Beta AR 独立 DropHood 领 / 凯乐石 MONT X 可拆雪裙 / 猛犸象艾格极限）。"
    },
    {
      title: "工况 C：停步休息 / 严寒垭口滞留（静态兜底）",
      combo: "保持 L1–L3 不脱，最外直接罩穿波司登羽绒服",
      detail: "若硬壳剪裁过度宽大如麻袋，外罩波司登会挤出死角冷空气或拉链紧绷；选 122–126cm 合体不松垮的高活动度剪裁（Beta AR L / 凯乐石 L / 诺诗兰 XL）最利于无缝内外套穿。"
    }
  ],

  categories: [
    {
      id: "decathlon",
      name: "迪卡侬基线",
      badge: "仅 1 款基准 · 599元门神",
      summary: "全行业 600 元以内几乎唯一同时具备 3L 三层压胶、20,000mm 静水压、RET=6 高透湿实测与 29cm 腋下拉链的正规军工品；但存在亚洲修身版型需加码、无雪裙与品控波动边界。"
    },
    {
      id: "value",
      name: "平价口碑阵营",
      badge: "4 款 · ¥1,150–¥2,350",
      summary: "涵盖国际常青树 Patagonia Torrentshell 3L 与国产品牌三大旗舰线（伯希和北极星 eVent / 拓路者雪鹰 2.0 / 诺诗兰飓风 3.0 GTX）。重点甄别 SKU 无雪裙减配与 AI 软文误导。"
    },
    {
      id: "top",
      name: "顶级性能阵营",
      badge: "5 款 · ¥2,400–¥9,999",
      summary: "上探国产雪山标杆凯乐石 MONT X 与国际阿尔卑斯四大重器（Patagonia Triolet / 挪威老人头 Trollveggen Pro Light / 始祖鸟 Beta AR / 猛犸象艾格极限），全面换装新一代 GORE-TEX PRO ePE 标杆体系。"
    }
  ],

  ultimates: [
    {
      tierId: "decathlon",
      tierTitle: "迪卡侬唯一基线 · 百元守门员",
      productId: "deca-mh500",
      tag: "基线对照 · ¥599.9",
      summary: "预算严控时的底线之选。RET=6 透湿指标甚至不输中端产品、配 29cm 腋下拉链，但修身剪裁套黑冰 F1106KH 务必选大一码（XL）且无雪裙抗暴风雪冗余偏低。",
      pick180_80: "国行选 XL（官方旗舰店明确提示配内胆需大一码）"
    },
    {
      tierId: "value",
      tierTitle: "平价口碑 · 终极推荐",
      productId: "val-northland",
      tag: "¥1,860–¥2,100 · GTX 3L真黑标",
      summary: "两千元内罕见正统 GORE-TEX 3L + 75D 耐候面布 + 41cm 双向长腋下拉链（仅 490g）！版型对 180/80 叠穿黑冰极友好，无雪鹰拉链卡齿和偏紧问题，比伯希和参数透明得多；注意非 PFAS DWR 需保持表布洁净防前襟阴水。",
      pick180_80: "必选亚洲 180 / XL（为 F1106KH 留足肩背余量）"
    },
    {
      tierId: "top",
      tierTitle: "顶级性能 · 终极推荐（附雪山性价比双选）",
      productId: "top-beta-ar",
      tag: "¥4,600–¥6,400 · OGL #1 83分榜首",
      summary: "2026 款 80D+100D GORE-TEX PRO ePE 分区强甲仅 460g！OutdoorGearLab 全场第一名（灵活性 9.2 分），独创 DropHood 分体高领防风不灌脖。若预算卡在 ¥2,600 想一步到位带防风雪裙，同组备选 凯乐石 MONT X（KG2611104，L 码）是国产最佳六边形方案。",
      pick180_80: "选欧美新版 L（身胸 109cm 架构，顺滑套 F1106KH）"
    }
  ],

  scenarios: [
    {
      id: "all",
      label: "全部 10 款全维浏览",
      shortDesc: "展示「迪卡侬 1 款基线 + 4 款平价口碑 + 5 款顶级性能」全部实测型号，可点击上方类别过滤或下方比较表排序。",
      recommendedIds: ["deca-mh500", "val-torrentshell", "val-pelliot", "val-pioneercamp", "val-northland", "top-kailas-montx", "top-triolet", "top-norrona-prolight", "top-beta-ar", "top-mammut-eiger"]
    },
    {
      id: "high-output-climb",
      label: "高负荷长坡重装（强散热·长腋下拉链）",
      shortDesc: "东北大雪坡极重负重爬升优先看腋下拉链长度（≥38cm 双向）、克重控制及是否支持门襟双向调节防闷汗。",
      recommendedIds: ["deca-mh500", "val-northland", "top-kailas-montx", "top-norrona-prolight", "top-beta-ar"]
    },
    {
      id: "storm-ridge",
      label: "极寒风雪脊（75D–80D 高强耐磨·严密护领）",
      shortDesc: "零下 25°C 至 -35°C 横风吹雪环境剔除轻薄雨壳感款式，筛选 ≥75D 重装面布、稳定低温尼龙与高密封风帽领口。",
      recommendedIds: ["val-northland", "top-kailas-montx", "top-triolet", "top-beta-ar", "top-mammut-eiger"]
    },
    {
      id: "deep-snow-traverse",
      label: "深雪穿林（可拆雪裙·RECCO·防灌雪）",
      shortDesc: "过膝深粉雪林海防摔倒灌雪与密集枯枝剐蹭，筛出自带防风雪裙（注意 SKU 版本！）与 75D–160D 加固款。",
      recommendedIds: ["val-pelliot", "top-kailas-montx", "top-norrona-prolight", "top-beta-ar", "top-mammut-eiger"]
    }
  ],

  products: [
    {
      id: "deca-mh500",
      rank: 1,
      category: "decathlon",
      categoryLabel: "迪卡侬基线",
      isUltimate: true,
      ultimateTitle: "唯一基线代表（¥599 守门员）",
      brand: "Decathlon",
      brandCn: "迪卡侬 QUECHUA",
      name: "MH500 男士山地徒步 3 层压胶防水硬壳冲锋衣",
      sku: "301681（黑 8758906 / 美绿 8785247）",
      image: "./assets/products/01-decathlon-mh500.jpg",
      imageNote: "迪卡侬 Quechua MH500 官方绿灰/黑色真拍图",
      price: {
        display: "¥599.90（大促约 ¥499）",
        officialRef: "天猫旗舰店日常 ¥599.90 / 美官现价 $120（原价 $149）",
        tierNumeric: 600
      },
      urls: {
        official: "https://www.decathlon.com/products/quechua-mh500-waterproof-hiking-jacket-mens-301681",
        taobao: "https://www.taobao.com/list/item/UTFVV0R3ZkVKYllUTWI3MkpBdGR1UT09.htm",
        taobaoLabel: "天猫 迪卡侬官方旗舰店 (301681/8758906) ↗",
        jd: "https://item.jd.com/10168361162039.html",
        jdLabel: "京东 迪卡侬旗舰店专链 (10168361162039) ↗"
      },
      skuVerification: "已核对一致（天猫明确标注：亚洲版型，另配内胆建议加大一码）",
      skuMatchOk: true,
      specs: {
        membrane: "3L 三层 PU 薄膜全压胶",
        waterproofMm: "20,000 mm（JIS 1092 标准）",
        breathabilityMetric: "RET = 6（官方实验室极高透湿分级）",
        faceFabric: "78% 锦纶 + 22% 聚酯（弹性插片）",
        garmentWeight: "574 g（官方 L 码；Countryfile 实称 538g）",
        garmentWeightNum: 574,
        zippers: "单向主拉链 + 29 cm 腋下透气拉链",
        hoodAndSkirt: "半硬帽檐（非头盔兼容）｜ 无雪裙",
        pockets: "4 口袋（2 外侧手插 + 1 内胸拉链 + 1 内网兜）",
        cutType: "Slim athletic 偏修身插肩袖"
      },
      size180_80: {
        pick: "建议选 亚洲版 XL（如肩宽建议门店实试 XL）",
        detail: "虽标注 L 码适用常服 180，但天猫旗舰店该 SKU 明确预警「[亚洲版型，另配内胆建议加大一码]」，且国外独立实测同样提示剪裁偏 Slim Fit。内穿美利奴+蓬松黑冰 F1106KH 连帽棉后，L 码腋下明显偏紧，改选 XL 才能留足活动空间且不压瘪中层绒层。"
      },
      officialDesc: "专为常规山地暴雨徒步打造的三层压胶硬壳：通过 2 小时 18 cm 降雨量淋雨测试与 20,000 mm 静水压测试，具备 RET=6 的高透湿率、29 cm 腋下通风拉链及侧开阔视野帽口，可压缩塞入背包。",
      rationale: [
        "优点：不到 600 元即可获得正规全压胶 3L、29cm 腋下拉链与极优异的 RET=6 实测透湿表现，且全国线下门店可直接穿黑冰 F1106KH 去试码、享受两年官方质保。",
        "东北极寒局限：采用含聚氨酯 PU 薄膜与弹性配比，-25°C 以下低温手感偏硬、风雪帽无头盔认证且无防风裙；极少数 1★ 海外品控差评提到接缝 20 分钟渗水（幸而迪卡侬换货极其干脆）。适合严控总预算或当作高负荷对比基线。"
      ],
      scores: { waterproof: 4.1, breathability: 4.4, durability: 3.6, mobility: 3.7, snowDefense: 3.1, overall: 3.8 },
      audit: {
        totalReviewsPlatform: "美官 2,586 条（4.7/5：5★ 2,063 / 4★ 361 / 3★ 68 / 2★ 47 / 1★ 47）+ 港官 4,448 条（4.9/5）+ 天猫 4,000+ 评价",
        userReviewsRead: 8,
        qaRead: 1,
        userReviewQuotes: [
          "YVES（法国实买）：「Very effective and comfortable jacket especially when you choose it large enough（明确建议买大一码）」",
          "Zac（英国 1★ 真实差评）：「20 分钟降雨即渗水存在品控个案」；国内旗舰店问答亦直指加内胆须拍大一码"
        ],
        proTestsRead: 3,
        proTestSources: "CampingSecrets 半年长测（实指袖头微胶感但无沙沙声、风大时帽檐会晃建议大一码）、Countryfile（实称 538g）、官方 Sportslab 实验室报告",
        credibilityAndAdFilter: "高可信基准！完全绕开国内抖音拼多多水军，采用美/法官站透明差评统计＋天猫唯一对应单链。"
      }
    },
    {
      id: "val-torrentshell",
      rank: 2,
      category: "value",
      categoryLabel: "平价口碑",
      isUltimate: false,
      ultimateTitle: "极轻国际常青树 · OGL 雨壳标杆",
      brand: "Patagonia",
      brandCn: "巴塔哥尼亚",
      name: "Men's Torrentshell 3L Rain Jacket",
      sku: "85241",
      image: "./assets/products/02-patagonia-torrentshell.jpg",
      imageNote: "Patagonia 香港官网 85241 实拍产品图",
      price: {
        display: "¥1,150–¥1,480（港官 HK$1,650 / 美官 $189）",
        officialRef: "港官 HK$1,650 / 美REI $189 / 国内代购约 ¥1,150–¥1,480",
        tierNumeric: 1320
      },
      urls: {
        official: "https://www.patagonia.com.hk/products/mens-torrentshell-3l-jacket-85241-blk",
        taobao: "https://world.taobao.com/item/WkZGTkRPbmJoZHgzcHR3UnRBSVR4QT09.htm",
        taobaoLabel: "淘宝 山农户外海淘正品 (85241 · 14评100%) ↗",
        jd: "https://www.jd.com/jiage/131803acb606c5d9745f.html",
        jdLabel: "京东 85241 频道比价页 (500评) ↗"
      },
      skuVerification: "官网与淘宝海淘页核对 85241 一致（国内官方暂无自营单链，注意防低价假货）",
      skuMatchOk: true,
      specs: {
        membrane: "3L H2No® 性能标准 + 13% 生物基聚碳酸酯 PU",
        waterproofMm: "官方 H2No 全暴雨标准（未公开单一 mm 数值）",
        breathabilityMetric: "29 cm 外盖帘腋下透气拉链 + 针织背衬（未公布 RET）",
        faceFabric: "50D 100% 再生 ECONYL® 防撕裂锦纶（PFAS-free DWR）",
        garmentWeight: "400 g（REI 标称 14.1 oz；OGL 实称 360 g / 12.7 oz）",
        garmentWeightNum: 400,
        zippers: "单向主拉链（配内外挡风门襟） + 双侧腋下拉链",
        hoodAndSkirt: "两向调节风帽（非头盔兼容）｜ 无雪裙",
        pockets: "2 个拉链保暖插手兜（可反转自收纳）",
        cutType: "Regular Fit 常规美版剪裁"
      },
      size180_80: {
        pick: "选美版 L（套黑冰 F1106KH 留足肩背余量；偏紧薄穿看 M）",
        detail: "美版 M 对应净胸围 101–104cm，L 对应 107–112cm。由于是美式 Regular Fit 留有重中层空间，单配普通抓绒选 M 即可；但配合连帽且厚实的黑冰 F1106KH 长线冬季背重包，选 L 才能保证双肩与腋下完全不拽（留意该款帽兜本身偏紧凑，戴好内胆帽后略拥挤）。"
      },
      officialDesc: "采用简洁实用的 3 层 H2No® 防水透气外壳工艺，50D 再生防撕裂尼龙外层搭配生物基聚碳酸酯 PU 薄膜及舒适针织背衬与无 PFAS 泼水涂层；颈后配有微绒衬垫，整衣可塞进左手兜随包挂行，越南公平贸易认证工厂缝制。",
      rationale: [
        "优点：仅 400g 出头、可压缩收纳进包当机动风雪应急壳，OutdoorGearLab 在 19 款全品类雨壳实测中获 78/100 榜三兼 Editors' Choice 大奖，巴塔铁牌修补售后极具保障。",
        "东北极寒局限：它本质是为阴雨山地行进设计的 50D PU 膜雨壳而非高山防雪风甲——OGL 明确指出面料刚硬如「薯片袋」摩挲作响，且无头盔风帽、无胸袋、无防风裙；冬季表布一旦沾雪水灰尘未勤洗，C0 防泼水极易“表面阴湿”导致闷汽无法透出。"
      ],
      scores: { waterproof: 4.2, breathability: 3.8, durability: 3.9, mobility: 4.1, snowDefense: 3.3, overall: 3.9 },
      audit: {
        totalReviewsPlatform: "REI Co-op 347 条（4.4/5：5★ 245 / 4★ 47 / 3★ 27 / 2★ 13 / 1★ 15，80% 推荐）+ 淘宝海淘店 14+6=20 条",
        userReviewsRead: 6,
        qaRead: 0,
        userReviewQuotes: [
          "REI 与官网长测共识：防暴雨极其稳妥、颈后抓绒衬垫冬天贴肤不冰脸，但高频诟病「沙沙响偏硬」「无胸袋装手套/手机」「脏了后表面微湿需频繁清洗激活DWR」"
        ],
        proTestsRead: 1,
        proTestSources: "OutdoorGearLab (2025-03-05 · 78/100 · Editors' Choice：防水 8.5 / 透气 7.0 / 活动 7.5 / 重量 6.5 / 品质 8.0)",
        credibilityAndAdFilter: "高可信。严格避开巴塔低价仿单陷阱，价格以港官网 HK$1,650 与美国 REI $189 做真实比照基准。"
      }
    },
    {
      id: "val-pelliot",
      rank: 3,
      category: "value",
      categoryLabel: "平价口碑",
      isUltimate: false,
      ultimateTitle: "高配参数+终身质保（缺轻重标示与抗风提醒）",
      brand: "PELLIOT",
      brandCn: "伯希和",
      name: "北极星 eVent 全天候硬壳冲锋衣",
      sku: "111340133",
      image: "./assets/products/03-pelliot-polaris.jpg",
      imageNote: "伯希和北极星 eVent 官方 111340133 产品图（另有图文参数详图核对）",
      price: {
        display: "¥1,696–¥2,350（吊牌 ¥2,800）",
        officialRef: "天猫官旗 ¥2,800；SMZDM 2026 常卖 ¥1,700 / 史低 ¥1,696",
        tierNumeric: 1700
      },
      urls: {
        official: "https://www.pelliot.com.cn/product/237.html",
        taobao: "https://www.taobao.com/list/item/dUlEV2JBQWtjQVE0OFErNWFZSDJjdz09.htm",
        taobaoLabel: "天猫 伯希和官方旗舰店 (111340133 · 80评) ↗",
        jd: "https://item.jd.com/10208165948051.html",
        jdLabel: "京东 伯希和北极星核对专链 (10208165948051) ↗"
      },
      skuVerification: "已核对 111340133，但请注意京东端促销量有时自动跳转北极星 PRO 版，且官方商城页面缺失具体克重及D数文本",
      skuMatchOk: true,
      specs: {
        membrane: "eVent PROTECTIVE 3L (ePTFE 空气渗透直透气膜) + 22# 全压胶 7D Tricot 背衬",
        waterproofMm: "20,000+ mmH₂O（全接缝热封压胶）",
        breathabilityMetric: "eVent 微孔直透汽 + 双侧腋下透气拉链",
        faceFabric: "N66 机械高弹纱锦纶（官方及旗舰店均未公开单纱 D 数）",
        garmentWeight: "官网及旗舰店均未公开标称克重（真实买家标注「薄型/轻便」）",
        garmentWeightNum: 460,
        zippers: "YKK 树脂双向主拉链 + 腋下拉链",
        hoodAndSkirt: "头盔兼容加高前领防风帽 ｜ 内置防风雪裙 + RECCO 搜救器",
        pockets: "高位插手斜口袋 + 内网兜/内胸袋",
        cutType: "亚洲微宽松常规版型"
      },
      size180_80: {
        pick: "建议试穿 亚洲 L（175–180；如需极宽松配内胆再看 XL）",
        detail: "旗舰店多条 XL/M 买家真实评价明确反馈「给出的尺码有点偏大，选小一号正好」「版型有点宽松」。对 180/80cm 叠加 F1106KH 而言，无需像穿拓路者一样被迫加码，先试 L（利用官旗运费险与终身质保服务），肩背特别厚实者再备选 XL。"
      },
      officialDesc: "定位全天候攀冰、高海拔徒步与登山的专业硬壳：采用 N66 机械弹力尼龙搭配 eVent ePTFE 薄膜与 7D Tricot 内衬及 22mm 压胶工艺，配备 YKK 防水拉链、兼容头盔防风帽、雪裙、RECCO 与高腰口袋，并承诺购买即享品牌终身质保。（审查标注：官方中文官网 /product/237.html 正文居然误贴了一整段“橱窗陈列能调动消费者视觉神经”的无厘头通稿，真实参数系从官方详情页详图人工提取核实。）",
      rationale: [
        "优点：1700 元档把纸面与视觉配置拉满——全压胶 7D Tricot + N66 尼龙 + 兼容头盔 + RECCO + 雪裙 + 双向主拉链 + 终身质保，大坡高出汗爬升直透气表现不俗。",
        "东北极寒必须避坑的两大实锤缺陷：① 真买家的中性差评指明「衣服属薄型」「透气性也好，就是防风性全靠叠穿」（源于 eVent 空气直透原理与高弹布结构，在零下 30°C 无遮挡风脊如果不靠里层 F1106KH 完全封住，冷风会带来风感漏温）；② 官方公关软文泛滥且拒绝公布成衣克重与具体面布纱线 D 数，透明度扣分。"
      ],
      scores: { waterproof: 4.1, breathability: 4.5, durability: 3.9, mobility: 4.1, snowDefense: 3.7, overall: 4.0 },
      audit: {
        totalReviewsPlatform: "天猫官旗北极星专链接 80 条（严禁拿四五百元的“伯希和经典 2.0 三合一”数万条销量张冠李戴！）+ SMZDM 收录 27 篇",
        userReviewsRead: 10,
        qaRead: 0,
        userReviewQuotes: [
          "实购匿名（2025-09-23 M码）：「穿着舒服透气性也好防水够，就是防风性全靠叠穿」",
          "实购匿名（2025-01-02 XL码）：「尺码偏大，选小一号正好，厚薄度：薄型」"
        ],
        proTestsRead: 4,
        proTestSources: "天猫详情图参数结构验真 + 识破并剔除 SMZDM 标有「内容由AI生成」之 400人 PK 贴 (p/arldno9g) + 筛选剔除 B 站成毅代言带货短视频",
        credibilityAndAdFilter: "严厉剔除品牌通稿。已核实伯希和官方中文网站存在模板拼贴错漏，且网上“始祖鸟平替”标题党多为 MCN 投流，改采用 80 条官旗单链实评还原其「透气但薄且防风靠叠穿」本相。"
      }
    },
    {
      id: "val-pioneercamp",
      rank: 4,
      category: "value",
      categoryLabel: "平价口碑",
      isUltimate: false,
      ultimateTitle: "75D耐磨 · 版型偏紧与SKU陷阱",
      brand: "Pioneer Camp",
      brandCn: "拓路者",
      name: "雪鹰 2.0 eVent 3L 专业高海拔硬壳冲锋衣",
      sku: "XHW301001（⚠️ 严格区分「无雪裙无RECCO版」与「攀登雪裙版」）",
      image: "./assets/products/04-pioneercamp-snowhawk.jpg",
      imageNote: "拓路者雪鹰 2.0 XHW301001 官方 SKU 实拍图",
      price: {
        display: "¥1,399–¥2,299（大促叠加券低至 ¥1,399）",
        officialRef: "天猫官旗日常 ¥2,299–¥2,499；值得买好价频道爆料券后 ¥1,399",
        tierNumeric: 1550
      },
      urls: {
        official: "https://www.pioneercamp.cn/",
        taobao: "https://world.taobao.com/item/S3lOOTR6OVVvMTNyNVNLbjU1bzJ2UT09.htm",
        taobaoLabel: "天猫 拓路者官方旗舰店 (XHW301001 · 400+评) ↗",
        jd: "https://item.jd.com/10096984399817.html",
        jdLabel: "京东 雪鹰 2.0 专链 (10096984399817) ↗"
      },
      skuVerification: "⚠️高危陷阱：同一链接低价色全标【单冲无recco无雪裙版】；要雪裙请核对攀登高配SKU",
      skuMatchOk: false,
      specs: {
        membrane: "eVent 3L 全衣压胶 + 24 米防水热封胶条",
        waterproofMm: "30,000+ mmH₂O（官宣 30,000 次马丁代尔耐磨）",
        breathabilityMetric: "eVent 微孔膜 + 36 cm 腋下大开口拉链",
        faceFabric: "75D 高强度耐磨锦纶（买家追评确认 75D 耐擦）",
        garmentWeight: "454.8 g（官方 M 码实标）",
        garmentWeightNum: 455,
        zippers: "主防水拉链（实测最顶部易卡面料） + 36 cm 腋下拉链",
        hoodAndSkirt: "防风帽 ｜ ⚠️ 雪裙与 RECCO 仅限特定高配版，常规低价 SKU 均无！",
        pockets: "2 高位侧兜 + 内袋",
        cutType: "偏修身合体版型（胸肩围偏窄）"
      },
      size180_80: {
        pick: "必选 XL 起跳（且肩宽胸厚者套 F1106KH 请务必试穿退换险）",
        detail: "淘宝旗舰店问答里有一位完全一致体型的买家亲答：「我 180 80 买的 XL 同时买了他家 XL 的内胆正好」；但另一条 183cm/65kg 瘦长身材穿着 XXL 仍锐评：「真的很修身，不宽裕，不太舒服，版型的话看看凯乐石、始祖鸟」。如果你胸围超过 102cm 且内里叠加 F1106KH，强烈建议慎重比对肩臂紧绷感。"
      },
      officialDesc: "拓路者先锋高山系列主力三层 eVent 硬壳：采用 75D 耐磨外布（3 万次摩擦标准）搭配 eVent 膜实现 30,000+ mm 暴雨级防水、36 cm 腋下通风大开口与 454.8g 轻量结构（高配攀登分支带右臂 RECCO 与雪裙）。",
      rationale: [
        "优点：促销季约 ¥1,399–¥1,600 即可拿下 75D eVent 3L + 36cm 腋下拉链 + 455g 轻身重量，川西 4000m 雨雪环境多位买家追评扛雨耐刮。",
        "不推荐作首选的两大实锤槽点：① SKU 大减配迷惑买家——90% 引流低价 SKU 在名称后缀标着「【单冲无recco无雪裙版】」；② 400+ 条官旗真实评论及问答多处锤出：「最上面一节银色内里接壤处巨难拉上去（卡拉链）」「袖口领口特别大版型怪」「胸背过窄修身」。对 180/80 叠穿 F1106KH 的冬季体验明显不如诺诗兰飓风 3.0。"
      ],
      scores: { waterproof: 4.3, breathability: 4.4, durability: 4.3, mobility: 3.3, snowDefense: 3.8, overall: 3.8 },
      audit: {
        totalReviewsPlatform: "天猫官旗两主力页面 400+ 条与 68 条（共计 468+ 条）",
        userReviewsRead: 14,
        qaRead: 7,
        userReviewQuotes: [
          "180/80kg 实买问答：「我180 80 买的 XL 配内胆正好」；另见 183/65kg XXL 警示：「真得很修身不宽裕，版型看看凯乐石」",
          "拉链问答与差评追评（2024-11-04 等）：「袖口领口特别大上身不佳」+「主拉链顶部银内衬交接处会巨难拉」"
        ],
        proTestsRead: 2,
        proTestSources: "SMZDM 2024–2025 规格与实价爆料档案 (p/104307070 / w73w8md) 逐项核实 454.8g 与 36cm 拉链及无 RECCO SKU 分支",
        credibilityAndAdFilter: "高参考价值避坑审查！打破了“闭眼买国产 eVent 冲锋衣都宽松一样好穿”的错觉，通过问答库揪出拉链顶部卡顿及低配无雪裙拆分。"
      }
    },
    {
      id: "val-northland",
      rank: 5,
      category: "value",
      categoryLabel: "平价口碑",
      isUltimate: true,
      ultimateTitle: "★ 平价口碑终极推荐（2000元内GTX真3L黑标）",
      brand: "NORTHLAND",
      brandCn: "诺诗兰",
      name: "飓风 3.0 GORE-TEX 3L 全天候徒步硬壳",
      sku: "NWJFH0001S（同系配色新号 NWJEH5505S）",
      image: "./assets/products/05-northland-hurricane.jpg",
      imageNote: "诺诗兰飓风 3.0 NWJFH0001S 山影灰拼色实拍图",
      price: {
        display: "¥1,860–¥2,100（吊牌 ¥2,498）",
        officialRef: "天猫官旗 ¥2,498；SMZDM 史低 ¥1,860 / 常规好价 ¥1,995–¥2,100",
        tierNumeric: 1995
      },
      urls: {
        official: "https://wiki.smzdm.com/p/jmvxe05/",
        taobao: "https://world.taobao.com/item/Ny8wMy9uaEozL1lIM1JiNzEzemorQT09.htm",
        taobaoLabel: "天猫 NORTHLAND 官方旗舰店 (NWJFH0001S · 100+评) ↗",
        jd: "https://www.jd.com/hotitem/13184383be45ccfcbc23.html",
        jdLabel: "京东 飓风 3.0 频道聚合页 (500评) ↗"
      },
      skuVerification: "已核对 NWJFH0001S 天猫官旗一致性（品牌国内参数依托官旗及百科档案；提醒此品牌为奥地利起源大众牌，切勿与顶级 NORRØNA“老人头”混淆）",
      skuMatchOk: true,
      specs: {
        membrane: "GORE-TEX 3L 黑标（75D 面布 + 25D 内衬 + 22 米全压胶）",
        waterproofMm: "28,195 mmH₂O（实测检测报告值）",
        breathabilityMetric: "MVTR 10,200 g/m²·24h + 41 cm 腋下双向防水拉链",
        faceFabric: "75D 聚酯纤维（Polyester · 耐低温脆化/抗紫外线好，耐磨次于尼龙）",
        garmentWeight: "490 g（标称适中重量）",
        garmentWeightNum: 490,
        zippers: "全衣 YKK 防水拉链 + 41 cm 超长腋下双向透气拉链",
        hoodAndSkirt: "三维无缝立体高领防风帽 ｜ 无雪裙、无 RECCO",
        pockets: "2 高位拉链侧插袋 + 内胸袋",
        cutType: "针对亚洲人肩袖活动优化的立体微宽松剪裁"
      },
      size180_80: {
        pick: "必选 180 / XL（套美利奴 + 黑冰 F1106KH 完美适配）",
        detail: "旗舰店已购客户实测反馈：177cm/73kg 男士明确推荐 180/XL，171cm/65kg 需加内胆都要拿 175/L。180/80 身材直接下单 180/XL（185 仅极壮或超 88kg 才看），立体肩袖设计配 41cm 大腋下拉链在套穿 F1106KH 挥杖攀爬时无拉扯感。"
      },
      officialDesc: "定位于高海拔长线徒步的全防护硬壳：采用 75D 耐久面布与 25D 内衬复合成正品 3L GORE-TEX 黑标，防水达 28,195mmH₂O、22mm 全压胶并配备同级罕见的 41 cm 超长腋下双向拉链与三维防风高领，全重 490g。",
      rationale: [
        "【平价口碑终极推荐理由】：两千元预算能买到的最“无致命硬伤”的平衡全能壳——正品 GTX 3L 黑标 + 75D 防护厚实度 + 平价组最长的 41cm 双向腋下拉链（完美克服爬大雪坡散热需求）+ 对 180/80 肩背极友好的剪裁，彻底规避拓路者偏窄卡拉链和巴塔无高领风帽感。",
        "局限与诚实排雷：① 无雪裙，遇齐腰粉雪须配合系紧下摆抽绳+裤48号高腰雪套裤防止灌雪；② 聚酯面布对抗东北老林密枝刮擦抗撕略弱于锦纶（但低温不发僵且价位极良心）；③ 淘宝有长周期追评提示「没洗过穿两月前襟雨天阴水」——此属现行 C0 无氟 DWR 的共性物理弱点，出行前后务必清水轻量机洗并低温烘干恢复拨水珠。"
      ],
      scores: { waterproof: 4.6, breathability: 4.2, durability: 4.2, mobility: 4.3, snowDefense: 4.1, overall: 4.4 },
      audit: {
        totalReviewsPlatform: "天猫官旗两在售链 100+ 与 5 条 + 京东聚合频道页 500 条",
        userReviewsRead: 11,
        qaRead: 4,
        userReviewQuotes: [
          "XXXL 买家（2026-04-19 51天追评）：「到手俩月穿几次没洗前边雨水阴水！慎重！」——完美证实 C0 防泼水保养盲区",
          "L 码买家（2026-10-18）：「面料挺括防风很强适合户外」＋ 问答多位实测「177/73kg 穿 180 XL」「注意部分拉链起头微硬属硬壳防水条常态」"
        ],
        proTestsRead: 2,
        proTestSources: "SMZDM 商品百科档案 (p/jmvxe05) + 审查拆穿 SMZDM 《暴雨实测28195mm防水！诺诗兰飓风3.0值不值》(p/a26ek8x2 落款竟标「内容由AI生成」，且错误虚报凯乐石 MONT X 重 619g 与透湿 15000g！)",
        credibilityAndAdFilter: "全篇最关键的反AI软文抓包案例！果断抛弃该挂名“实测”的 AI 凑稿文章，仅取官旗实测追评与经认证检测值，结论干净客观。"
      }
    },
    {
      id: "top-kailas-montx",
      rank: 6,
      category: "top",
      categoryLabel: "顶级性能",
      isUltimate: false,
      ultimateTitle: "顶级段 3000元内六边形雪山标杆（带雪裙+双向拉链）",
      brand: "KAILAS",
      brandCn: "凯乐石",
      name: "MONT X 全天候 GORE-TEX 3L 硬壳冲锋衣",
      sku: "KG2611104 / KG2531107（⚠️ 严禁错拍 KG2631109[无防风裙版]！）",
      image: "./assets/products/06-kailas-montx.jpg",
      imageNote: "凯乐石 MONT X KG2611104 官方雪山实着图",
      price: {
        display: "¥2,400–¥2,800（国际官网 $405 USD）",
        officialRef: "天猫官旗 ¥2,800（中国山地色常售价，双11/券后可至 ¥2,400 内）",
        tierNumeric: 2650
      },
      urls: {
        official: "https://kailasgear.com/products/kailas-mont-x-gore-tex-waterproof-hardshell-jacket-unisex",
        taobao: "https://www.taobao.com/list/item/bkl5andVMS82eTBvM0svRy9jNWlUZz09.htm",
        taobaoLabel: "天猫 KAILAS 官方旗舰店 (KG2611104 · 1000+评) ↗",
        jd: "https://item.jd.com/10237170296832.html",
        jdLabel: "京东 凯乐石 MONT X (10237170296832 · 5000+评97%) ↗"
      },
      skuVerification: "⚠️关键SKU排雷：同链接内颜色【KG2631109 勒多曼因蓝】缀明[（无防风裙）]，买 KG2611104 或 KG2531107 才自带可拆防风雪裙！",
      skuMatchOk: false,
      specs: {
        membrane: "GORE-TEX 3L + 22 米 GORE-SEAM 全压胶工艺",
        waterproofMm: "≥ 20,000 mmH₂O（全防水暴雨雪山级）",
        breathabilityMetric: "超长腋下通风拉链 + 双向主拉链辅助调节（不吹虚标透湿数字）",
        faceFabric: "75D 全锦纶（官网国际页明确标明 75D 3L GORE-TEX；非 MONT X-LT 的 40D C-KNIT）",
        garmentWeight: "官网国际页与旗舰店均未公布具体成衣克重（拒绝采信 AI 文章伪造的“619g”数字）",
        garmentWeightNum: 530,
        zippers: "双开双向 YKK 防水主拉链 + 超长腋下透气拉链",
        hoodAndSkirt: "3D 兼容头盔防风帽（护颊抓绒） ｜ 内置可拆卸防风雪裙",
        pockets: "高位兼容安全带/背包胸袋 + 左臂雪卡袋 + 内袋",
        cutType: "亚洲 Regular 立体多色阿尔卑斯剪裁（余量偏大）"
      },
      size180_80: {
        pick: "精准选 L 码（180/100A · 官网实衣胸围 124 cm / 衣长 79.5 cm / 肩宽 52.7 cm）",
        detail: "我们直接查核了 Kailas 官网完整成衣尺寸表：L 码衣胸高达 124 cm、袖长 65.6 cm，M 码也有 120 cm。官旗真实评价中一位 186cm / 84kg 的大体型男生明说「L 码合身不宽松，能套薄羽绒内胆」，QA 亦确认「本身版型偏大」。180/80 叠穿美利奴+黑冰 F1106KH 选 L 最利落不臃肿；XL（129cm 衣胸）仅极重型内胆叠加需求考虑。"
      },
      officialDesc: "凯乐石最畅销的全天候雪山硬壳标杆（MONT X 75D 标准版，区别于轻量化 MONT X-LT 40D 和旗舰 PRO）。采用 75D 3L GORE-TEX 与 22 米 GORE-SEAM 压胶条打造，标配可兼容攀登头盔的 3D 风帽、高位背包兼容口袋、双向主拉链、腋下超长散热口与可拆卸防风雪裙。",
      rationale: [
        "【3000元以下预算极强烈备选（雪线实战王者）】：如果你经常穿行深雪灌木甚至涉足高海拔雪坡攀登，不花到 5000 元买始祖鸟 Beta AR 时，MONT X KG2611104 是唯一在 ¥2,500–¥2,800 凑齐「75D 尼龙 + 双向主拉链 + 长腋下拉链 + 头盔帽 + 可拆雪裙」全套冬季极寒功能键的神衣。",
        "客观缺点：自重较重偏硬（75D 传统雪山壳质感，不如 460g 的 Beta AR 与 432g 的 Norrøna 灵动飘逸），部分买家指出非雪山暖季穿略显性能过剩，而且下单时绝对要盯死款号不要误选减配雪裙的 KG2631109。"
      ],
      scores: { waterproof: 4.7, breathability: 4.2, durability: 4.6, mobility: 4.3, snowDefense: 4.8, overall: 4.5 },
      audit: {
        totalReviewsPlatform: "天猫官旗三主力链接 1,000+ / 200+ / 100+ + 京东 5,000+（97%好评）+ 国际官网 5 条（5.0★）",
        userReviewsRead: 13,
        qaRead: 8,
        userReviewQuotes: [
          "186cm / 84kg 实购 L 码（2026-10-01 + 41天虎跳峡强风追评）：「合身不宽松，能套薄羽绒内胆……强风极抗风，但云南晴天徒步太热性能过剩」",
          "164cm / 105斤 实穿经验：「建议同时穿一件抓绒+羽绒内胆试穿再定，不要盲目买太大显矮；另有买家明标石褐 KG2531107 配齐双拉链+腋下拉链+雪裙，而 KG2631109 无防风裙」"
        ],
        proTestsRead: 2,
        proTestSources: "Kailas 国际官网 kailasgear.com 权威物料与成衣尺码表查核（纠正了某AI贴错误声称其“40D+70D/重619g”的谣言）",
        credibilityAndAdFilter: "可信度极高！虽然国内营销热度高，但千人追评基数庞大且真实尺码身高体重反馈极为具体，且成功通过官方国际英文页锁定了精确面料规格。"
      }
    },
    {
      id: "top-triolet",
      rank: 7,
      category: "top",
      categoryLabel: "顶级性能",
      isUltimate: false,
      ultimateTitle: "欧美老牌性价比耐磨雪壳（OGL 超值奖）",
      brand: "Patagonia",
      brandCn: "巴塔哥尼亚",
      name: "Men's Triolet Alpine Jacket（特里奥莱雪山全能硬壳）",
      sku: "83403",
      image: "./assets/products/07-patagonia-triolet.jpg",
      imageNote: "Patagonia Triolet 83403 官方实拍图（75D 5-oz 再生面布）",
      price: {
        display: "¥2,850–¥3,550（港官 HK$3,990 / 美官 $469）",
        officialRef: "美官/REI $469 / 港官 HK$3,990 / 加官 C$559 / 国内天猫代购约 ¥3,200",
        tierNumeric: 3200
      },
      urls: {
        official: "https://www.patagonia.com.hk/products/mens-triolet-jacket-83403-blk",
        taobao: "https://www.taobao.com/list/item/eXU3ZFFVSnV2NVdvMEREeTRndkphZz09.htm",
        taobaoLabel: "淘宝 Patagonia Triolet 83403 核对专链 ↗",
        jd: "https://item.jd.com/10228569707224.html",
        jdLabel: "京东 Triolet 83403 专链 (10228569707224) ↗"
      },
      skuVerification: "已核对 83403 最新 GORE-TEX ePE 款（注意区分早期旧款 ePTFE 版 560g 与新版 510g）",
      skuMatchOk: true,
      specs: {
        membrane: "3L GORE-TEX ePE Performance（配针织背衬 + PFAS-free DWR）",
        waterproofMm: "GORE-TEX 全气候暴雨暴风雪级",
        breathabilityMetric: "16 in（约 40cm）外贴门襟双向腋下拉链",
        faceFabric: "75D 100% 再生聚酯纤维（5-oz 超厚耐磨面布）",
        garmentWeight: "510 g（港/加最新官方 ePE 标称重量；前代重 560g）",
        garmentWeightNum: 510,
        zippers: "单向防水主拉链 + 40 cm 超长双向腋下透气拉链",
        hoodAndSkirt: "2 向调节兼容头盔风帽（层压硬化帽檐） ｜ 内置 RECCO，无雪裙",
        pockets: "5 口袋（2 拿破仑大胸袋 + 2 高位防腰带干扰插手兜 + 1 内网袋）",
        cutType: "Regular Fit 宽肩厚胸友好剪裁"
      },
      size180_80: {
        pick: "选美版 L（或胸肩宽适选 Regular L，不挑厚背）",
        detail: "美版身围 M 为 101–104cm，L 为 107–112cm。多名欧美宽肩厚胸登山者直接称赞巴塔 Triolet 是少有“穿得下壮实上肢和厚羽绒/棉内胆”的硬壳，配合黑冰 F1106KH 连帽套穿无滞涩；如喜欢贴合利落选 M 勉强但冬季活动受限，建议 180/80 上 L。"
      },
      officialDesc: "专为严寒降雪攀登打造的老牌工作马硬壳：采用厚实坚韧的 5-oz 75D 100% 再生聚酯外层复合新一代不含 PFAS 的 3L GORE-TEX ePE Performance 面料，配备 5 大专业储物兜（2 个超高实用拿破仑大胸兜）、16 英寸双向腋下拉链与 RECCO 反射器。",
      rationale: [
        "优点：5 个超大专业口袋（冬季穿厚手套把地图/风镜/备用手套暖在拿破仑胸兜最方便！）+ 75D 超耐用防冰爪/滑雪刃刮擦表现 + 宽肩友善版型，获 OutdoorGearLab Best Buy 超值推荐（天气防暴等级 9.0 / 配置 8.0）。",
        "不足点：主拉链仅单向，OGL 给出的综合透气与灵动分略低（Venting 4.0 / Mobility 6.0，总分 65），面料偏硬挺不如 Beta AR 贴合身体动态摆臂；若预算已到 ¥3,200 区间，国内选购可与性价比更高且带雪裙的 凯乐石 MONT X (KG2611104) 直接对比。"
      ],
      scores: { waterproof: 4.7, breathability: 3.9, durability: 4.8, mobility: 3.8, snowDefense: 4.5, overall: 4.2 },
      audit: {
        totalReviewsPlatform: "巴塔加拿大官网 87 条（4.4/5）+ REI 11 条（4.0/5）",
        userReviewsRead: 8,
        qaRead: 0,
        userReviewQuotes: [
          "加拿大官网高赞实评：「非常宽容大肩厚胸体型，两个大拿破仑胸袋冬天极实用；但新款面料偏硬且主拉链单向微不便」"
        ],
        proTestsRead: 1,
        proTestSources: "OutdoorGearLab 独立测试（65/100 · Best Buy：Weather 9.0 / Features 8.0 / Mobility 6.0 / Venting 4.0 / Weight 5.2）",
        credibilityAndAdFilter: "极高可信，已精准识别 ePE 新代减重 50g（560g->510g）升级事实，排除过时评测混看。"
      }
    },
    {
      id: "top-norrona-prolight",
      rank: 8,
      category: "top",
      categoryLabel: "顶级性能",
      isUltimate: false,
      ultimateTitle: "专业评委高分黑马（极重高出力雪山强项 · ⚠️无插手兜）",
      brand: "Norrøna",
      brandCn: "挪威老人头 Norrøna",
      name: "trollveggen GORE-TEX PRO Light Jacket Men's（巨魔墙轻量化 Pro 版）",
      sku: "1604-25",
      image: "./assets/products/08-norrona-trollveggen.jpg",
      imageNote: "Norrøna 官网 1604-25 高领与双胸袋实拍图（下展示内叠中层结构）",
      price: {
        display: "¥4,400–¥5,450（美官 $749）",
        officialRef: "美国官网 $749 / 淘宝专业代购 ¥5,450 左右",
        tierNumeric: 5100
      },
      urls: {
        official: "https://www.norrona.com/us/en/product/trollveggen/trollveggen-gore-tex-pro-jacket-men-1604-25",
        taobao: "https://www.taobao.com/list/item/SDFtVVFpbFhNeldETytSTURkNWkzdz09.htm",
        taobaoLabel: "淘宝 八峰户外 Norrøna 1604-25 代购页 ↗",
        jd: "https://search.jd.com/Search?keyword=Norrona+Trollveggen+1604-25",
        jdLabel: "京东 Norrøna 1604-25 精准检索（暂无官方自营SKU） ↗"
      },
      skuVerification: "已核对 1604-25（巨魔墙 Pro Light 最新 2025/26 ePE 升级版）与淘宝代购完全一致；京东无官方直营店勿误买仿品",
      skuMatchOk: true,
      specs: {
        membrane: "3L GORE-TEX PRO ePE（PFAS-free）",
        waterproofMm: "28,000 mmH₂O（全山脊极端防水）",
        breathabilityMetric: "高达 18–20 in（约 50cm）巨幅双向腋下拉链 + 双向主拉链",
        faceFabric: "40D 再生锦纶大身 + 70D×160D 再生锦纶肩袖头帽超高强加固",
        garmentWeight: "432 g（15.2 oz 官方标称，OGL 实称 XL 约 476g）",
        garmentWeightNum: 432,
        zippers: "2-Way 双向防水主拉链 + 全榜最长 ~50cm 双向腋下拉链",
        hoodAndSkirt: "单绳调节兼容头盔帽（护领密闭） ｜ 加长燕尾 Y-cut 后摆（无雪裙）",
        pockets: "3 个高胸/内口袋（⚠️ 完全取消腰间暖手插兜！纯攀登布局）",
        cutType: "Y-cut 欧洲高山运动剪裁（修腰宽肩长背 85cm）"
      },
      size180_80: {
        pick: "必选 欧版 L（178–186cm / 胸围 101–107cm；千万别按偏小 M 下单）",
        detail: "虽叫 Y-cut，Reddit r/Norrona 对「180cm / 85kg」极其相近体型的选码反馈验证 Norrøna 胸腔略微收紧。180/80 必须选 L 才能舒展叠放 F1106KH 中层（其超长护臀后摆可达 85cm 护腰不露背）；M 会卡紧胸部并丧失抬臂余量。"
      },
      officialDesc: "挪威百年登山名门旗下最轻量但强韧的山峰硬壳（432g 却把肩肘头盔区堆至 70D×160D GORE-TEX PRO ePE，衣身采用灵活的 40D）。带 Y 型动态人体工学剪裁、85cm 加长防风后摆与 50cm 巨型腋下拉链，全部工厂公开可溯（中国 Zplus 制造）。",
      rationale: [
        "优点：2026 四家国际独立专业大媒同时给出炸裂高分（OGL #2 82分 / Better Trail 4.8 / CleverHiker 4.8 / Switchback Travel 4.6），432g 却具备 70D×160D 肩铠与全榜最大透气量，如果你极其厌恶爬坡闷汗、且对双向前拉链有执念，它比 Beta AR 更透气耐抽！",
        "不适合当作「泛用第一名」的两大设计取舍：① 完全没有传统双手暖手插袋！东北营地散步或休息时想把手顺手插进两侧衣兜暖手直接落空（仅 2 个拉链大胸袋）；② 单向快速收放风帽在放下帽兜时不戴手套会觉得衣领稍微抵腮，国内购买亦无官旗售后保障。"
      ],
      scores: { waterproof: 4.8, breathability: 4.9, durability: 4.5, mobility: 4.7, snowDefense: 4.6, overall: 4.7 },
      audit: {
        totalReviewsPlatform: "Norrøna 官网 24 条实购评（4.7/5：5★ 18 / 4★ 6，零差评）",
        userReviewsRead: 8,
        qaRead: 0,
        userReviewQuotes: [
          "官网 Verified Buyer 一致称赞 50cm 腋下拉链与 85cm 后背长度大风雪全盖护臀；少数用户指出领口收窄及缺乏腰两侧插手兜"
        ],
        proTestsRead: 4,
        proTestSources: "4 家独立户外评测实验室连读（OutdoorGearLab 82/100 榜2、Switchback Travel 4.6/5 2026-02、Better Trail 4.8/5 2026-06、CleverHiker 4.8/5 2026-10）＋ Reddit r/Norrona 2 贴",
        credibilityAndAdFilter: "极致纯正专业大媒与欧洲实名买家源！完全无国内“老品牌”与山寨同名“诺诗兰”混淆，清晰披露无侧兜重大取舍。"
      }
    },
    {
      id: "top-beta-ar",
      rank: 9,
      category: "top",
      categoryLabel: "顶级性能",
      isUltimate: true,
      ultimateTitle: "★ 顶级性能终极推荐（全能无短板 · 2026 F26 80D+100D PRO ePE）",
      brand: "Arc'teryx",
      brandCn: "始祖鸟",
      name: "Beta AR Jacket Men's（新一代 GTX PRO ePE）",
      sku: "X000011062（2026 F26 新代，替代上代 X000009906）",
      image: "./assets/products/09-arcteryx-beta-ar.jpg",
      imageNote: "Arc'teryx Beta AR X000011062 F26 官方实拍图（展示独立 DropHood 高领结构）",
      price: {
        display: "¥4,600–¥6,400（美官 $650 / 天猫官旗 ¥6,400）",
        officialRef: "天猫旗舰店 ¥6,400（山姆全球购等合规跨境有时下探至 ¥4,600–¥5,600，注意售后差异）",
        tierNumeric: 5900
      },
      urls: {
        official: "https://arcteryx.com/us/en/shop/mens/beta-ar-jacket-1062",
        taobao: "https://world.taobao.com/item/VncyeHdaVzZ0anlCRW04QUtBcHlMdz09.htm",
        taobaoLabel: "天猫 Arc'teryx 官方旗舰店 (¥6,400 正品专链) ↗",
        jd: "https://item.jd.com/10129706121734.html",
        jdLabel: "京东 Beta AR 核对专链 (10129706121734) ↗"
      },
      skuVerification: "已核对 X000011062 新版 ePE + 80D/100D 规格；⚠️ 注意区分无 DropHood 高领的轻量版 Beta / Beta SL 40D",
      skuMatchOk: true,
      specs: {
        membrane: "3L GORE-TEX PRO ePE（PFAS-free + FC0 DWR）",
        waterproofMm: "最高等级 GORE-TEX PRO 风暴全防护（OGL 防水分 9.3/10）",
        breathabilityMetric: "15 in（约 38cm）WaterTight™ 腋下拉链",
        faceFabric: "80D 再生平纹锦纶（126gsm）大身 + 100D 加固肩臂（136gsm）",
        garmentWeight: "460 g（M 码；OGL 实称 16 oz / 454g）",
        garmentWeightNum: 460,
        zippers: "单向 WaterTight 主拉链 + 双向腋下散热拉链",
        hoodAndSkirt: "独创 DropHood™ 独立立领兼容头盔帽（4 向抽绳） ｜ 无雪裙 + RECCO",
        pockets: "3 口袋（2 兼容背包腰带高位防雪插手兜 + 1 内胸拉链袋）",
        cutType: "2026 Revised Regular Fit（大尺码略加宽，后背长 77cm）"
      },
      size180_80: {
        pick: "精准选 欧美 L 码（美官身胸 109cm / 袖长 89cm / 腰 94cm）",
        detail: "始祖鸟官网已正式公布 Men's Fit 改版：「M 维持不变，L 及以上尺码略加宽加松」——所以 180/80cm 叠加美利奴 + 黑冰 F1106KH 连帽中层时，L 码完全消除了旧款卡肩的风险，同时绝不像 XL（119cm 身胸/91cm 长袖）那样变成宽松大帐篷并妨碍最外层直接套穿波司登羽绒！唯一注意点：DropHood 与 F1106KH 连帽叠加后，可将内帽自然垂放立领内或翻出护颈。"
      },
      officialDesc: "始祖鸟诞生二十余载的“全山地标杆”硬壳全面进化：在 2026 新代 X000011062 上放弃老款聚四氟乙烯膜全面切换无氟高强 GORE-TEX PRO ePE，将大身由旧 40D 全面拉升至 80D 平纹尼龙并保留肩臂 100D 防磨甲区，同时维持 460g 轻量与无可匹敌的 DropHood 独立防风高领剪裁。",
      rationale: [
        "【顶级性能终极推荐理由】：OutdoorGearLab 2026 年 6 月最新测评全场第一名（83/100，Editors' Choice Best Mobility），灵活度 9.2 分全行业断档领先——东北冬季爬山穿重装包＋手握登山杖举臂攀爬下摆绝不上蹿；460g 轻量下居然给了全 80D+100D 抗造尼龙，且保留平时极其需要的双手插袋 + 独立防风立领，无论是动线还是舒适度零明显短板。",
        "客观缺点与渠道警示：① 单向主拉链且无内置雪裙（如极度看重深粉雪防风裙且不追顶牌，同表 凯乐石 MONT X 只要不到一半价位且带雪裙+双向拉链）；② 山姆等跨境渠道比天猫旗舰店（¥6,400）常便宜 ¥1,000+，但牺牲国内 7 天无理由与官方门店直接保养维修通道；③ 下单时注意 X000011062 为最新 80D ePE 款。"
      ],
      scores: { waterproof: 4.9, breathability: 4.5, durability: 4.8, mobility: 4.9, snowDefense: 4.6, overall: 4.8 },
      audit: {
        totalReviewsPlatform: "始祖鸟官网 274 条（4.21/5，诚实保留历史产品评价与对无氟 FC0 防泼水需勤洗反馈）+ 京东天猫评价",
        userReviewsRead: 10,
        qaRead: 0,
        userReviewQuotes: [
          "美官高分实评一致点赞 80D/100D 新面布耐用感及 DropHood 领口防风隔离；少数低分吐槽集中在 FC0 涂层沾油污后更容易需清洗烘干保持拨水性"
        ],
        proTestsRead: 4,
        proTestSources: "OutdoorGearLab 2026-06-26 全场 #1 实测（83/100：Weather 9.3 / Mobility 9.2 / Venting 7.1 / Weight 7.0 / Features 8.0）＋ Switchback Travel ＋ Exploring Wild 长测 ＋ SMZDM 山姆 vs 天猫售后真伪对比贴 (p/aomqg4wn)",
        credibilityAndAdFilter: "顶级客观。不吹嘘“始祖鸟能免洗穿三年”，直接按 2026 年新发 ePE+FC0 版本提示 DWR 洗护周期，并严正交代国内高价税与海外/山姆售后取舍。"
      }
    },
    {
      id: "top-mammut-eiger",
      rank: 10,
      category: "top",
      categoryLabel: "顶级性能",
      isUltimate: false,
      ultimateTitle: "极寒重装阿尔卑斯重装甲备选（¥9,999 天花板 · 重达 714g）",
      brand: "Mammut",
      brandCn: "猛犸象",
      name: "Eiger Nordwand Pro HS Hooded Jacket Men（艾格极限专业硬壳）",
      sku: "1010-31750（第六代 Eiger Extreme · 艾格橙 2291 / 曜石黑 0001）",
      image: "./assets/products/10-mammut-eiger.jpg",
      imageNote: "Mammut 猛犸象艾格极限 1010-31750 官方产品图",
      price: {
        display: "¥7,800–¥9,999（美官 $1,099）",
        officialRef: "美国官网 $1,099 / 国内天猫旗舰店 ¥9,999",
        tierNumeric: 9200
      },
      urls: {
        official: "https://www.mammut.com/us/en/products/1010-31750-2291/eiger-nordwand-pro-hs-hooded-jacket-men",
        taobao: "https://www.taobao.com/list/item/TGViWEhSWnJwNGxuS1NScXBOb3NaZz09.htm",
        taobaoLabel: "天猫 猛犸象旗舰店 Eiger 1010-31750 (¥9,999) ↗",
        jd: "https://search.jd.com/Search?keyword=Mammut+1010-31750",
        jdLabel: "京东 1010-31750 精准检索（勿误买同系列软壳单链接） ↗"
      },
      skuVerification: "已核对第六代 1010-31750；京东搜出的 1063064 链接实为同名软壳，切勿误买",
      skuMatchOk: true,
      specs: {
        membrane: "3L GORE-TEX PRO ePE（PFAS-free）",
        waterproofMm: "28,000 mmH₂O",
        breathabilityMetric: "RET < 13 + 双向腋下透气拉链",
        faceFabric: "全衣 80D × 80D 100% 再生强力耐磨锦纶",
        garmentWeight: "714 g（官网实标重装防弹级自重）",
        garmentWeightNum: 714,
        zippers: "双向 #5 YKK VISLON® AquaGuard 大齿主拉链（戴厚手套绝不卡链） + 双向腋下拉链",
        hoodAndSkirt: "头盔兼容加固暴雪帽 ｜ 可拉链完全拆卸高雪裙 + RECCO + 随衣原厂修补包",
        pockets: "7 口袋全武装（含 2 个专供极端低温靠体温烘烤备用手套的大内网兜！）",
        cutType: "阿尔卑斯极寒大空间叠加剪裁"
      },
      size180_80: {
        pick: "选欧版 L 码（对应 180–186cm / 胸围 100–107cm）",
        detail: "作为正统阿尔卑斯北壁远征装甲，艾格本就预设了内部套穿抓绒/羽绒中层与胸前大网兜里再塞一双厚保暖手套的空间！180/80 买欧版 L（不需刻意加大）就能惬意容纳 F1106KH 并保持拉链滑顺。"
      },
      officialDesc: "猛犸象 Eiger Extreme 北壁极地技术旗舰第 6 代巅峰作品：全衣采用 80D×80D 再生尼龙与最新 GORE-TEX PRO ePE 打造，搭载 28,000 mm 防水、戴连指手套仍盲操顺滑的大齿 #5 YKK VISLON 双向主拉链、可拆防风雪裙、7 大口袋（内含手套保温网格袋）与原厂应急修补组件。",
      rationale: [
        "【极端恶劣天选备选理由】：如果你要面对连续零下 30°C 无人雪脊抗 8 级狂风、必须戴极寒连指厚手套单手拉合大齿防冻主拉链、把湿冷薄手套揣进内胸网兜烘干，它几乎没有对手（Packstack 2026-09 实测给到 8/10 高分）。",
        "为何落选「常规东北冬徒终极首推」：714 g 实在太重（比 Beta AR 足足重出一件抓绒中层的重量！），且高昂近万元定价使日常穿行树林时的性价比与轻灵度远低于 460g 的 Arc'teryx Beta AR，建议留给极端冰雪攀登重装玩家。"
      ],
      scores: { waterproof: 4.9, breathability: 4.2, durability: 5.0, mobility: 4.3, snowDefense: 5.0, overall: 4.6 },
      audit: {
        totalReviewsPlatform: "Mammut 美国官网 10 条实购评价（4.6/5）",
        userReviewsRead: 6,
        qaRead: 0,
        userReviewQuotes: [
          "官网 Verified Buyer（2026）：极度赞赏 #5 VISLON 大齿防冻拉链与 7 个专业兜位的冬季极寒人体工学，少数反馈明确表示太硬核偏重只合雪山"
        ],
        proTestsRead: 1,
        proTestSources: "Packstack 独立专业长测 (2026-09-17 · 8/10：深度证实 714g 重装甲与高海拔耐虐属性)",
        credibilityAndAdFilter: "高可信。已甄别京东同关键词跳转至软壳款的问题，并在正文如实披露其 714g 自重冗余。"
      }
    }
  ],

  eliminatedCandidates: [
    {
      name: "Rab Kangri GTX (QWI-48)",
      price: "海外 £340 / 国内天猫 ¥4,499",
      reason: "核心淘汰原因：① 官网实查其风帽明确不支持戴头盔（叠戴自带连帽的黑冰 F1106KH 后领围明显偏局促）；② 国内天猫售价高达 ¥4,499（几乎追平始祖鸟渠道价与凯乐石近两倍），却仍保留较硬的常规老 70D 剪裁，在东北选购场景被 Beta AR（¥4,600–¥6,400）与凯乐石 MONT X（¥2,600）上下夹击淘汰。"
    },
    {
      name: "Montbell Storm Cruiser Jacket (#1128733 新代)",
      price: "日本本土约 ¥1,400–¥1,700",
      reason: "重大换代淘汰警示：老版虽是神级雨壳，但最新版 #1128733 已经用自家无氟 DRYTEC 薄膜取代 GORE-TEX！极多历史评测仍挂羊头卖狗肉。此外 30D 超薄雨壳无防风裙且未设腋下透气拉链（蒙贝尔将腋下拉链分给了 Tempest/Peak Shell），并不胜任东北重装爬雪坡强出汗与极寒暴雪。"
    },
    {
      name: "Kailas MONT X 无防风裙 SKU (KG2631109)",
      price: "同挂在 ¥2,800 主链接下混售",
      reason: "典型的「Link-to-SKU 隐性减配」陷阱：同一天凯乐石官旗界面中，勒多曼因蓝部分批号后缀印有 [（无防风裙）]，如果没核对 SKU 后缀直接闭眼下单就会买到少了最关键防雪倒灌防风裙的阉割批次。"
    },
    {
      name: "各类四五百元「三合一」内胆可拆伪硬壳（如山野 2.0/狂风等）",
      price: "¥400–¥800",
      reason: "你已手握高质量美利奴+黑冰 F1106KH（Primaloft Active）与波司登！三合一壳内部预留了笨重抓绒挂链轨、往往用重磅吸潮的聚酯里布+低透湿压胶，叠加在 F1106KH 外侧只会极度臃肿捂汗结冰。必须采购纯粹轻简单层 3L 无内胆专业硬壳！"
    }
  ],

  auditFindings: [
    {
      type: "反AI伪测评抓包（重要警示）",
      isWarning: true,
      target: "SMZDM 两篇热搜「实测」贴 (p/a26ek8x2 & p/arldno9g)",
      finding: "点进搜出的高排名“暴雨实测28195mm防水！诺诗兰飓风3.0值不值”及“伯希和400+用户真实大PK”，底部角落均印有「内容由AI生成」！更离谱的是前者凭空编造「凯乐石 MONT X 重 619g / 透湿 15,000g」（而凯乐石官方至今未标克重）。本次已全部降权剔除，改用海外权威实验室 OGL 实测打分 + 天猫单链接真追评。"
    },
    {
      type: "官网物料文本乌龙核查",
      isWarning: true,
      target: "伯希和中文官网 (pelliot.com.cn/product/237.html)",
      finding: "核查官网北极星产品页时发现大段复制错位的「橱窗陈列能调动消费者视觉神经…」宣传废话，且电商图文均拒绝披露面布纱线具体 D 数及克重；我们依靠放大查核官旗细节结构图才证实其 7D Tricot 背衬、N66 弹力尼龙、RECCO 与双向拉链配置，并从 80 条真评揪出「薄型 · 防风全靠叠穿」本相。"
    },
    {
      type: "同链接多 SKU 减配与电商渠道差价核查",
      isWarning: true,
      target: "拓路者雪鹰 2.0 / 凯乐石 MONT X / 始祖鸟山姆渠道",
      finding: "1) 拓路者雪鹰默认爆款价写明「单冲无 RECCO 无雪裙」，与宣传高山雪裙配置不一致；2) 凯乐石主链内 KG2631109 无雪裙而 KG2611104 带雪裙；3) 始祖鸟通过山姆等合规跨境虽可低至 ¥4,600–¥6,499（同代差价千余元），但必须面对放弃国内官店 ReBIRD 洗护维修及无理由退换的规则。"
    },
    {
      type: "C0 非氟 DWR 防泼水“阴湿”现象溯源",
      isWarning: false,
      target: "2025–2026 全部新代 GORE-TEX ePE / H2No 无 PFAS 硬壳",
      finding: "从诺诗兰 XXXL 买家「没洗前襟两月即阴水」、始祖鸟官网差评与 Patagonia 长测跨平台印证：全球环保禁氟（PFAS-free / C0）新代外层抗油脂极弱！一旦外衣沾灰或皮脂不定期机洗并低温烘干，外层布湿润（wet-out）就会导致水膜憋住里层汗汽产生「以为漏水的冷凝错觉」。这绝不是膜破了，而是冬季必须注意的保养新铁律。"
    }
  ]
};
